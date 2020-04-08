package org.goumiesland.taskscheduler;

import java.time.*;
import java.util.NavigableMap;

public class Main {
    public static void main(String[] args) {

        LocalDate may22 = LocalDate.of(2018, Month.MAY, 22);
        LocalDateTime startTime = LocalDateTime.of(may22, LocalTime.of(9, 0));
        WorkPeriod firstWP = new WorkPeriod(startTime, startTime.plus(Duration.ofHours(3)));

        //firstWP.addTaskPart(new TaskPart());
        LocalDateTime splitTime = startTime.plus(Duration.ofMinutes(90));

        // Maintains keys in sorted order, it's a sub interface of Map
        NavigableMap<LocalDateTime, TaskPart> timeToTaskPart;

        // => Keys                  Values
        // 2018-05-22T09:00         Task 1 part 1
        // timeToTaskPart.headMap(2018-05-22T10:30)
        //  returns the portion of the map that is less than / equal to the split time
        // timeToTaskPart.tailMap(2018-05-22T10:30)
        //  returns the portion of the map that is greater than the split time
        // timeToTaskPart.lowerEntry(2018-05-22T10:30)
        //  returns the map entry is the last one before the split time

    }
}
