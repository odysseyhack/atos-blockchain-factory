package net.atos.abf.genidissuerendpoint;

import net.atos.abf.genidissuerendpoint.controllers.RegistrationController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses=RegistrationController.class)
public class GenidIssuerEndpointApplication {

	public static void main(String[] args) {
		SpringApplication.run(GenidIssuerEndpointApplication.class, args);
	}

}
