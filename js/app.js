/*
const minhaPromise = new Promise((resolve, reject) => {
    // operação assíncrona
    let sucesso = false;

    if (sucesso) {
        resolve('Operação bem-sucedida!');
    } else {
        reject('Ocorreu um erro.');
    }
});

minhaPromise
    .then(resultado => {
        console.log(resultado); // 'Operação bem-sucedida!'
    })
    .catch(erro => {
        console.error(erro); // 'Ocorreu um erro.'
    })
    .finally(() => {
        console.log('Operação concluída.');
    });

// const esperar = (tempoDeEspera) =>
//     new Promise(resolve => setTimeout(resolve, tempoDeEspera)
// );
*/

/*
const esperar = (tempoDeEspera) => new Promise((resolve, reject) => {

    if (!isNaN(tempoDeEspera)) {
        // setTimeout(resolve('Passaram-se 2 segundos.'), tempoDeEspera);
        resolve(setTimeout(() => {
            // console.log('Passaram-se 2 segundos.');
            const obj = {
                sucesso: true,
                mensagem: 'Passaram-se 2 segundos.'
            };
        }, tempoDeEspera));
    } else {
        reject('Parâmetro incorreto');
    }
});

esperar(2000)
    // .then((resultado) => resultado);

    .then(resultado => {
        console.log(resultado);
    })
    // .catch(erro => {
    //     console.error(erro); // Parâmetro incorreto
    // })
*/

/*
const esperar = (tempoDeEspera) => new Promise((resolve, reject) => {
    if (isNaN(tempoDeEspera)) {
        reject('Parâmetro incorreto');
    } else {
        setTimeout(() => {
            resolve('Passaram-se 2 segundos');
        }, tempoDeEspera);
    }
});

esperar(2000).then(() => {
    // console.log("Passaram-se 2 segundos");
}).catch(erro => {
    console.error('Deu ruim:', erro);
});

// Teste com um parâmetro incorreto
esperar('m').then(resultado => {
    console.log(resultado);
}).catch(erro => {
    console.error('Deu ruim:', erro);
});
*/

const esperar = ms => new Promise(resolve => setTimeout(resolve, ms));

// esperar(4000).then(() => console.log('Passaram-se 4 segundos.'));

// esperar(1000)
//     .then(() => {
//         console.log('Passou 1 segundo.');
//         return esperar(2000);
//     })
//     .then(() => {
//         console.log('Passaram-se mais 2 segundos.');
//     });

/*
Promise.all([esperar(1000), esperar(2000), esperar(3000)])
    .then(() => {
        console.log('Todas as Promises foram concluídas.');
    });

Promise.race([esperar(1000), esperar(2000), esperar(3000)])
    .then(() => {
        console.log('A primeira Promise foi concluída.');
    });
*/

// fetch('https://jsonplaceholder.typicode.com/posts')
fetch('https://marneicardoso.com/api/')
    .then(response => {
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }
        // Converte a resposta para JSON
        return response.json();
    })
    .then(data => {
        // Manipula os dados recebidos
        // console.log(data);

        data.forEach(elemento => {
            const div = document.createElement('div');
            div.innerHTML = `Produto: ${elemento.nome_produto} | R$ ${elemento.valor_produto}
                \nDescrição: ${elemento.descricao_produto}`;

            document.querySelector('body').appendChild(div);

            const foto = document.createElement('img');
            foto.setAttribute('src', elemento.foto_produto);
            // foto.setAttribute('class', 'foto');
            foto.classList.add('foto');

            setTimeout(() => {
                foto.classList.toggle('foto2');
            }, 5000);
            foto.setAttribute('alt', elemento.nome_produto);

            // foto.alt = elemento.nome_produto;

            div.appendChild(foto);
        });

        // Campos existentes
        // id_produto
        // nome_produto
        // descricao_produto
        // valor_produto
        // foto_produto
    })
    .catch(error => {
        // Lida com erros na requisição
        console.error('Erro ao buscar dados: ', error);
    });
