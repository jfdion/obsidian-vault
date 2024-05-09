import session from "./session"
import html from "./html"
import configSession from "./configSession"
import templaterExtender from "./templaterExtender"
import seance from "./seance"

console.log("IN")

module.exports = () => ({
    seance,
    session,
    configSession,
    templaterExtender,
    html
})