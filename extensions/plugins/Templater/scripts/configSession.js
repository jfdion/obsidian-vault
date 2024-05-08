const PO2 = "PO2"
const CS = "CS"
const IT = "IT"
const BD1 = "BD1"
const SW = "SW"

const courses = {
    "A24": [PO2, CS, IT],
    "H24": [BD1, SW]
}

function indexFromCourse(courseName) {
    return courses.indexOf(courseName) + 1
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

module.exports = session