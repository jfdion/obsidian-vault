function sessionFromMonth(month) {
    if (month <= 6) { return "Hiver" }
    if (month >= 7) { return "Automne" }
}

module.exports = sessionFromMonth;