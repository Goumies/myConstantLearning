package org.goumiesland.prototype;

import java.util.HashMap;
import java.util.Map;

public class MyRegistry {
    private Map<ItemType, MyItem> items = new HashMap<>();

    public MyRegistry() {
        loadItems();
    }

    public <T> T createItem(ItemType type){
        T newItem = null;

        try {
            newItem = items.get(type).genericClone();
        }
        catch (CloneNotSupportedException e){
            e.printStackTrace();
        }

        return newItem;
    }

    private void loadItems(){
        Bag bag = new Bag();
        bag.setPrice(499.99);
        bag.setMatter(Bag.Matter.COTTON);
        bag.setTitle("Maronara");

        items.put(ItemType.BAG, bag);

        Furniture furniture = new Furniture();
        furniture.setYearsOfWarranty(10);
        furniture.setMatter(Furniture.Matter.WOOD);
        furniture.setTitle("XY Table");
        items.put(ItemType.FURNITURE, furniture);
    }
}
