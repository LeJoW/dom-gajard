const bdd = require("./table.json");

export function getCount() {
    return bdd.length;
}

export function getStdContent() {
    return bdd.filter(function ({ Categorie }) {
        return Categorie === "Groupe 2";
    });
}

export function getStdContentBy(key, direction) {
    const sorted = getStdContent().sort(function (a, b) {
        const entryA = prepareStr(a[key]);
        const entryB = prepareStr(b[key]);
        console.log(entryA);
        if (entryA > entryB) {
            return 1;
        }
        if (entryA < entryB) {
            return -1;
        }
        return 0;
    });
    return direction === 1 ? sorted : sorted.reverse();
}

function prepareStr(value) {
    return value.replace(/æ/gi, "ae").toLowerCase();
}

export function getNotStdContent() {
    return bdd.filter(function ({ Categorie }) {
        return Categorie === "Groupe 1";
    });
}
