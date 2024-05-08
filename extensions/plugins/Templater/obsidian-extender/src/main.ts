import { helloWorld } from "./firstdep"
import { adiosWorld } from "./seconddep"

console.log("IN")

module.exports = () => ({
    helloWorld,
    adiosWorld
})