package org.goumiesland.builder;

public class LunchOrder {

    public static class Builder {
        private String lunchStarter;
        private String mainCourse;
        private String dessert;

        Builder(){
            this.lunchStarter = "";
            this.mainCourse = "";
            this.dessert = "";
        }

        Builder withLunchStarter(String lunchStarter){
            this.lunchStarter = lunchStarter;
            return this;
        }
        Builder withMainCourse(String mainCourse){
            this.mainCourse = mainCourse;
            return this;
        }
        Builder withDessert(String dessert){
            this.dessert = dessert;
            return this;
        }

        LunchOrder build(){
            return new LunchOrder(this);
        }
    }

    @Override
    public String toString() {
        return "LunchOrder{" +
                "lunchStarter='" + lunchStarter + '\'' +
                ", mainCourse='" + mainCourse + '\'' +
                ", dessert='" + dessert + '\'' +
                '}';
    }

    public static Builder aLunchOrder = new Builder();
    private final String lunchStarter;
    private final String mainCourse;
    private final String dessert;

    public LunchOrder(Builder aLunchOrder) {
        this.lunchStarter = aLunchOrder.lunchStarter;
        this.mainCourse = aLunchOrder.mainCourse;
        this.dessert = aLunchOrder.dessert;
    }
}
