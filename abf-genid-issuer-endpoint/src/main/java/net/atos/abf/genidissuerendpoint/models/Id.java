package net.atos.abf.genidissuerendpoint.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Builder
@Data public class Id {

    private String name;

    private byte[] back; //TODO determine specific format?
    private byte[] front; //TODO determine specific format?
}
