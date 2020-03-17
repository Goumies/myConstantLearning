package org.goumiesland.prototype;

public class MyCustomPrototypeDemo {

    public static void main(String[] args) {
        MyRegistry registry = new MyRegistry();

        Bag myBag = registry.createItem(ItemType.BAG);
        myBag.setTitle("Gunter");
        myBag.setPrice(39.99);
        myBag.setMatter(Bag.Matter.LEATHER);

        Furniture myFurniture = registry.createItem(ItemType.FURNITURE);
        myFurniture.setTitle("My Chair");
        myFurniture.setPrice(500);
        myFurniture.setYearsOfWarranty(5);
        myFurniture.setMatter(Furniture.Matter.WOOD);

        System.out.println(myBag);
        System.out.println(myFurniture);
    }
}
