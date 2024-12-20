import databaseConnection from '../config/dbConfig.js';

const dbConnection = await databaseConnection(
  process.env.MONGODB_CONNECTION_STRING
);

export async function getAllPosts() {
  const db = dbConnection.db("instabytes");
  const collection = db.collection("posts");

  return collection.find().toArray();
}