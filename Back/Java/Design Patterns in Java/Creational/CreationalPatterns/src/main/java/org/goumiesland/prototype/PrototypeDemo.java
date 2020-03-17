package org.goumiesland.prototype;

public class PrototypeDemo {
    public static void main(String[] args) throws CloneNotSupportedException {
        Movie movie = new Movie();
        movie.setTitle("My Movie");
        movie.setPrice(29.99);
        movie.setRuntime("3 hours");


        Object movieClone = movie.clone();
        Movie movieGenericClone = movie.genericClone();

        System.out.println("Movie@" + movie.hashCode() + " " + movie.toString());
        System.out.println("Movie@" + movieClone.hashCode() + " " + movieClone.toString());
        System.out.println("Movie@" + movieClone.hashCode() + " " + movieGenericClone.toString());
    }
}
