package org.goumiesland.taskscheduler;

import java.time.Duration;

public class TaskPart {
    final private Task owner;
    final private int partSequenceNumber;
    private Duration duration;


    public TaskPart(Task owner, Duration duration, int partSequenceNumber) {
        this.owner = owner;
        this.duration = duration;
        this.partSequenceNumber = partSequenceNumber;
    }

    public static TaskPart wholeOf(Task task) {
        return task.createTaskPart(task.getDuration());
    }

    @Override
    public String toString() {
        int taskPartCount = owner.getTaskPartCount();
        return owner.getDescription() +
                (taskPartCount != 1 ? "(" + partSequenceNumber + "/" + taskPartCount + ")" : "") +
                ", " + duration.toString();
    }

    public Duration getDuration() {
        return duration;
    }

    public TaskPart split(Duration beforeSplitDuration) {
        TaskPart newTaskPart = getOwner().createTaskPart(getDuration().minus(beforeSplitDuration));
        duration = beforeSplitDuration;
        return newTaskPart;
    }

    private Task getOwner() {
        return owner;
    }
}
