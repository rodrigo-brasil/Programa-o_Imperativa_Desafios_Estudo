const fs = require('fs');
/* Micro Desafio 3
Em um arquivo, cole o código abaixo. Em seguida, exporte a função promessa e importe-a em um arquivo diferente. Por fim, precisamos ler o arquivo file.json após os segundos especificados na função. */

function promessa() {
    return new Promise(function (resolve, reject) {
        console.log("lendo arquivo...");
        fs.readFile("file.json", (err, data) => {
            if (err) {
                reject(err)
            } else {
                setTimeout(resolve, 3000,JSON.parse(data));
            }
        });
    })
}

module.exports = promessa
