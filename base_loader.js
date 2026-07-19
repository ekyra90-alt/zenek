/**
 * base_loader.js
 * Központi adatkezelő és URL kezelő logika az alkalmazáshoz.
 */

/**
 * Lekéri a megadott songKey alapján a dalhoz tartozó összes adatot az adat.js-ből.
 * @param {string} songKey - A dal kulcsa a library objektumban.
 * @returns {object|null} - A dal adatai vagy null, ha nem létezik.
 */
function loadSongData(songKey) {
    if (typeof library === 'undefined') {
        console.error("Hiba: Az adat.js (library objektum) nem érhető el.");
        return null;
    }

    if (!library[songKey]) {
        console.error(`Hiba: Nem található adat a következő kulcshoz: '${songKey}'`);
        return null;
    }

    return library[songKey];
}

/**
 * Kiolvassa a 'lep' paramétert az aktuális URL-ből.
 * Példa: index.html?lep=1 -> 1-et ad vissza.
 * @returns {string|null} - A lépés azonosítója vagy null, ha nincs megadva.
 */
function getStepFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('lep');
}

/**
 * Segédfüggvény: Egy adott elem tartalmának frissítése a betöltött adatokkal.
 * Használható a különböző tanulási lépések aloldalain.
 */
function renderContent(elementId, content) {
    const el = document.getElementById(elementId);
    if (el) {
        el.innerHTML = content;
    } else {
        console.warn(`Figyelmeztetés: A(z) '${elementId}' azonosítójú elem nem található.`);
    }
}
