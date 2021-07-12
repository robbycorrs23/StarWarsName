const firstName = document.querySelector(".input-first")
const lastName = document.querySelector(".input-last")
const subBtn = document.querySelector("#sub-first")
const selectTitle = document.querySelector(".titles")
const lastShow = document.querySelector(".lastDisplay")
const firstShow = document.querySelector(".firstDisplay")
const titleShow = document.querySelector(".titleDisplay");

const characters = [
    {id: "A", name:['Ackbar', 'Allie', 'Amidala', 'Amedda', 'Antilles', "Arvel", 'Adi', 'Armitage', 'Agen', 'Antonio', 'Aayla', 'Aurra', 'Anakin', 'Allana', 'Ahsoka', 'Allyn', 'Assajj']},
    {id: "B", name:['Breha', 'Baba', 'Bane', 'Bibble', 'Billaba', 'Binks', 'Bly', 'Bossk', 'Biggs', 'Bren', 'Brand', 'Baron', 'Boba', 'Borsk', 'Bib', 'Beru', 'Boss Rugor', 'Bail', 'Ben', 'Boneria', 'Booster', 'Bria', 'Beru']},
    {id: "C", name:['Cad', 'CB-99', 'Calrissian', 'Chewbacca', 'Chief', 'Chirpa', 'Colton', 'Cody', 'Cordé', 'Crynyd', 'Crumb', 'C-', 'Chirrut', 'Coppinger', 'Cliegg', 'Crix', 'Conan', 'Cal', 'Carlist', 'Cade', 'Cassio']},
    {id: "D", name:['Depa', 'Dala', 'Darklighter', 'Dengar', 'Derlin', 'Di', 'Desann', 'Disra', 'Djo', 'Dodonna', 'Dooku', 'Dorme', 'Dunhausen', 'Dunwell', 'Durge', 'Durron', 'Desolous', 'Dr. Cornelius', 'Davin', 'Dexter', 'Derek', 'Droopy', 'Dai', 'D2', 'D4', 'Dak', 'Dash', 'Dyas']},
    {id: "E", name:['Ebe', 'Endocott', 'Empatojayos', 'Emtrey', 'EV', 'Evazan', 'Exar', 'Even']},
    {id: "F", name:['Farlander', 'Fel', 'Feith', 'Fett', 'Fey’lya', 'Fisto', 'Fode', 'Fortuna', 'Fox', 'Fil', 'Firmus', 'Finis']},
    {id: "G", name:['Gallia', 'Garagen', 'Gonk', 'Gev', 'Golda', 'Greeata', 'Greedo', 'Grievous', 'Gunray', 'Gree', 'Gavar', 'Galen', 'Gilad', 'Gavyn', 'Grodin', 'Gregar']},
    {id: "H", name:['Haako', 'Hardeen', 'Hevy', 'Hill', 'Huyang', 'Hux', 'Hutt', 'Hobbit', 'Han']},
    {id: "I", name:['Ima-Gun', 'IG-88', 'Imwe']},
    {id: "J", name:['Jar Jar', 'Jeremoch', 'Jagged', 'Jango', 'Joelle', 'Jabba', 'John', 'Jamillia', 'Jettster', 'Jinn', 'Jet', 'Jodo', 'Jobal', 'Jax', 'Jek', 'Jacen', 'Jaina', 'Joh']},
    {id: "K", name:['Kyp', 'Keyan', 'Kit', 'Ka', 'Kael', 'Kal', 'Kir', 'Kanos', 'Karda', 'Kast', 'Kyle', 'Katarr', 'Kenobi', 'Khal', 'Klaatu', 'Ken', 'Klivian', 'Kolar', 'Koon', 'Kota', 'Kun', 'Kasan', 'Khol']},
    {id: "L", name:['Lando', 'Lah', 'Lars', 'Lobot', 'Logray', 'Lowbacca', 'Lumiya', 'Lyn', 'Lorth', 'Leia', 'Luke', 'Lama', 'Luminara']},
    {id: "M", name:['Mas', 'Moff', 'Mirta', 'Madine', 'Marek', 'Maul', 'McCool', 'MD-5', 'Me', 'Medon', 'Mohc', 'Moor', 'Moore', 'Mothma', 'Mon', 'Motti', 'Moff', 'Muzzer', 'Momaw', 'Max', 'Mara Jade', 'Maarek', 'Mirax', 'Mod', 'Maximillian', 'Mace']},
    {id: "N", name:['Natasi', '9D9', 'Nautag', 'Nute', 'Naberrie', 'Nadon', 'Nass', 'Needa', 'Nien', 'Nunb', 'Nomi', 'Nahdar']},
    {id: "O", name:['Organa', 'Obi-Wan', 'Owen', 'Olié', 'Omas', 'Omega', 'Oola', 'Opress', 'Ozzel', 'Ooryl', 'Oppo', 'One']},
    {id: "P", name:['Padmé', 'Ponda', 'Plo', 'Palpatine', 'Panaka', 'Paploo', 'Pavan', 'Pellaeon', 'Piell', 'Piett', 'Plagueis', 'Poggie', 'Poof', 'Porkins', 'P17']},
    {id: "Q", name:['Qui-Gon', 'Qel-Droma', 'Quee', 'Quadrinaros', 'Qrygg', 'Qui-Gon', 'Qu', 'Quinlan']},
    {id: "R", name:['Raymus', 'Roan', 'Rune', 'Rako', 'Rahm', 'Rom', 'Ruhe', 'Ryoo', 'Ric', 'R2', 'R2', 'R4', 'R5', 'Rahn', 'Ralter', 'Rancisis', 'Rebo', 'Rendar', 'Ree', 'Rex', 'Rieekan', 'Rogue', 'Rookie', 'Rotta', 'Rukh', 'Roos', 'Raynar', 'Raa']},
    {id: "S", name:['Sio', 'Salacious', 'Soontir', 'San', 'Skirata', 'Sly', 'Sola', 'Savage', 'Sabé', 'Saché', 'Sage', 'Sarn', 'Sebulba', 'Secura', 'Seerdon', 'Senesca', 'Shedao', 'Shai', 'Shimrra', 'Sidious', 'Sifo', 'Sing', 'Sintas', 'Skywalker', 'Skywalker', 'Shmi', 'Sy', 'Snootles', 'Solo', 'Solo', 'Stele', 'Su', 'Sunrider', 'Sykes', 'Shaak', 'Saesee', 'Shado']},
    {id: "T", name:['3PO', 'Teneniel', 'Tenel', 'Talon', 'Tsavong', 'Tion', 'Tono', 'Thracken', 'Tagge', 'Tambor', 'Tarkin', 'Tarpals', 'TC-14', 'Teorik', 'Tessek', 'Tharon', 'Thistleborn', 'Thul', 'Thrawn', 'Ti', 'Tibor', 'Tlin', 'Tierce', 'Triclops', 'Trioculus', 'Tyranus', 'Typho', 'Tano', 'Thire', 'Tahiri', 'Taun', 'Tyber']},
    {id: "U", name:['Ulic', 'Undull']},
    {id: "V", name:['Vilim', 'Vestara', 'Vel', 'Vader', 'Valorum', 'Vao', 'Vebb', 'Veers', 'Velia', 'Ventress', 'Vergere', 'Vima-Da-Boda', 'Vos', 'Vuffi', 'Vau']},
    {id: "W", name:['Wedge', 'Wat', 'Wilhuff', 'Wickett', 'Warrick', 'Wald', 'Walon', 'Watts', 'We', 'Wisell', 'Whitesun', 'Windu', 'Winter', 'Wolffe', 'Wuher']},
    {id: "X", name:['X1', 'X2', 'Xanatos', 'Xizor']},
    {id: "Y", name:['Yees', 'Yaddle', 'Yané', 'Yoda', 'Yowza']},
    {id: "Z", name:['Zev', 'Zam', 'Zann', 'Zekk', 'Ziro', 'Zorba', 'Zuckuss', 'Zuggs', 'Zannah']}
]


function firstInput() {
    const valueFirst = firstName.value.toUpperCase().charAt(0);
    for (let i=0; i<characters.length; i++) {
        if (characters[i].id === valueFirst) {
            const charName = characters[i].name[Math.floor(Math.random() * characters[i].name.length)]
            firstShow.textContent = charName
        }
    }
}

function lastInput() {
    const valueSecond = lastName.value.toUpperCase().charAt(0);
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].id === valueSecond) {
            const charName = characters[i].name[Math.floor(Math.random() * characters[i].name.length)]
            lastShow.textContent = charName
        }
    }
}

subBtn.addEventListener("click", submitBtn)

function titleInput() {
    const titleDisplay = selectTitle.options[selectTitle.selectedIndex].text;
    titleShow.innerText = titleDisplay;
}

function submitBtn() {
    firstInput();
    lastInput();
    titleInput();
    firstName.value = "";
    lastName.value = "";
}
