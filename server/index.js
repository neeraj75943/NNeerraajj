import "dotenv/config";
import app, { connectToDatabase } from "./app.js";

const port = Number(process.env.PORT) || 5000;
connectToDatabase().then(() => {
  app.listen(port, () => console.log(`Contact API running at http://localhost:${port}`));
}).catch((error) => {
  console.error("Unable to start the contact API:", error.message);
  process.exitCode = 1;
});
