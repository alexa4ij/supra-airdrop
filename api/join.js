export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { wallet } = req.body;

    if (!wallet) {
        return res.status(400).json({ message: "Wallet required" });
    }

    // SIMPAN SEMENTARA (dummy, nanti bisa ke database)
    console.log("New Airdrop:", wallet);

    return res.status(200).json({
        success: true,
        message: "Joined airdrop!"
    });
}
