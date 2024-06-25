export default function returnHowManyArguments(...numOfParameters) {
    /*I returned it as numOfParameters.length since the reset operator spreds the
    parameters presents in an array.*/
    return numOfParameters.length;
}