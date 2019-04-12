package net.atos.abf.genidissuerendpoint.services;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import net.atos.abf.genidissuerendpoint.models.*;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class IdValidatorService {

    @Resource
    DutchIdValidatorImpl dutchIdValidatorImpl;

    public boolean validate(Id id) {
        
        switch(identify(id)) {
            case DUTCH_NATIONAL_ID:
                id.setName(IdCardType.DUTCH_NATIONAL_ID.name());
                return dutchIdValidatorImpl.validate(id);
            case DUTCH_DRIVER_LICENCE:
                return false; //not implemented
            case DUTCH_PASSPORT:
                return false; // not implemented
            default:
                return false;
        }
    }

    private IdCardType identify(Id id) {
        //TODO identify the document for real (but with a mock)
        return IdCardType.DUTCH_NATIONAL_ID;
    }
    
}