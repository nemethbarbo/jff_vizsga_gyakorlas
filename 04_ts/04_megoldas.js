function PhErtek(vizsgaltErtek) {
    var valasz = "";
    if (vizsgaltErtek == 7) {
        valasz = "semleges";
    }
    else if (vizsgaltErtek < 7) {
        valasz = "savas";
    }
    else {
        valasz = "lugos";
    }
    return valasz;
}
function PrimekSzama(vizsgaltTomb) {
    var primekSzama = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var osztokSzama = 0;
        for (var j = 1; j <= vizsgaltTomb[i]; j++) {
            if (vizsgaltTomb[i] % j == 0) {
                osztokSzama++;
            }
        }
        if (osztokSzama == 2) {
            primekSzama++;
        }
    }
    return primekSzama;
}
function MaganHangzokSzama(vizsgaltSzoveg) {
    var maganhangzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"];
    var maganhangzoDb = 0;
    vizsgaltSzoveg = vizsgaltSzoveg.toLowerCase();
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        for (var j = 0; j < maganhangzok.length; j++) {
            if (vizsgaltSzoveg[i] == maganhangzok[j]) {
                maganhangzoDb++;
            }
        }
    }
    return maganhangzoDb;
}
