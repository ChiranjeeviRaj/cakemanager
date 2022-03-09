package uk.hybridit.cakemanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class CakemanagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CakemanagerApplication.class, args);
	}

}
