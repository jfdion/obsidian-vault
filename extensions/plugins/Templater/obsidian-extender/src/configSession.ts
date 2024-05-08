/*const PO2 = {short: "PO2", number: "420-W30-SF", long: "Programmation orientée objet II"}
const CS = {short: "CS", number: "420-W53-SF", long: "Cybersécurité"}
const IT = {short: "IT", number: "420-W54-SF", long: "Innovation et veille technologique"}
const BD1 = {short: "BD1", number: "420-W22-SF", long: "Bases de données I"}
const SW = {short: "SW", number: "420-W41-SF", long: "Services Web"}


const courses = {
    "A24": [PO2, CS, IT],
    "H24": [BD1, SW]
}

function indexFromCourse(courseName) {
    return courses.indexOf(courseName) + 1
}

function coursesConstants () {
    return Object.keys(courses).map(c => courses[c]).reduce((courses, sublist) => {
        for (e in sublist) {
            
        }
    }, {})
}

function session(Session) {
    return {
        constant: {
            PO2,
            CS,
            IT
        },
        indexFromCourse
    }
}

module.exports = session*/