export default async function handler(req, res) {
    if (req.method === "POST") {
      try {
        const orderDetails = req.body;
  
        // Validate the incoming data
        if (!orderDetails || !orderDetails.productName || !orderDetails.rentalPrice) {
          return res.status(400).json({ error: "Invalid order details provided." });
        }
  
        // Simulate saving the order to a database (placeholder logic)
        console.log("Order Details:", orderDetails);
  
        // Simulate asynchronous operation (e.g., saving to a database)
        await new Promise((resolve) => setTimeout(resolve, 100)); // Simulated delay
  
        // Respond with success
        res.status(200).json({ message: "Your order has been placed successfully!" });
      } catch (error) {
        console.error("Error placing order:", error);
  
        // Respond with a server error
        res.status(500).json({ error: "Failed to place the order. Please try again later." });
      }
    } else {
      // Handle unsupported HTTP methods
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({ error: `Method ${req.method} not allowed.` });
    }
  }
  