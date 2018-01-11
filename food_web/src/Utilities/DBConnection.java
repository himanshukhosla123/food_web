package Utilities;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoDatabase;

public class DBConnection {

	static public MongoClient connectDB() {
		MongoClient con = null;
		try {
			con = new MongoClient("localhost",27017);
			System.out.println("connection Success");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return con;

	}
}
