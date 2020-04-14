const fetch = require("node-fetch");

const fetchCompanies = require("./fetchCompanies");
const fetchIncomes = require("./fetchIncomes");

const joinDataFromRequests = async () => {
  const companies = await fetchCompanies();
  
  const incomes = await fetchIncomes(companies);
  console.log(incomes)

  
  return {
     companies,
  }

}

module.exports = joinDataFromRequests;
