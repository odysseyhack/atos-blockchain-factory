package net.atos.abf.genidissuerendpoint.services;

import java.util.logging.Logger;

import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class PortraitValidatorImpl implements Validator<byte[]> {
    @Override
    public boolean validate(byte[] data) {
        boolean result = false;

        log.info("validated portrait {}", result);
        return result;
    }
}
