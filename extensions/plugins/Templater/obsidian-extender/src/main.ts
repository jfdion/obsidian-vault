import { helloWorld } from "./first-dep";
import { adiosWorld } from "./second-dep";

module.exports = {
    worldExt: helloWorld,
    goodbyeExt: adiosWorld
}