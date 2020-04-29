package org.goumiesland.fundamentals;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FundamentalsApplication {

	public static void main(String[] args) {

		// Identifies the primary Spring component
		SpringApplication.run(FundamentalsApplication.class, args);
		System.out.println("Hello Pluralsight !");
	}

}
