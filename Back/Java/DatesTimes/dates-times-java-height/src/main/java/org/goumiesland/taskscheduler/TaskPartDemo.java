package org.goumiesland.taskscheduler;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Optional;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

public class TaskPartDemo {
    public static void main(String[] args) {
        Task first = new Task(30, "First");
        Task second = new Task(60, "Second");
        Task third = new Task(30, "Third");

        LocalDate testDate = LocalDate.of(2018, 5, 22);
        LocalTime testTime = LocalTime.of(9, 0);
        LocalDateTime startDateTime = LocalDateTime.of(testDate, testTime);

        WorkPeriod wp = new WorkPeriod(startDateTime, Duration.ofHours(2));

        wp.setTaskParts(Stream.of(first, second, third)
                .map(TaskPart::wholeOf)
                .collect(toList()));

        Optional<WorkPeriod> owp = wp.split(startDateTime.plusHours(1));

        owp.ifPresent(System.out::println);
        System.out.println(wp.toString());
    }
}
