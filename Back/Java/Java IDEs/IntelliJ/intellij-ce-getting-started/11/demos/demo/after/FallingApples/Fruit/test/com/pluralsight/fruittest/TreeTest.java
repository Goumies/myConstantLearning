package com.pluralsight.fruittest;

import com.pluralsight.fruit.Apple;
import com.pluralsight.fruit.IFruit;
import com.pluralsight.fruit.Tree;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

/**
 * Created by David Starr.
 */
public class TreeTest {

    private ArrayList<IFruit> apples;
    private Tree tree;

    @Before
    public void before() {
        apples = new ArrayList<>();
        apples.add(new Apple());
        apples.add(new Apple());
        apples.add(new Apple());

        tree = new Tree(apples);
    }


    @Test
    public void hasAllFruit() {

        Assert.assertEquals(3, tree.getFruitOnTree());

    }

    @Test
    public void dropsAllFruit() {
        tree.dropFruit();
        tree.dropFruit();
        tree.dropFruit();
        Assert.assertEquals(0, tree.getFruitOnTree());


    }


}
