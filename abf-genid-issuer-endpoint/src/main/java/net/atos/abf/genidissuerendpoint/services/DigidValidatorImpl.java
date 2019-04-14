package net.atos.abf.genidissuerendpoint.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class DigidValidatorImpl implements Validator<Object> {

    @Override
    public boolean validate(Object data) {
        boolean result = true;

        log.info("validated portrait {}", result);
        return result;
    }
}
