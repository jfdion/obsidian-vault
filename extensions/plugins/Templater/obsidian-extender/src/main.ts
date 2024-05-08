import session from "./session"
import html from "./html"
import configSession from "./configSession"
import templaterExtender from "./templaterExtender"

console.log("IN")

module.exports = () => ({
    session,
    html,
    configSession,
    templaterExtender
})