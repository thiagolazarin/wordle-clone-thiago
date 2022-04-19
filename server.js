const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors())

let wordsInPT = ["teste", "cinco", "arara", "sagaz", "nobre", "algoz"];
let wordInEN = ["womem", "fiver", "seven", "pedro", "sugar", "pudim"];
let results = {winners: 0, level: {first: 0, second: 0, third: 0, fourth: 0, fifth: 0, sixth: 0}};

// app.use(express.static('public'))

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

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001")
});