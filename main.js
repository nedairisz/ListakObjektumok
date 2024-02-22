/* lista - azonos típusú változók tárolására */
//tönbnek előre megahtározott mérete van, litánál nem kell

let lista=["első", "második"]
console.log(lista[0])
lista[0]="átírt első"
console.log(lista)
lista[10]="tizenegyedik"
console.log(lista)
console.log(lista[5])

//listához elem hozzáADÁS - ez az utolsó hely után teszi az elemet CSAK
lista.push("következő elem")
console.log(lista)

// utolsó elem eltávolítása
lista.pop()
console.log(lista)

const szam=5
// szam=12 :konstans értéke nem változtatható meg

const lista2=[12,13,14,15]
console.log(lista2)
// lista2=[23,24,25,26] :konstans változónak új érték, de  nem jó így
//const lista elemei csak egyesével változtathatók meg
// csak a lista címe fix a moriában - ezt nem lehet megváltoztatani
lista2[0]=2222
console.log(lista2)
lista2.push(3333)
console.log(lista2)

// oBJEKTUMOK
/* étlapos feladat: 
ételnév lista ->szöveges
ételár lista ->szám típusú    // ezt egy egységként tudnám kezelni
*/
// Az objektum olyan összetett adatszerkezet, amely kulcs-érték párokból áll
//Egységként tudunk vele kezelni összetartozó adathalmazaokat,
//többnyire constként deklarálukm ,ert neki is mem ter címe lesz fix

const etel1={
    nev:"Tojás",
    ar:150
}

console.log(etel1.nev)  //eges értékeinek elérése
console.log(etel1.ar)
etel1.mennyiseg=3 // új kulcsot adok az objektumhoz
console.log(etel1)
// összefoglal egymással összefüggő, különbözö típusú adatokat

const etel2={
    nev:"Kenyer",
    ar:350,
    meret: 500,
    mennyiseg: 2
}

// egy objektum tulajdonképpen olyan mint az adatbázisnak egy rekordja
// Kulcsok az adatbázis egy mezője
const kutya1={
    nev:"Rigó",
    fajta:"kopó",
    szin: "fekete",
    magassag: 40,
    szul_dat: 2020,
    szul_hely: "Budapest"
}
const kutya2={
    nev:"Veréb",
    fajta:"vizsla",
    szin: "barna",
    magassag: 50,
    szul_dat: 2019,
    szul_hely: "Budapest"
}

const kutyaLista=[
    {
        nev:"Rigó",
        fajta:"kopó",
        szin: "fekete",
        magassag: 40,
        szul_dat: 2020,
        szul_hely: "Budapest"
    },{
        nev:"Veréb",
        fajta:"vizsla",
        szin: "barna",
        magassag: 50,
        szul_dat: 2019,
        szul_hely: "Budapest"
    }
]
// hogy érem el Rigó színét?
console.log(kutyaLista[0].szin)