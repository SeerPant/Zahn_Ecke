import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

//testing connection to database
prisma
  .$connect()
  .then(() => {
    console.log("Connected to postgres database");
  })
  .catch((error) => {
    console.error("Failed to connect to database:", error);
  });

export default prisma;
