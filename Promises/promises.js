const fs = require('fs');
const promessa = require('./exportPromise')

// Micro Desafio 1
/* Dado o seguinte código de leitura de arquivos com FileSystem, necessitamos modificá-lo para a sintaxe de Promises, de modo que possamos ver os arquivos corretamente através do console. */

// forma convencional
/*     fs.readFile('file.json', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(JSON.parse(data));
        }
    }); */

// forma promises
/* const promisesFile =  new Promise((resolve, reject) => {
        fs.readFile("file.json", (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(data))
            }
        });
    }
    )
const promisesFile2 =  new Promise((resolve, reject) => {
        fs.readFile("file2.json", (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(data))
            }
        });
    }
    )
const promisesFile3 =  new Promise((resolve, reject) => {
        fs.readFile("file333.json", (err, data) => {
            if (err) {
                reject("Erro NO 3°")
            } else {
                resolve(JSON.parse(data))
            }
        });
    }
    ) */

// promisesReadFile("file.json").then(x => console.log(x)).catch(err => console.log("Arquivo não existe!"))

/* Micro Desafio 2
Agora temos um código com callbacks aninhados e precisamos executá-los todos ao mesmo tempo — com as funções de callbacks não poderíamos fazer isso —. Precisamos usar o método Promise.all() para poder transcrever nossos callbacks aninhados em Promises e obter por console os 3 arquivos lidos e impressos por eles */
// convencional

/* function leitorDeArquivosMultiplos(){
    return fs.readFile('file.json', (err, data1) => {
                fs.readFile('file2.json', (err, data2) => {
                    fs.readFile('file3.json', (err, data3) => {
                        console.log(JSON.parse(data1));
                        console.log(JSON.parse(data2));
                        console.log(JSON.parse(data3));
                    });
                });
            });
} */

//  Promise.all([promisesFile,promisesFile2,promisesFile3]).then(resolve => console.log(resolve)).catch(x=> console.log(x));

/*  promessa().then(x=> console.log(x)) */
