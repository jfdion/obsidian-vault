"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AUTOMNE = { long: "Automne", short: "A", pattern: function (year) { return "A".concat(year); } };
var HIVER = { long: "Hiver", short: "H", pattern: function (year) { return "H".concat(year); } };
function sessionFromMonth(month) {
    return (month <= 6) ? HIVER.long : AUTOMNE.long;
}
function sessionExtender() {
    return {
        constants: {
            AUTOMNE: AUTOMNE,
            HIVER: HIVER
        },
        sessionFromMonth: sessionFromMonth
    };
}
exports.default = sessionExtender;
