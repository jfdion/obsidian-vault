const tx = require(app.vault.adapter.basePath + "/" + app.plugins.plugins['templater-obsidian'].settings.user_scripts_folder + "/templaterExtender.js")

function nomCours(tp) {
    console.log(tx)
    console.log(app.plugins.plugins['templater-obsidian'].settings.user_scripts_folder)
    console.log(app.vault.adapter.basePath)
    // console.log(tx.getParentFolder(tp))
}

function seanceTemplate() {
    return {
        nomCours
    }
}

module.exports = seanceTemplate