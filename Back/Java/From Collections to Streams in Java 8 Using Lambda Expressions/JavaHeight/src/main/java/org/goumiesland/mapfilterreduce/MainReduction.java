package org.goumiesland.mapfilterreduce;

import java.util.Arrays;
import java.util.List;
import java.util.function.BinaryOperator;

public class MainReduction {
    public static void main(String[] args) {

        List<Integer> ints = Arrays.asList(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
        List<Integer> ints1 = Arrays.asList(0, 1, 2, 3, 4);
        List<Integer> ints2 = Arrays.asList(5, 6, 7, 8, 9);
        List<Integer> ints3 = Arrays.asList(0, 1, 2, 3, 4, -1, -2, -3, -4);
        List<Integer> ints4 = Arrays.asList(-1, -2, -3, -4);

        BinaryOperator<Integer> sumOperator = Integer::sum;
        BinaryOperator<Integer> maxOperator = Integer::max;
        BinaryOperator<Integer> nonAssociativeOperator = (first, second) -> (first + second) * (first + second);
        BinaryOperator<Integer> nonStandardOperator = (first, second) -> first;

        // Caveats of using reduction
        int reduction = reduce(ints, 0, sumOperator);

        System.out.println("Reduction : " + reduction);

        // 2 cores simulation (parallelization)
        int reduction1 = reduce(ints1, 0, sumOperator);
        int reduction2 = reduce(ints2, 0, sumOperator);
        int paralleledReduction = reduce(Arrays.asList(reduction1, reduction2), 0, sumOperator);

        System.out.println("Paralleled reduction : " + paralleledReduction);

        // Using non-associative reduction
        System.out.println();
        System.out.println("Non associative ----------------------------------- ");
        int reduction5 = reduce(ints, 0, nonAssociativeOperator);

        System.out.println("Reduction : " + reduction5);

        int reduction3 = reduce(ints1, 0, nonAssociativeOperator);
        int reduction4 = reduce(ints2, 0, nonAssociativeOperator);
        int paralleledReduction1 = reduce(Arrays.asList(reduction3, reduction4), 0, nonAssociativeOperator);

        System.out.println("Paralleled reduction : " + paralleledReduction1);

        System.out.println();
        System.out.println("Non standard ----------------------------------- ");
        int reduction6 = reduce(ints, 0, nonStandardOperator);

        System.out.println("Reduction : " + reduction6);

        int reduction7 = reduce(ints1, 0, nonStandardOperator);
        int reduction8 = reduce(ints2, 0, nonStandardOperator);
        int paralleledReduction2 = reduce(Arrays.asList(reduction7, reduction8), 0, nonStandardOperator);

        System.out.println("Paralleled reduction : " + paralleledReduction2);

        // Using reduction that has no identity
        System.out.println();
        System.out.println("Max with negatives ----------------------------------- ");
        int reduction9 = reduce(ints3, 0, maxOperator);

        System.out.println("Reduction : " + reduction9);

        int reduction10 = reduce(ints1, 0, maxOperator);
        int reduction11 = reduce(ints4, 0, maxOperator);
        int paralleledReduction3 = reduce(Arrays.asList(reduction10, reduction11), ints4.get(0), maxOperator);

        System.out.println("Paralleled reduction : " + paralleledReduction3);
    }

    private static int reduce(
            List<Integer> values,
            int identityElement,
            BinaryOperator<Integer> reduction) {
        int result = identityElement;
        for (int value : values) {
            result = reduction.apply(result, value);
        }
        return result;
    }
}
