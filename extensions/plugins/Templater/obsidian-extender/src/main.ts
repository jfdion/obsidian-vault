import * as FirstDep from "./firstdep"
import * as SecondDep from "./seconddep"

console.log("IN")

module.exports = () => ({
    FirstDep,
    SecondDep
})