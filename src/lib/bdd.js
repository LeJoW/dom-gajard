const bdd = require("./table.json");

export function getTableHeader() {
    return Object.keys(bdd[0]);
}

export function getStdContent() {
    return bdd.filter(function ({ Categorie }) {
        return Categorie === "Groupe 2";
    });
}

export function getStdContentBy(key, direction) {
    const sorted = getStdContent().sort(function (a, b) {
        if (a[key] > b[key]) {
            return 1;
        }
        if (a[key] < b[key]) {
            return -1;
        }
        return 0;
    });
    return direction === 1 ? sorted : sorted.reverse();
}

export function getNotStdContent() {
    return bdd.filter(function ({ Categorie }) {
        return Categorie === "Groupe 1";
    });
}
