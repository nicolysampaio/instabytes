import { MongoClient } from 'mongodb';

export default async function databaseConnection(connectionString) {
  let mongoClient;

  try {
      mongoClient = new MongoClient(connectionString);
      console.log('Connecting to database cluster...');
      await mongoClient.connect();
      console.log('Connected to MongoDB with success!');

      return mongoClient;
  } catch (error) {
      console.error('Failed to connect to database!', error);
      process.exit(1);
  }
}