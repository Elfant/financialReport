const fetch = require("node-fetch");

const fetchCompaniesList = require("./fetchCompaniesList");
const fetchIncomes = require("./fetchIncomes");
const operationsOnIncomes = require("./operationsOnIncomes")

const getCompanies = async () => {
  const companies = await fetchCompaniesList();
  
  const incomes = await fetchIncomes(companies);

  operationsOnIncomes(incomes[0])
  // console.log(incomes)

  
  return {
     companies,
  }

}

module.exports = getCompanies;
