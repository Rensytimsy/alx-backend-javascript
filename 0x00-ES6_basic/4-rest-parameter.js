export default function returnHowManyArguments(...getMoreParameters) {
    /*Thsi code should return the number of parameters present in an argument
    Basically rest parameter keyword enables one to have access to different parameters passed.
    in my case am using getmoreparameters to store the values of the parameters present
    */
   return getMoreParameters.length;
}