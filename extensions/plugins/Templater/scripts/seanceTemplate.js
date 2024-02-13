const tx = require("./templaterExtender")

function nomCours(tp) {
    console.log(tx.getParentFolder(tp))
}

function seanceTemplate() {
    return {
        nomCours
    }
}

module.exports = seanceTemplate