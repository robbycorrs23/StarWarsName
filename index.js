const firstName = document.querySelector("#inputFirst")
const lastName = document.getElementById("inputLast")
const firstBtn = document.querySelector("#subFirst")
const lastBtn = document.querySelector("#subLast")
const selectTitle = document.getElementById("titles");

const nameA = ['Ackbar', 'Allie', 'Amidala', 'Amedda', 'Antilles', "Arvel", 'Adi', 'Armitage', 'Agen', 'Antonio', 'Aayla', 'Aurra', 'Anakin', 'Allana', 'Ahsoka', 'Allyn', 'Assajj']

const nameB = ['Breha', 'Baba', 'Bane', 'Bibble', 'Billaba', 'Binks', 'Bly', 'Bossk', 'Biggs', 'Bren', 'Brand', 'Baron', 'Boba', 'Borsk', 'Bib', 'Beru', 'Boss Rugor', 'Bail', 'Ben', 'Boneria', 'Booster', 'Bria', 'Beru']

const nameC = ['Cad', 'CB-99', 'Calrissian', 'Chewbacca', 'Chief', 'Chirpa', 'Colton', 'Cody', 'Cordé', 'Crynyd', 'Crumb', 'C-', 'Chirrut', 'Coppinger', 'Cliegg', 'Crix', 'Conan', 'Cal', 'Carlist', 'Cade', 'Cassio']

const nameD = ['Depa', 'Dala', 'Darklighter', 'Dengar', 'Derlin', 'Di', 'Desann', 'Disra', 'Djo', 'Dodonna', 'Dooku', 'Dorme', 'Dunhausen', 'Dunwell', 'Durge', 'Durron', 'Desolous', 'Dr. Cornelius', 'Davin', 'Dexter', 'Derek', 'Droopy', 'Dai', 'D2', 'D4', 'Dak', 'Dash', 'Dyas']

const nameE = ['Ebe', 'Endocott', 'Empatojayos', 'Emtrey', 'EV', 'Evazan', 'Exar', 'Even']

const nameF = ['Farlander', 'Fel', 'Feith', 'Fett', 'Fey’lya', 'Fisto', 'Fode', 'Fortuna', 'Fox', 'Fil', 'Firmus', 'Finis']

const nameG = ['Gallia', 'Garagen', 'Gonk', 'Gev', 'Golda', 'Greeata', 'Greedo', 'Grievous', 'Gunray', 'Gree', 'Gavar', 'Galen', 'Gilad', 'Gavyn', 'Grodin', 'Gregar']

const nameH = ['Haako', 'Hardeen', 'Hevy', 'Hill', 'Huyang', 'Hux', 'Hutt', 'Hobbit', 'Han']

const nameI = ['Ima-Gun', 'IG-88', 'Imwe']

const nameJ = ['Jar Jar', 'Jeremoch', 'Jagged', 'Jango', 'Joelle', 'Jabba', 'John', 'Jamillia', 'Jettster', 'Jinn', 'Jet', 'Jodo', 'Jobal', 'Jax', 'Jek', 'Jacen', 'Jaina', 'Joh']

const nameK = ['Kyp', 'Keyan', 'Kit', 'Ka', 'Kael', 'Kal', 'Kir', 'Kanos', 'Karda', 'Kast', 'Kyle', 'Katarr', 'Kenobi',  'Khal', 'Klaatu', 'Ken', 'Klivian', 'Kolar', 'Koon', 'Kota', 'Kun', 'Kasan', 'Khol']

const nameL = ['Lando', 'Lah', 'Lars', 'Lobot', 'Logray', 'Lowbacca', 'Lumiya', 'Lyn', 'Lorth', 'Leia', 'Luke', 'Lama', 'Luminara']

const nameM = ['Mas', 'Moff', 'Mirta', 'Madine', 'Marek', 'Maul', 'McCool', 'MD-5', 'Me', 'Medon', 'Mohc', 'Moor', 'Moore', 'Mothma', 'Mon', 'Motti', 'Moff', 'Muzzer', 'Momaw', 'Max', 'Mara Jade', 'Maarek', 'Mirax', 'Mod', 'Maximillian', 'Mace']

const nameN = ['Natasi', '9D9', 'Nautag', 'Nute', 'Naberrie', 'Nadon', 'Nass', 'Needa', 'Nien', 'Nunb', 'Nomi', 'Nahdar']

const nameO = ['Organa', 'Obi-Wan', 'Owen', 'Olié', 'Omas', 'Omega', 'Oola', 'Opress', 'Ozzel', 'Ooryl', 'Oppo', 'One']

const nameP = ['Padmé', 'Ponda', 'Plo', 'Palpatine', 'Panaka', 'Paploo', 'Pavan', 'Pellaeon', 'Piell', 'Piett', 'Plagueis', 'Poggie', 'Poof', 'Porkins', 'P17']

const nameQ = ['Qui-Gon', 'Qel-Droma', 'Quee', 'Quadrinaros', 'Qrygg', 'Qui-Gon', 'Qu', 'Quinlan']

const nameR = ['Raymus', 'Roan', 'Rune', 'Rako', 'Rahm', 'Rom', 'Ruhe', 'Ryoo', 'Ric', 'R2', 'R2', 'R4', 'R5', 'Rahn', 'Ralter', 'Rancisis', 'Rebo', 'Rendar', 'Ree', 'Rex', 'Rieekan', 'Rogue', 'Rookie', 'Rotta', 'Rukh', 'Roos', 'Raynar', 'Raa']

const nameS = ['Sio', 'Salacious', 'Soontir', 'San', 'Skirata', 'Sly', 'Sola', 'Savage', 'Sabé', 'Saché', 'Sage', 'Sarn', 'Sebulba', 'Secura', 'Seerdon', 'Senesca', 'Shedao', 'Shai', 'Shimrra', 'Sidious', 'Sifo', 'Sing', 'Sintas', 'Skywalker', 'Skywalker', 'Shmi', 'Sy', 'Snootles', 'Solo', 'Solo', 'Stele', 'Su', 'Sunrider', 'Sykes', 'Shaak', 'Saesee', 'Shado']

const nameT = ['3PO', 'Teneniel', 'Tenel', 'Talon', 'Tsavong', 'Tion', 'Tono', 'Thracken', 'Tagge', 'Tambor', 'Tarkin', 'Tarpals', 'TC-14', 'Teorik', 'Tessek', 'Tharon', 'Thistleborn', 'Thul', 'Thrawn', 'Ti', 'Tibor', 'Tlin', 'Tierce', 'Triclops', 'Trioculus', 'Tyranus', 'Typho', 'Tano', 'Thire', 'Tahiri', 'Taun', 'Tyber']

const nameU = ['Ulic', 'Undull']

const nameV = ['Vilim', 'Vestara', 'Vel', 'Vader', 'Valorum', 'Vao', 'Vebb', 'Veers', 'Velia', 'Ventress', 'Vergere', 'Vima-Da-Boda', 'Vos', 'Vuffi', 'Vau']

const nameW = ['Wedge', 'Wat', 'Wilhuff', 'Wickett', 'Warrick', 'Wald', 'Walon', 'Watts', 'We', 'Wisell', 'Whitesun', 'Windu', 'Winter', 'Wolffe', 'Wuher']

const nameX = ['X1', 'X2', 'Xanatos', 'Xizor']

const nameY = ['Yees', 'Yaddle', 'Yané', 'Yoda', 'Yowza']

const nameZ = ['Zev', 'Zam', 'Zann', 'Zekk', 'Ziro', 'Zorba', 'Zuckuss', 'Zuggs', 'Zannah']

let randomA = Math.floor(Math.random()*nameA.length)
let randomB = Math.floor(Math.random()*nameB.length)
let randomC = Math.floor(Math.random()*nameC.length)
let randomD = Math.floor(Math.random()*nameD.length)
let randomE = Math.floor(Math.random()*nameE.length)
let randomF = Math.floor(Math.random()*nameF.length)
let randomG = Math.floor(Math.random()*nameG.length)
let randomH = Math.floor(Math.random()*nameH.length)
let randomI = Math.floor(Math.random()*nameI.length)
let randomJ = Math.floor(Math.random()*nameJ.length)
let randomK = Math.floor(Math.random()*nameK.length)
let randomL = Math.floor(Math.random()*nameL.length)
let randomM = Math.floor(Math.random()*nameM.length)
let randomN = Math.floor(Math.random()*nameN.length)
let randomO = Math.floor(Math.random()*nameO.length)
let randomP = Math.floor(Math.random()*nameP.length)
let randomQ = Math.floor(Math.random()*nameQ.length)
let randomR = Math.floor(Math.random()*nameR.length)
let randomS = Math.floor(Math.random()*nameS.length)
let randomT = Math.floor(Math.random()*nameT.length)
let randomU = Math.floor(Math.random()*nameU.length)
let randomV = Math.floor(Math.random()*nameV.length)
let randomW = Math.floor(Math.random()*nameW.length)
let randomX = Math.floor(Math.random()*nameX.length)
let randomY = Math.floor(Math.random()*nameY.length)
let randomZ = Math.floor(Math.random()*nameZ.length)

function grabInput () {
    let firstShow = document.getElementById("firstDisplay");
    let valueFirst = firstName.value.toUpperCase();
    if (valueFirst.startsWith("A")) {
        firstShow.innerText = nameA[randomA];
        firstName.value = "";
    } else if (valueFirst.startsWith("B")) {
        firstShow.innerText = nameB[randomB];
        firstName.value = "";
    } else if (valueFirst.startsWith("C")) {
        firstShow.innerText = nameC[randomC];
        firstName.value = "";
    } else if (valueFirst.startsWith("D")) {
        firstShow.innerText = nameD[randomD];
        firstName.value = "";
    } else if (valueFirst.startsWith("E")) {
        firstShow.innerText = nameE[randomE];
        firstName.value = "";
    } else if (valueFirst.startsWith("F")) {
        firstShow.innerText = nameF[randomF];
        firstName.value = "";
    } else if (valueFirst.startsWith("G")) {
        firstShow.innerText = nameG[randomG];
        firstName.value = "";
    } else if (valueFirst.startsWith("H")) {
        firstShow.innerText = nameH[randomH];
        firstName.value = "";
    } else if (valueFirst.startsWith("I")) {
        firstShow.innerText = nameI[randomI];
        firstName.value = "";
    } else if (valueFirst.startsWith("J")) {
        firstShow.innerText = nameJ[randomJ];
        firstName.value = "";
    } else if (valueFirst.startsWith("K")) {
        firstShow.innerText = nameK[randomK];
        firstName.value = "";
    } else if (valueFirst.startsWith("L")) {
        firstShow.innerText = nameL[randomL];
        firstName.value = "";
    } else if (valueFirst.startsWith("M")) {
        firstShow.innerText = nameM[randomM];
        firstName.value = "";
    } else if (valueFirst.startsWith("N")) {
        firstShow.innerText = nameN[randomN];
        firstName.value = "";
    } else if (valueFirst.startsWith("O")) {
        firstShow.innerText = nameO[randomO];
        firstName.value = "";
    } else if (valueFirst.startsWith("P")) {
        firstShow.innerText = nameP[randomP];
        firstName.value = "";
    } else if (valueFirst.startsWith("Q")) {
        firstShow.innerText = nameQ[randomQ];
        firstName.value = "";
    } else if (valueFirst.startsWith("R")) {
        firstShow.innerText = nameR[randomR];
        firstName.value = "";
    } else if (valueFirst.startsWith("S")) {
        firstShow.innerText = nameS[randomS];
        firstName.value = "";
    } else if (valueFirst.startsWith("T")) {
        firstShow.innerText = nameT[randomT];
        firstName.value = "";
    } else if (valueFirst.startsWith("U")) {
        firstShow.innerText = nameU[randomU];
        firstName.value = "";
    } else if (valueFirst.startsWith("V")) {
        firstShow.innerText = nameV[randomV];
        firstName.value = "";
    } else if (valueFirst.startsWith("W")) {
        firstShow.innerText = nameW[randomW];
        firstName.value = "";
    } else if (valueFirst.startsWith("X")) {
        firstShow.innerText = nameX[randomX];
        firstName.value = "";
    } else if (valueFirst.startsWith("Y")) {
        firstShow.innerText = nameY[randomY];
        firstName.value = "";
    } else if (valueFirst.startsWith("Z")) {
        firstShow.innerText = nameZ[randomZ];
        firstName.value = "";
    }
}
firstBtn.addEventListener("click", grabInput)

function lastInput () {
    let lastShow = document.querySelector("#lastDisplay");
    let valueLast = lastName.value.toUpperCase();
    if (valueLast.startsWith("A")) {
        lastShow.innerText = nameA[randomA];
        lastName.value = "";
    } else if (valueLast.startsWith("B")) {
        lastShow.innerText = nameB[randomB];
        lastName.value = "";
    } else if (valueLast.startsWith("C")) {
        lastShow.innerText = nameC[randomC];
        lastName.value = "";
    } else if (valueLast.startsWith("D")) {
        lastShow.innerText = nameD[randomD];
        lastName.value = "";
    } else if (valueLast.startsWith("E")) {
        lastShow.innerText = nameE[randomE];
        lastName.value = "";
    } else if (valueLast.startsWith("F")) {
        lastShow.innerText = nameF[randomF];
        lastName.value = "";
    } else if (valueLast.startsWith("G")) {
        lastShow.innerText = nameG[randomG];
        lastName.value = "";
    } else if (valueLast.startsWith("H")) {
        lastShow.innerText = nameH[randomH];
        lastName.value = "";
    } else if (valueLast.startsWith("I")) {
        lastShow.innerText = nameI[randomI];
        lastName.value = "";
    } else if (valueLast.startsWith("J")) {
        lastShow.innerText = nameJ[randomJ];
        lastName.value = "";
    } else if (valueLast.startsWith("K")) {
        lastShow.innerText = nameK[randomK];
        lastName.value = "";
    } else if (valueLast.startsWith("L")) {
        lastShow.innerText = nameL[randomL];
        lastName.value = "";
    } else if (valueLast.startsWith("M")) {
        lastShow.innerText = nameM[randomM];
        lastName.value = "";
    } else if (valueLast.startsWith("N")) {
        lastShow.innerText = nameN[randomN];
        lastName.value = "";
    } else if (valueLast.startsWith("O")) {
        lastShow.innerText = nameO[randomO];
        lastName.value = "";
    } else if (valueLast.startsWith("P")) {
        lastShow.innerText = nameP[randomP];
        lastName.value = "";
    } else if (valueLast.startsWith("Q")) {
        lastShow.innerText = nameQ[randomQ];
        lastName.value = "";
    } else if (valueLast.startsWith("R")) {
        lastShow.innerText = nameR[randomR];
        lastName.value = "";
    } else if (valueLast.startsWith("S")) {
        lastShow.innerText = nameS[randomS];
        lastName.value = "";
    } else if (valueLast.startsWith("T")) {
        lastShow.innerText = nameT[randomT];
        lastName.value = "";
    } else if (valueLast.startsWith("U")) {
        lastShow.innerText = nameU[randomU];
        lastName.value = "";
    } else if (valueLast.startsWith("V")) {
        lastShow.innerText = nameV[randomV];
        lastName.value = "";
    } else if (valueLast.startsWith("W")) {
        lastShow.innerText = nameW[randomW];
        lastName.value = "";
    } else if (valueLast.startsWith("X")) {
        lastShow.innerText = nameX[randomX];
        lastName.value = "";
    } else if (valueLast.startsWith("Y")) {
        lastShow.innerText = nameY[randomY];
        lastName.value = "";
    } else if (valueLast.startsWith("Z")) {
        lastShow.innerText = nameZ[randomZ];
        lastName.value = "";
    }
}
lastBtn.addEventListener("click", lastInput)

function titleInput () {
    let titleShow = document.querySelector("#titleDisplay");
    const titleDisplay = selectTitle.options[selectTitle.selectedIndex].text;
    titleShow.innerText = titleDisplay;
}
selectTitle.addEventListener("change", titleInput)
