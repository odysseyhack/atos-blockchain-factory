package net.atos.abf.genidissuerendpoint.controllers;

import org.springframework.web.bind.annotation.RestController;

import net.atos.abf.genidissuerendpoint.models.DidEvidence;
import net.atos.abf.genidissuerendpoint.models.Id;
import net.atos.abf.genidissuerendpoint.services.*;

import java.util.Random;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class RegistrationController {

    @Resource
    IdValidatorService idValidatorService;

    @GetMapping(value="/register")
    public boolean getRegistration(@RequestBody DidEvidence evidence) {
        return idValidatorService.validate(evidence.getPhotoId());
    }
    
}
