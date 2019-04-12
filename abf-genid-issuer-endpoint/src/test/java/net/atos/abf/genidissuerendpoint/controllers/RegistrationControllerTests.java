package net.atos.abf.genidissuerendpoint.controllers;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import net.atos.abf.genidissuerendpoint.models.DidEvidence;
import net.atos.abf.genidissuerendpoint.models.Id;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RegistrationControllerTests {

    @Resource
    RegistrationController controller;

	@Test
	public void shouldGiveErrorWithEmptyRequest() {
        DidEvidence evidence = DidEvidence.builder()
                                .photoId(
                                    Id.builder()
                                      .back("back".getBytes())
                                      .front("front".getBytes())
                                      .build()
                                )
                                .photoPortrait("photoPortrait".getBytes())
                                .build();

        
        boolean result = controller.getRegistration(evidence);
        assertThat(result, is(true));
	}
}