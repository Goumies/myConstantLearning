import org.goumiesland.repository.HibernateSpeakerRepositoryImpl;
import org.goumiesland.repository.SpeakerRepository;
import org.goumiesland.service.SpeakerService;
import org.goumiesland.service.SpeakerServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean(name = "speakerService")
    SpeakerService getSpeakerService() {
        //SpeakerServiceImpl service = new SpeakerServiceImpl();
        //service.setRepository(getSpeakerRepository());
        return new SpeakerServiceImpl(getSpeakerRepository());
    }

    @Bean(name = "speakerRepository")
    SpeakerRepository getSpeakerRepository() {
        return new HibernateSpeakerRepositoryImpl();
    }
}
