const fetch = require("node-fetch");

const fetchCompaniesList = require("./fetchCompaniesList");
const fetchIncomes = require("./fetchIncomes");
const operationsOnIncomes = require("./operationsOnIncomes")

const getCompanies = async () => {
  const companies = await fetchCompaniesList();
  
  const incomes = await fetchIncomes(companies);

  let scoresOfOperation = [];

  incomes.forEach((item, i) => {
    scoresOfOperation[i] = operationsOnIncomes(incomes[i])
  });

  let joinedData = [];

  companies.forEach((item,i) => {
    joinedData[i] = {...item, ...scoresOfOperation[i]}
  });
  
  return joinedData;
};

module.exports = getCompanies;
