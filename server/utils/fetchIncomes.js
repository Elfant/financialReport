const fetch = require("node-fetch");

const apiUrl = "https://recruitment.hal.skygate.io/incomes/";

const fetchIncomes = async (companies) => {
  const promises = await companies.map(company => (
    fetch(`${apiUrl}${company.id}`)
    .then(resp => resp.json())
  ));
   return Promise.all(promises)
}

module.exports = fetchIncomes;
