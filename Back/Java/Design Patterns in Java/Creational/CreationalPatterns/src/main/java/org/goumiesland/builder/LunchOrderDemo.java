package org.goumiesland.builder;

import static org.goumiesland.builder.LunchOrder.aLunchOrder;

public class LunchOrderDemo {
    public static void main(String[] args) {
        LunchOrder lunchOrder = aLunchOrder
                .withLunchStarter("My Starter")
                .withMainCourse("My Lasagna")
                .build();
        System.out.println("lunchOrder#1 = " + lunchOrder);

        MyLunchOrder myLunchOrder = new MyLunchOrder.MyLunchOrderBuilder()
                .withLunchStarter("My Chèvre chaud")
                .withMainCourse("My Lasagna")
                .build();
        System.out.println(myLunchOrder);

        lunchOrder = aLunchOrder
                .withLunchStarter("My Oeuf Mimosa")
                .withMainCourse("My Lasagna")
                .build();
        System.out.println("lunchOrder#2 = " + lunchOrder);
    }
}
