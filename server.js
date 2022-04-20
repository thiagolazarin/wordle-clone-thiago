const cors = require('cors')
const express = require('express');
const app = express();
const path = require('path')

const port = process.env.PORT || 3001

app.use(cors())

let wordsInPT = ["teste", "cinco", "arara", "sagaz", "nobre", "algoz", "casal", "torpe", "muito", "fútil", "etnia", "corja", "porra", "crivo", "brado", "gleba", "pauta"];
let wordInEN = ["womem", "fiver", "seven", "about", "sugar", "adult", "DANCE",
"DEATH","DEPTH","DOUBT","DRAFT","DRAMA","DREAM","DRESS","DRINK","DRIVE","EARTH","ENEMY","ENTRY","ERROR","EVENT","FAITH","FAULT","FIELD","FIGHT","FINAL","FLOOR","FOCUS","FORCE","FRAME","FRANK","FRONT","FRUIT","GLASS","GRANT","GRASS","GREEN","GROUP","GUIDE","HEART","HORSE","HOTEL","HOUSE","IMAGE","INDEX","INPUT","ISSUE","JAPAN","JONES","JUDGE","KNIFE"];
let results = {winners: 0, level: {first: 0, second: 0, third: 0, fourth: 0, fifth: 0, sixth: 0}};

app.use(express.static(path.join(__dirname, 'public')))

app.get('/word/:language', (req, res) => {
    let randomWord = Math.floor(Math.random() * (6 - 1) + 1)
    let language = req.params.language;

    if(language === 'pt'){
        return res.json(wordsInPT[randomWord])
    }
    else if(language === 'en'){
        return res.json(wordInEN[randomWord])
    }

});

app.put('/result/:level', (req, res) => {
    let level = req.params.level;

    results.winners += 1;
    results.level[level] += 1;

    return res.json("Results updated");
});

app.get('/result', (req, res) => {
    return res.json(results);
});

app.listen(port, () => {
    console.log("Servidor rodando na porta 3001")
});