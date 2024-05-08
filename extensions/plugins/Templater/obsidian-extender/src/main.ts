import session from "./session"
import html from "./html"
import { adiosWorld } from "./seconddep"
import configSession from "./configSession"

console.log("IN")

module.exports = () => ({
    session,
    html,
    configSession,
    adiosWorld
})