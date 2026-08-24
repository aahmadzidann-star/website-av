const XOFTWARE_BASE_URL = "https://backend-s2.xoftware.id/v1";

export default async function handler(req, res) {
  // Checkout hanya menerima POST
  if (req.method !== "POST") {
    return res.status(405).json({
      status: false,
      message: "Method not allowed",
    });
  }

  try {
    const { sender, code, quantity = 1 } = req.body || {};

    // Validasi data dari cart.html
    if (!sender || !code) {
      return res.status(400).json({
        status: false,
        message: "sender dan code wajib diisi",
      });
    }

    const qty = Number(quantity);

    if (!Number.isInteger(qty) || qty < 1) {
      return res.status(400).json({
        status: false,
        message: "quantity tidak valid",
      });
    }

    const apiKey = process.env.XOFTWARE_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        status: false,
        message: "XOFTWARE_API_KEY belum dikonfigurasi",
      });
    }

    // Buat invoice QRIS di Xoftware
    const response = await fetch(
      `${XOFTWARE_BASE_URL}/order/qris`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": apiKey,
        },
        body: JSON.stringify({
          sender: String(sender).trim(),
          code: String(code).trim(),
          quantity: qty,
        }),
      }
    );

    const data = await response.json();

    // Teruskan error dari Xoftware tanpa membocorkan API key
    if (!response.ok || data.status === false) {
      return res.status(response.ok ? 400 : response.status).json({
        status: false,
        message: data.message || "Gagal membuat pembayaran QRIS",
      });
    }

    const payment = data.data;

    if (!payment?.transaction_id || !payment?.qr_string) {
      return res.status(502).json({
        status: false,
        message: "Response QRIS dari Xoftware tidak lengkap",
      });
    }

    // Hanya kirim data yang dibutuhkan frontend
    return res.status(200).json({
      status: true,
      data: {
        transaction_id: payment.transaction_id,
        amount: payment.amount,
        total_to_pay: payment.total_to_pay,
        qr_string: payment.qr_string,
        link: payment.link,
        expired_at: payment.expired_at,
        payment_status: payment.status,
      },
    });
  } catch (error) {
    console.error("XOFTWARE CHECKOUT ERROR:", error);

    return res.status(500).json({
      status: false,
      message: "Terjadi kesalahan saat membuat pembayaran",
    });
  }
}
