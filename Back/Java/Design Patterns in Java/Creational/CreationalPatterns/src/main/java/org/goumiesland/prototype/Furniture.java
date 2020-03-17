package org.goumiesland.prototype;

public class Furniture extends MyItem {
    private Furniture.Matter matter;
    private int yearsOfWarranty;

    public Furniture.Matter getMatter() {
        return matter;
    }

    public void setMatter(Furniture.Matter matter) {
        this.matter = matter;
    }

    public int getYearsOfWarranty() {
        return yearsOfWarranty;
    }

    public void setYearsOfWarranty(int yearsOfWarranty) {
        this.yearsOfWarranty = yearsOfWarranty;
    }

    public enum Matter {
        WOOD, PLASTIC
    }
}
