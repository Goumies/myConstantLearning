package org.goumiesland.taskscheduler;


import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static java.time.DayOfWeek.*;
import static org.assertj.core.api.Assertions.assertThat;

class UtilsTest {

    @Test
    void testGenerateWorkPeriods() {
        LocalDate thur24May2017 = LocalDate.of(2018, 5, 24);
        List<WorkPeriod> workPeriods = Utils.generateWorkPeriods(thur24May2017, 3);
        assertThat(workPeriods.size()).isEqualTo(6);
        assertThat(Arrays.asList(THURSDAY, FRIDAY, MONDAY))
                .isEqualTo(workPeriods.stream()
                        .map(WorkPeriod::getStartTime)
                        .map(LocalDateTime::getDayOfWeek)
                        .distinct()
                        .collect(Collectors.toList()));
    }

    @Test
    void basicSplit() {
        LocalDateTime startTime = LocalDate.now().atTime(23, 0);
        LocalDateTime endTime = LocalDate.now().plusDays(1).atTime(1, 0);
        WorkPeriod wp = new WorkPeriod(startTime, endTime);
        Optional<WorkPeriod> newPeriod = wp.split();

        LocalDateTime midnight = LocalDate.now().plusDays(1).atStartOfDay();
        assertThat(newPeriod).isEqualTo(Optional.of(new WorkPeriod(startTime, midnight)));
        assertThat(wp).isEqualTo(new WorkPeriod(midnight, endTime));
    }
}