const fetch = require("node-fetch");

const apiUrl = " https://recruitment.hal.skygate.io/companies"

const fetchCompaniesList = async () => {
 const companies = await fetch(apiUrl)
    .then(response => response.json())
    .then(data => (
      data.sort((a, b) => a.id - b.id )
    ))

  return companies;
}

module.exports = fetchCompaniesList;
