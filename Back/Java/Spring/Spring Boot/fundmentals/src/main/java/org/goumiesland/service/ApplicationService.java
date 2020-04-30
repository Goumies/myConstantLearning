package org.goumiesland.service;

import org.goumiesland.entity.Application;

import java.util.List;

public interface ApplicationService {
    List<Application> listApplications();
    Application findApplication(long id);
}


