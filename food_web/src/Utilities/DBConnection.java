package Utilities;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoDatabase;

public class DBConnection {

	static public MongoDatabase connectDB(String host, int port,String DBname,String username,String password) {
		MongoDatabase db = null;
		try {
			MongoClient mc = new MongoClient(host, port);
			db = mc.getDatabase(DBname);
			System.out.println("Success");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return db;

	}
}
