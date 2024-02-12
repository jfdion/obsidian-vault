function sessionFromMonth(month) {
    if (month <= 6) { return "Hiver" }
    if (month >= 7) { return "Automne" }
}


function session() {
    return { sessionFromMonth }
}

module.exports = session;