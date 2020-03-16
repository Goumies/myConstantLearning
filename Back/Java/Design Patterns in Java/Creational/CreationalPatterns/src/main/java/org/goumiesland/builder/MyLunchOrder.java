package org.goumiesland.builder;

public class MyLunchOrder {

    private final String lunchStarter;
    private final String mainCourse;
    private final String dessert;

    public MyLunchOrder(String lunchStarter, String mainCourse, String dessert) {
        this.lunchStarter = lunchStarter;
        this.mainCourse = mainCourse;
        this.dessert = dessert;
    }

    @Override
    public String toString() {
        return "MyLunchOrder{" +
                "lunchStarter='" + lunchStarter + '\'' +
                ", mainCourse='" + mainCourse + '\'' +
                ", dessert='" + dessert + '\'' +
                '}';
    }

    public static class MyLunchOrderBuilder {
        // generated with IDE : ^+T (Refactor this) > Replace constructor with Builder
        // Default value = ""
        // > F6 (Move > Make inner class of)
        private String lunchStarter;
        private String mainCourse;
        private String dessert;

        public MyLunchOrderBuilder withLunchStarter(String lunchStarter) {
            this.lunchStarter = lunchStarter;
            return this;
        }

        public MyLunchOrderBuilder withMainCourse(String mainCourse) {
            this.mainCourse = mainCourse;
            return this;
        }

        public MyLunchOrderBuilder withDessert(String dessert) {
            this.dessert = dessert;
            return this;
        }

        public MyLunchOrder build() {
            return new MyLunchOrder(lunchStarter, mainCourse, dessert);
        }
    }
}
