package org.goumiesland.taskscheduler;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.*;

public class WorkPeriod {
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private List<TaskPart> taskParts;

    WorkPeriod(LocalDateTime startTime, LocalDateTime endTime) throws IllegalArgumentException {
        this(startTime, endTime, new ArrayList<>());
    }

    public WorkPeriod(LocalDateTime startTime, Duration d) {
        this(startTime, startTime.plus(d));
    }

    public WorkPeriod(LocalDateTime startTime, LocalDateTime endTime, List<TaskPart> taskParts) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.taskParts = taskParts;
        validatePeriodTimes(startTime, endTime);
    }

    private void validatePeriodTimes(LocalDateTime startTime, LocalDateTime endTime) {

    }

    public Duration getDuration() {
        return Duration.between(startTime, endTime);
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public Optional<WorkPeriod> split() {
        LocalDateTime midnight = startTime.toLocalDate().plusDays(1).atStartOfDay();
        return split(midnight);
    }

    public Optional<WorkPeriod> split(LocalDateTime splitTime) {
        // comparison methods : isAfter/Before/Equal, compareTo
        if (startTime.isBefore(splitTime) && splitTime.isBefore(endTime)) {
            WorkPeriod newPeriod =
                    new WorkPeriod(startTime, Duration.between(startTime, splitTime));
            startTime = splitTime;
            if (!taskParts.isEmpty()) {
                NavigableMap<LocalDateTime, TaskPart> timeToTaskPartMap = new TreeMap<>();
                LocalDateTime taskStartTime = newPeriod.getStartTime();
                for (TaskPart taskPart : taskParts) {
                    timeToTaskPartMap.put(taskStartTime, taskPart);
                    taskStartTime = taskStartTime.plus(taskPart.getDuration());
                }
                newPeriod.setTaskParts(new ArrayList<>(timeToTaskPartMap.headMap(splitTime).values()));
                setTaskParts(new ArrayList<>(timeToTaskPartMap.tailMap(splitTime).values()));

                Map.Entry<LocalDateTime, TaskPart> taskPartEntry = timeToTaskPartMap.lowerEntry(splitTime);
                TaskPart partToSplit = taskPartEntry.getValue();
                LocalDateTime partStartTime = taskPartEntry.getKey();
                Duration partDuration = partToSplit.getDuration();
                if (splitTime.isAfter(partStartTime) && partStartTime.plus(partDuration).isAfter(splitTime)) {
                    TaskPart newTaskPart = partToSplit.split(Duration.between(partStartTime, splitTime));
                    getTaskParts().add(0, newTaskPart);
                }
            }
            return Optional.of(newPeriod);
        }
        return Optional.empty();
    }

    private List<TaskPart> getTaskParts() {
        return taskParts;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        WorkPeriod that = (WorkPeriod) o;
        return Objects.equals(startTime, that.startTime) &&
                Objects.equals(endTime, that.endTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(startTime, endTime);
    }

    @Override
    public String toString() {
        String workPeriodHeader = "\n\tWork Period: " + startTime.toString() + " to " + endTime.toString();
        StringBuilder sb = new StringBuilder(workPeriodHeader);
        for (TaskPart t : taskParts) {
            sb.append("\n\t\t").append(t);
        }
        return sb.toString();
    }

    public void addTaskPart(TaskPart taskPart) {
        taskParts.add(taskPart);
    }

    public void setTaskParts(List<TaskPart> taskParts) {
        this.taskParts = taskParts;
    }
}
