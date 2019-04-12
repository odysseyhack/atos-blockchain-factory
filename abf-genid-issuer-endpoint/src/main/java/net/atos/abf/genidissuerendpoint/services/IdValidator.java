package net.atos.abf.genidissuerendpoint.services;

import org.springframework.data.util.Pair;

import lombok.extern.slf4j.Slf4j;
import net.atos.abf.genidissuerendpoint.models.Id;

public abstract class IdValidator implements Validator<Id> {
    
    @Override
    final public boolean validate(Id id) {
        return validateBack(id.getBack()) && validateFront(id.getFront());
    }

    abstract boolean validateBack(byte[] back);
    abstract boolean validateFront(byte[] front);
}
