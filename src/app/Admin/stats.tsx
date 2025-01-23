export default function handler(req, res) {
    if (req.method === "GET") {
      res.status(200).json({
        revenue: 12000,
        orders: 85,
        users: 342,
      });
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }
  