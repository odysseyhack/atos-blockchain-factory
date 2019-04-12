package net.atos.abf.genidissuerendpoint.services;

import org.springframework.stereotype.Component;

@Component
public class DutchIdValidatorImpl extends IdValidator {
    
    @Override
    public boolean validateBack(byte[] back) {
        return false;
    }

    @Override
    public boolean validateFront(byte[] front) {
        return false;
    }
}
