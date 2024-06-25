export default function appendToEachArrayValue(array, appendString) {
    //The first code is correct but we should get rid of the for...in and us for...of
    const valuesArray = [];
    for (var idx of array) {
      valuesArray.push(appendString + idx);
    }
  
    return valuesArray;
}