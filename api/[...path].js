import app, { connectToDatabase } from "../server/app.js";

export default async function handler(request, response) {
  try {
    await connectToDatabase();
    return app(request, response);
  } catch (error) {
    console.error("Unable to connect to MongoDB:", error.message);
    return response
      .status(500)
      .json({
        message:
          "Unable to send your message right now. Please try again later.",
      });
  }
}
