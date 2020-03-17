package org.goumiesland.prototype;

public class Bag extends MyItem {
    private Bag.Matter matter;

    public Matter getMatter() {
        return matter;
    }

    public void setMatter(Matter matter) {
        this.matter = matter;
    }

    public enum Matter {
        LEATHER, COTTON
    }
}
