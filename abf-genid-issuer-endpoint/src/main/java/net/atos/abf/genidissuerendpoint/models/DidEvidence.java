package net.atos.abf.genidissuerendpoint.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@AllArgsConstructor
@Data public class DidEvidence {

    private IdCardType idType;
    private Id photoId;
    private byte[] photoPortrait; //TODO determine specific format?
    private Object digidEvidence;
}
