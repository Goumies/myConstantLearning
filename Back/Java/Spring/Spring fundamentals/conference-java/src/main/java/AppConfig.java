import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan({"org.goumiesland"})
public class AppConfig {

    /*@Bean(name = "speakerService")
    @Scope(value = BeanDefinition.SCOPE_SINGLETON)
    SpeakerService getSpeakerService() {
        SpeakerServiceImpl service = new SpeakerServiceImpl();
        //SpeakerServiceImpl service = new SpeakerServiceImpl();
        //service.setRepository(getSpeakerRepository());
        return new SpeakerServiceImpl(getSpeakerRepository());
    }

    @Bean(name = "speakerRepository")
    SpeakerRepository getSpeakerRepository() {
        return new HibernateSpeakerRepositoryImpl();
    }*/
}
