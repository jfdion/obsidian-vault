function semaineFromTitle(tp) {
    return parseInt(tp.file.title.split(" ").slice(-1)[0], 10)
}

function semaineFromIndex(index) {
    return `Semaine ${index}`
}

function semaineCourante(tp) {
    return semaineFromTitle(tp)
}

function semainePrecedente(tp) {
    return semaineFromTitle(tp) - 1
}

function seanceTemplate() {
    return { semaineCourante, semainePrecedente, semaineFromIndex }
}

module.exports = seanceTemplate