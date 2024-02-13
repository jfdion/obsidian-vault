const APP_BASE_PATH = app.vault.adapter.basePath
const TEMPLATER_CONFIG = app.plugins.plugins['templater-obsidian'].settings
const SCRIPT_FOLDER = `${APP_BASE_PATH}/${TEMPLATER_CONFIG.user_scripts_folder}`

const tx = require(`${SCRIPT_FOLDER}/templaterExtender.js`)()

function nomCours(tp) {
    console.log(tx.getParentFolder(tp))
}

function seanceTemplate() {
    return {
        nomCours
    }
}

module.exports = seanceTemplate