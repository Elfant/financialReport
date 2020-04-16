const fetch = require("node-fetch");

const apiUrl = " https://recruitment.hal.skygate.io/companies"

const fetchCompaniesList = async () => {
 const companies = await fetch(apiUrl)
    .then(response => response.json())
  return companies;
}

module.exports = fetchCompaniesList;
