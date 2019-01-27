package io.noga.sample;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.util.ResourceUtils;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;

public class JsonTest {
	
	private static String q = "dog";

	public static void main(String[] args) throws JsonParseException, JsonMappingException, IOException {
		File file = ResourceUtils.getFile("classpath:data.json");
		byte[] jsonData = Files.readAllBytes(Paths.get(file.toURI()));
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode rootNode = objectMapper.readTree(jsonData);
		
		Iterator<JsonNode> elements = rootNode.elements();
		
		ObjectMapper result = new ObjectMapper();
		ArrayNode resultArray = result.createArrayNode();
		
		while (elements.hasNext()) {
			JsonNode next = elements.next();
			
			try {
				
				String tag = next.path("tags").get(0).textValue();
				if (q.equals(tag)) {
					System.out.println(next);
					resultArray.add(next);
				}
			} catch (NullPointerException ne) {
				// pass
			}
		}
		System.out.println(resultArray);
		
	}
}
