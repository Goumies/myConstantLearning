package org.goumiesland.taskscheduler;


import java.time.*;

public class TaskSchedulerDemo {
    public static void main(String[] args) {

        Clock testClock = Clock.fixed(Instant.EPOCH, ZoneOffset.UTC);
        LocalDate testDate = LocalDate.now(testClock);
        // Create a calendar com.pluralsight.jsr310.m4 (!?)
        //Calendar calendar = new Calendar();

        // Add some tasks (h, min, description)
        // calendar.addTask(1, 0, "Answer urgent e-mail");
        // calendar.addTask(4, 0, "Write deployment report");
        // calendar.addTask(4, 0, "Plan security configuration");

        // Add some work periods (List<WorkPeriod periods)
        // calendar.addWorkPeriods(Utils.generateWorkPeriods(LocalDate date, int dayCountInclusive));
        // calendar.addWorkPeriods(Utils.generateWorkPeriods(testDate, 3));

        // Add an event, specifying its time zone
        ZonedDateTime meetingTime = ZonedDateTime.of(testDate.atTime(8, 30), ZoneId.of("America/New_York"));

        // Create a working schedule
        // Schedule schedule = calendar.createSchedule(testClock);

        // And print it out
        // System.out.println(schedule);
    }
}
