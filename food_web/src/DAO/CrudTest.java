package DAO;

import static java.util.Arrays.asList;

import java.util.ArrayList;
import java.util.List;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoIterable;
import com.mongodb.client.model.Indexes;
import static com.mongodb.client.model.Accumulators.sum;
import static com.mongodb.client.model.Aggregates.group;
import static com.mongodb.client.model.Aggregates.match;
import static com.mongodb.client.model.Filters.eq;

import Utilities.DBConnection;

public class CrudTest {

	public static void main(String args[]){
		MongoClient con=DBConnection.connectDB();
		MongoDatabase db=con.getDatabase("test");
		
		MongoIterable<String> collections=db.listCollectionNames();
		System.out.println(collections.first());
	     
		MongoCollection<Document> collection = db.getCollection("users");
		
		List<Document> documents = asList(
	               new Document("name", "Sun Bakery Trattoria")
	                       .append("stars", 4)
	                       .append("categories", asList("Pizza", "Pasta", "Italian", "Coffee", "Sandwiches")),
	               new Document("name", "Blue Bagels Grill")
	                       .append("stars", 3)
	                       .append("categories", asList("Bagels", "Cookies", "Sandwiches")),
	               new Document("name", "Hot Bakery Cafe")
	                       .append("stars", 4)
	                       .append("categories", asList("Bakery", "Cafe", "Coffee", "Dessert")),
	               new Document("name", "XYZ Coffee Bar")
	                       .append("stars", 5)
	                       .append("categories", asList("Coffee", "Cafe", "Bakery", "Chocolates")),
	               new Document("name", "456 Cookies Shop")
	                       .append("stars", 4)
	                       .append("categories", asList("Bakery", "Cookies", "Cake", "Coffee")));

//	       collection.insertMany(documents);
	       
	       // 3. Query 
	       List<Document> results = collection.find().into(new ArrayList<Document>());
	       System.out.println("results of query : " +results);	

	       // 4. Create Index 
	       collection.createIndex(Indexes.ascending("name"));
	       // 5. Perform Aggregation
	       collection.aggregate(asList(match(eq("categories", "Bakery")),
	               group("$stars",sum("count", 1))));
	       

	        con.close();
		
	}
	
}
