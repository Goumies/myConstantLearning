package org.goumiesland.service;

import org.goumiesland.model.Speaker;
import org.goumiesland.repository.HibernateSpeakerRepositoryImpl;
import org.goumiesland.repository.SpeakerRepository;

import java.util.List;

public class SpeakerServiceImpl implements SpeakerService {

    private SpeakerRepository repository = new HibernateSpeakerRepositoryImpl();

    @Override
    public List<Speaker> findAll() {
        return repository.findAll();
    }
}
