package org.goumiesland.repository;

import org.goumiesland.model.Speaker;

import java.util.List;

public interface SpeakerRepository {
    List<Speaker> findAll();
}
