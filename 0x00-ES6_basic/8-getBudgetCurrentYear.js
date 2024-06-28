function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
}
//rhe function above simply gets the year and date details
  
export default function getBudgetForCurrentYear(income, gdp, capita) {
    //get rid of the budget name below since it has the name of this current object
    const budget = {
        [`income-${getCurrentYear()}`] : income,
        [`gdp-${getCurrentYear()}`] : gdp,
        [`capita-${getCurrentYear()}`] : capita,
    };
  
    return budget;
}
