const tx = require(__dirname + "./templaterExtender.js")

function nomCours(tp) {
    console.log(tx)
    console.log(app.plugins.plugins['templater-obsidian'])
    console.log(app.vault.adapter.basePath)
    // console.log(tx.getParentFolder(tp))
}

function seanceTemplate() {
    return {
        nomCours
    }
}

module.exports = seanceTemplate