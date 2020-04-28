package org.goumiesland.repository;

import org.goumiesland.model.Speaker;

import java.util.ArrayList;
import java.util.List;

public class HibernateSpeakerRepositoryImpl implements SpeakerRepository {

    @Override
    public List<Speaker> findAll() {
        List<Speaker> speakers = new ArrayList<>();

        Speaker speaker = new Speaker();
        speaker.setFirstName("Romy");
        speaker.setLastName("Alula");

        speakers.add(speaker);

        return speakers;
    }
}
