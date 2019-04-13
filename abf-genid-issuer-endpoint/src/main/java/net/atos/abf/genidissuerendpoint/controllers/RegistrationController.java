package net.atos.abf.genidissuerendpoint.controllers;

import lombok.extern.slf4j.Slf4j;
import net.atos.abf.genidissuerendpoint.models.DidEvidence;
import net.atos.abf.genidissuerendpoint.services.DigidValidatorImpl;
import net.atos.abf.genidissuerendpoint.services.IdValidatorService;
import net.atos.abf.genidissuerendpoint.services.PortraitValidatorImpl;
import org.springframework.core.io.ClassPathResource;

import javax.annotation.Resource;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.nio.file.Files;


@Slf4j
public class RegistrationController {

    @Resource
    IdValidatorService idValidatorService;

    @Resource
    PortraitValidatorImpl portraitValidator;

    @Resource
    DigidValidatorImpl digidValidator;

    @GET
    @Path("/ok")
    public Response getOkResponse() {

        String message = "This is a text response";

        return Response
                .status(Response.Status.OK)
                .entity(message)
                .build();
    }

    @GET
    @Path("/version")
    public Response getVersion() {
        return Response.ok()
                .entity("1.0")
                .build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON})
    @Path("/register")
    public Response getRegistration(DidEvidence evidence) {
        boolean valid = idValidatorService.validate(evidence.getPhotoId())
                && portraitValidator.validate(evidence.getPhotoPortrait())
                && digidValidator.validate(evidence.getDigidEvidence());

        if (valid) {
            return writeSignedDidFromFile();
        } else {
            return Response
                    .status(Response.Status.BAD_REQUEST)
                    .build();
        }
    }

    private Response writeSignedDidFromFile() {
        String message = null;
        try {
            ClassPathResource resource = new ClassPathResource("reply.json");
            message = new String(Files.readAllBytes(resource.getFile().toPath()));
        } catch (IOException e) {
            e.printStackTrace();
            log.error("could not load reply", e);
            return Response.serverError().build();
        }
        return Response
                .status(Response.Status.OK)
                .entity(message)
                .build();
    }

}
