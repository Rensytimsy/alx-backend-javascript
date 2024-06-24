export default function concatArrays(array1, array2, string) {
    //Welcome to the wonders of spread operators.
    /**
     * Basically this concept is to enable one see the possibility of using array spread operator to access values
     */

    return [...array1, ...array2, ...string];
}