package org.goumiesland.taskscheduler;

import java.time.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

public class Utils {
    private static LocalTime amStart = LocalTime.of(9, 0);
    private static LocalTime pmStart = LocalTime.of(13, 30);
    // .plusMinutes = adjustment method
    private static Duration workPeriodLength = Duration.ofHours(3).plusMinutes(30);

    public static List<WorkPeriod> generateWorkPeriods(LocalDate date, int dayCountInclusive) {
        List<LocalDate> workingDays = generateWorkingDays(date, dayCountInclusive);
        return generateWorkPeriods(workingDays, amStart, workPeriodLength,
                pmStart, workPeriodLength);
    }

    private static List<WorkPeriod> generateWorkPeriods(List<LocalDate> days, LocalTime amStart, Duration amDuration, LocalTime pmStart, Duration pmDuration) {
        List<WorkPeriod> periods = new ArrayList<>();
        for (LocalDate day : days) {
            LocalDateTime thisAmStart = LocalDateTime.of(day, amStart);
            // .plus = adjustment method
            periods.add(new WorkPeriod(thisAmStart, thisAmStart.plus(amDuration)));
            LocalDateTime thisPmStart = LocalDateTime.of(day, pmStart);
            periods.add(new WorkPeriod(thisPmStart, thisPmStart.plus(pmDuration)));
        }
        return periods;
    }

    private static List<LocalDate> generateWorkingDays(LocalDate startDate, int dayCountInclusive) {
        return Stream.iterate(startDate, date -> date.plusDays(1))
                .filter(Utils::isWorkingDay)
                .limit(dayCountInclusive)
                .collect(toList());
    }

    private static boolean isWorkingDay(LocalDate date) {
        return date.getDayOfWeek() != DayOfWeek.SATURDAY &&
                date.getDayOfWeek() != DayOfWeek.SUNDAY;
    }
}
