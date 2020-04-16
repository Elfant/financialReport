const operationsOnIncomes = ({incomes, id}) => {

  const reduce = (objects) => {
    return (
      objects.reduce(
        (accumulator, next) => accumulator + parseInt(next.value), 0
      )
    );
  };

  const numberOfTheElements = incomes.length;

  const sumOfCompanyIncomes = reduce(incomes); // item[0]260014

  const averageIncomes = sumOfCompanyIncomes / numberOfTheElements; 

  const year =  new Date().getFullYear() - 1;
  const month = new Date().getMonth();


  const filtredIncomes = incomes.filter((item) => {
    const date = new Date(item.date);

    const yearFromItem = date.getFullYear();
    const monthFromItem = date.getMonth();

    return year === yearFromItem && month - monthFromItem === 1;
  })

  const sumOfTheLastMonthIncomes = reduce(filtredIncomes); //sum from last month

  return {
    id,
    sumOfCompanyIncomes,
    averageIncomes,
    sumOfTheLastMonthIncomes
  };
 };
 
module.exports = operationsOnIncomes;

//where year === current year and month < current month -1