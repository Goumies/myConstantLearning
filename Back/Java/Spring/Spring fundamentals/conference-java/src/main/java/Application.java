import org.goumiesland.service.SpeakerService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Application {
    public static void main(String... args) {

        // Loads Spring and its config to our app context
        // creates registry with Spring beans
        ApplicationContext appContext = new AnnotationConfigApplicationContext(AppConfig.class);

        // SpeakerService service = new SpeakerServiceImpl();
        SpeakerService service = appContext.getBean("speakerService", SpeakerService.class);

        System.out.println(service);
        System.out.println(service.findAll().get(0).getFirstName());

        SpeakerService service2 = appContext.getBean("speakerService", SpeakerService.class);
        System.out.println(service2);

    }
}
