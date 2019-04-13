package net.atos.abf.genidissuerendpoint.controllers;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.core.Is.isA;

import javax.annotation.Resource;
import javax.ws.rs.core.Response;

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

        
        Response result = controller.getRegistration(evidence);
        assertThat(result.getStatus(), is(Response.Status.OK.getStatusCode()));
        assertThat(result.getEntity().toString(), containsString("did:nlgov"));
	}
}