import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

// Connections and listeners
const port = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log("Server open and connected to database!");
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
    process.exit(1); // Exit the process with a non-zero exit code to indicate failure
  });

