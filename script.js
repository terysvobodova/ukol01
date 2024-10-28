const jmeno = removeDiacritics(prompt("Prosím zadejte své křestní Jméno bez diakritiky: ")).trim()
const prijmeni = removeDiacritics(prompt("Zadej své Příjmení také bez diakritiky: ")).trim()

function removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const jmenoSlice = jmeno.slice(0, 3).toLowerCase()
const prijmeniSlice = prijmeni.slice(0, 5).toLowerCase()
const email = `${prijmeniSlice}${jmenoSlice}@fit.cvut.cz`

console.log(`Vaše e-mailová adresa je: ${email}`)
document.body.innerHTML += "<p> Váš email je: " + email + "</p>"