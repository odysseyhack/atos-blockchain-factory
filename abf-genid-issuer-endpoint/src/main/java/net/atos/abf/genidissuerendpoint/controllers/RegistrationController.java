package net.atos.abf.genidissuerendpoint.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.stereotype.Component;
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
@RestController
public class RegistrationController {

    // @Resource
    IdValidatorService idValidatorService;

    // @Resource
    PortraitValidatorImpl portraitValidator;

    // @Resource
    DigidValidatorImpl digidValidator;

    // @GET
    // @Path("/ok")
    @GetMapping("/ok")
    public Response getOkResponse() {

        String message = "This is a text response";

        return Response.status(Response.Status.OK).entity(message).build();
    }

    // @GET
    // @Path("/version")
    @GetMapping("/version")
    public Response getVersion() {
        return Response.ok().entity("1.0").build();
    }

    @PostMapping("/register")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({ MediaType.APPLICATION_JSON })
    public Response getRegistration(DidEvidence evidence) {
        // boolean valid = idValidatorService.validate(evidence.getPhotoId())
        //         && portraitValidator.validate(evidence.getPhotoPortrait())
        //         && digidValidator.validate(evidence.getDigidEvidence());
        boolean valid = true;
        if (valid) {
            return writeSignedDidFromFile();
        } else {
            return Response.status(Response.Status.BAD_REQUEST).build();
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
        return Response.status(Response.Status.OK).entity(message).build();
    }

}
