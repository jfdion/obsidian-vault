function semaineFromTitle(tp) {
    return parseInt(tp.file.title.split(" ").slice(-1)[0], 10)
}

function semaineCourante(tp) {
    return semaineFromTitle(tp)
}

function semainePrecedente(tp) {
    return semaineFromTitle(tp) - 1
}

function seanceTemplate() {
    return { semaineCourante, semainePrecedente }
}

module.exports = seanceTemplate