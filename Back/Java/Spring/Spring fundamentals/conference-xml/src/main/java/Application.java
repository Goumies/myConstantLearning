import org.goumiesland.service.SpeakerService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Application {
    public static void main(String... args) {

        // loads app context
        // maven builds by copying applicationContext.xml to /target/classes
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        //SpeakerService service = new SpeakerServiceImpl();

        SpeakerService service = applicationContext.getBean("speakerService", SpeakerService.class);
        System.out.println(service.findAll().get(0).getFirstName());
    }
}
