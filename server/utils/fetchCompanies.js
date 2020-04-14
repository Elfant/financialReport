const fetch = require("node-fetch");

const apiUrl = " https://recruitment.hal.skygate.io/companies"

const fetchCompanies = async () => {
 const companies = await fetch(apiUrl)
    .then(response => response.json())
    // .then(data => console.log(data[0].id))
    .then(data => (
      data.sort((a, b) => a.id - b.id )
    ))

  return companies;
}

module.exports = fetchCompanies;
