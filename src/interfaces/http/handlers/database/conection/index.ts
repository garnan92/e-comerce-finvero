import { connect } from "mongoose";
import { MONGO_DB } from "infra/constants";

export const connectDB = async () => {
  const db = await connect(MONGO_DB);
  console.log("service connected", db.connection.db.databaseName);
};
