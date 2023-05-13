const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
const setOfCompanies = new Set(companies)

console.log(setOfCompanies.delete('Google')) // true, since 'Google' is present in the set
console.log(setOfCompanies.size) // 4
console.log(setOfCompanies)
