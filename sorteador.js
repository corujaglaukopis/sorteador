// criar uma lista de nomes
// criar uma saudação com base no horário
// definir um método para remover um nome da lista
// definir um método para adicionar um nome na lista
// definir um método para alterar um nome da lista
// definir um método para verificar repetições na lista
// definir um método que sorteie um número n dos nomes em um numero n de grupos a ser definido pelo usuário

        // variáveis e alocamento de memória
const alunos  = [
    "Samir",
    "Everton",
    "João Vitor",
    "Gabriel G",
    "Gabriel H",
    "Enei",
    "Daniella",
    "Bart",
    "Aryelson",
    "Alan",
    "Wagner",
    "Silvio",
    "Rudson",
    "Alvaro",
    "Pablo",
    "Mariano",
    "Lucas",
    "Lázaro",
    "Priscila",
    "Kalinka",
    "Ivirson",
    "Gabriel F",
    "Edjalma",
    "Pietra",
    "Wesley",
    "Bill",
    "Danilo",
    "Lucas Rocha",
    ""
]
const data = new Date();
const horas = data.getHours();
// const minutos = data.getMinutes(); // avaliar a necessidade de usar os minutos no teste da hora
let saudação = "";
var prompt = require('prompt-sync')();
        

        // métodos e funções
function exibirLista(itens){
    console.log(`Esses são os itens da lista:
    `);
    for (let i = 0, j = 0; i < itens.length; i++,j++) {
        console.log([j+1] + " " + itens[i]);        
    }    
    menu();
}


function adicionaItem(itens){
    let item = prompt("Digite o que quer adicionar ao sorteio:").toString();
    itens.push(item);
    console.log(`O item ${item} foi adicionado à lista`);
    menu();
}


function removeItem(itens){
    let item = prompt("Qual item quer remover?").toString();
    let i = 0, j = 1;
    while (i < itens.length){
        if (item!=itens[i]){
            i++;
            j++;
            if (j==itens.length){   
                console.log(`O item informado não está na lista de sorteio
                `);
                break;
                }
        } else if (item==itens[i]){
            itens = itens.splice([i],1);
            console.log(`O item ${item} foi encontrado na posição ${[i+1]} e removido da lista de sorteio`);
            break;
        }
    }
    menu();
}


function atualizarItem(itens){
    let item = prompt("Digite a palavra/item que deseja atualizar:").toString();
    let i = 0;
    while (i < itens.length) {
        if (item==itens[i]){
            let itemNovo = prompt("Digite a palavra/item nova:").toString();
            itens[i] = itemNovo;
            console.log(`O item ${item} foi encontrado na posição ${[i+1]} e foi atualizado para ${itemNovo}`);
            break;
        } else if (item!=itens[i]){
            i++;
        } else {
            console.log(`O item informado não está na lista de sorteio
            `);
        }
    }
    menu();
}


function sortear(itens){
    let quantidade = parseInt(prompt("Quantos itens quer sortear?"));
    const sorteados = [];
    let i = 0;
    while (i<quantidade){
        let j = Math.floor(Math.random() * itens.length);    
        sorteados.push(itens[j]); 
        itens.splice([j],1);
        i++;  
    }    
    console.log(sorteados);
    menu();
}


function menu(){
if (horas>=6 && horas<=12){
    saudação = "Bom dia"
} else if (horas>12 && horas<=18){
    saudação = "Boa tarde"
} else {
    saudação = "Boa noite"
};

console.log(`${saudação} e bem-vindo(a) ao sorteador. Digite o número para função desejada e aperte enter:

1 - Exibir itens à sortear
2 - Adicionar um novo item à lista
3 - Remover um item listado
4 - Atualizar o nome de um item da lista
5 - Sortear os itens 
6 - Sair do sorteador
`);
var resposta = prompt();

switch (resposta) {
    case "1":
        exibirLista(alunos);
        break;
    case "2":
        adicionaItem(alunos);
        break;
    case "3":
        removeItem(alunos);
        break;
    case "4":
        atualizarItem(alunos);
        break;
    case "5":
        sortear(alunos);
        break;
    case "6":
        process.exit();
    default:
        console.log("Por favor, insira uma opção válida.");
        menu();
        break;
}};

menu();