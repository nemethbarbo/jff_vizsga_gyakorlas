function PhErtek (vizsgaltErtek:number):string {
    let valasz: string = "";
    if (vizsgaltErtek == 7) {
        valasz = "semleges";
    } else if (vizsgaltErtek < 7) {
        valasz = "savas";
    } else {
        valasz = "lugos";
    }
    return valasz;
}

function PrimekSzama (vizsgaltTomb:number[]): number {
    let primekSzama = 0;
    for (let i:number = 0; i < vizsgaltTomb.length; i++) {
        let osztokSzama: number = 0;
        for (let j:number = 1; j <= vizsgaltTomb[i]; j++) {
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

function MaganHangzokSzama (vizsgaltSzoveg: string): number {
    let maganhangzok: string[] = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"];
    let maganhangzoDb: number = 0;
    vizsgaltSzoveg = vizsgaltSzoveg.toLowerCase();
    for (let i:number = 0; i < vizsgaltSzoveg.length; i++) {
           for (let j:number = 0; j < maganhangzok.length; j++) {
                if (vizsgaltSzoveg[i] == maganhangzok[j]) {
                    maganhangzoDb++;
                }
            }
        }
    return maganhangzoDb;
}