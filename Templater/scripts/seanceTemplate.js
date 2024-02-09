function semainePrecedente(tp) {
    console.log(tp.file.semaine)
    return parseInt(tp.file.semaine, 10)
}


function seanceTemplate() {
    return { semainePrecedente }
}

module.exports = seanceTemplate