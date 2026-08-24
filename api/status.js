const XOFTWARE_BASE_URL = "https://backend-s2.xoftware.id/v1";

export default async function handler(req, res) {
  if (req.method !== "POST" && req.method !== "GET") {
    return res.status(405).json({
      status: false,
      message: "Method not allowed",
    });
  }

  try {
    const transactionId =
      req.method === "GET"
        ? req.query.transaction_id
        : req.body?.transaction_id;

    if (!transactionId) {
      return res.status(400).json({
        status: false,
        message: "transaction_id wajib diisi",
      });
    }

    const apiKey = process.env.XOFTWARE_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        status: false,
        message: "XOFTWARE_API_KEY belum dikonfigurasi",
      });
    }

    const response = await fetch(
      `${XOFTWARE_BASE_URL}/order/status`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": apiKey,
        },
        body: JSON.stringify({
          transaction_id: String(transactionId),
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || data.status === false) {
      return res.status(response.ok ? 400 : response.status).json({
        status: false,
        message: data.message || "Gagal mengecek status transaksi",
      });
    }

    return res.status(200).json({
      status: true,
      data: data.data,
    });
  } catch (error) {
    console.error("XOFTWARE STATUS ERROR:", error);

    return res.status(500).json({
      status: false,
      message: "Terjadi kesalahan saat mengecek status pembayaran",
    });
  }
}
