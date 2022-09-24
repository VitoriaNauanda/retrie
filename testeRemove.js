

const TAMANHO_ALFABETO = 26;

/**
 * @class TrieNode possui os atributos fimDaPalavra que é a tag utilizada nos nós, informando caso seu conjunto de nós formem uma palavra ou não, é true em palavras identificadas caso seu nó folha seja = true.
 * 
 * @this Array filhos   		Array com o tamanho do alfabeto utilizado nos nós.
 * @this bool fimDaPalavra		Identificador da palavra formada, é atribuído nos nós 
 * 								folhas é verdadeiro caso retorne uma palavra.
 */

class TrieNode
{
    //construtor padrão com array do tamanho do alfabeto e fim da palavra por padrão falso
	constructor()
	{
		this.filhos=new Array(TAMANHO_ALFABETO);
		this.fimDaPalavra=false;
	}
}

// Se não tiver presente, insere a chave na trie 
	// Se a chave é um prefixo da trie, apenas marca o nó folha 

/**
 * 
 * @param {TrieNode} raiz obrigatório instância da classe TrieNode
 * @param {string} chave obrigatório chave (palavra) de valor do alfabeto a ser inserida
 */
function inserir(raiz,chave)
{
	let caminhar = raiz;

		for (let i = 0; i < chave.length; i++) {
			let index = chave[i].charCodeAt(0) - 'a'.charCodeAt(0);
			if (caminhar.filhos[index] == null)
				caminhar.filhos[index] = new TrieNode();

			caminhar = caminhar.filhos[index];
		}

		//marca o ultimo no como folha = fim da palavra 
		caminhar.fimDaPalavra = true;
}

//busca retorna true caso a chave esteja presente na trie 
function buscar(raiz,chave)
{
	let caminhar = raiz;

		for (let i = 0; i < chave.length; i++) {
			let index = chave[i].charCodeAt(0) - 'a'.charCodeAt(0);
			if (caminhar.filhos[index] == null)
				return `Palavra ${chave} não encontrada!`//false;

			caminhar = caminhar.filhos[index];
		}

		return `Palavra ${chave} encontrada`;//(caminhar != null && caminhar.fimDaPalavra);
}

// Retorna true se a raiz nao tiver filhos, senao false 
function isVazio(raiz)
{
	for (let i = 0; i < TAMANHO_ALFABETO; i++)
			if (raiz.filhos[i] != null)
				return false;
		return true;
}

// Funcao recursiva para deletar a chave informada a trie
function remover(raiz,chave,depth)
{
	// Se a arvore estiver vazia
    cont = 0
		if (raiz == null)
			return null;

		// Se o ultimo caractere da chave estiver sendo processado 
		if (depth == chave.length) {

			// Não será mais fim da palavra após a remoção da chave informada
			if (raiz.fimDaPalavra)
				raiz.fimDaPalavra = false;

			// Se a chave informada não for prefixo de alguma outra palavra 
			if (isVazio(raiz)) {
				raiz = null;
			}

			return raiz;
		}

		//Se nao for o ultimo caractere percorre o filho, percorre pelo filho obtido usando o valor ASCII
		let index = chave[depth].charCodeAt(0) - 'a'.charCodeAt(0);
		raiz.filhos[index] =
			remover(raiz.filhos[index], chave, depth + 1);

        //Caso a raiz nao tenha nenhum filho (seu unico filho foi
        //deletado), e não é o fim de outra palavra.
		
		if (isVazio(raiz) && raiz.fimDaPalavra == false){
			raiz = null;
		}
        //removendo recursivamente cada chave node
        console.log(`${chave[cont]} removida`)
        cont++
		return raiz; //`${chave} removida`;//
}

// Input utilizando o range do alfabeto (de a - z)
// e em minusculas para funcionar o ASCII and lower case)
let chaves = [ "the", "a", "there",
				"resposta", "any", "by",
				"bye", "their", "heroi", "aviao" ];
let n = chaves.length; // tamanho das chaves

let raiz = new TrieNode();

// Construindo a trie
for (let i = 0; i < n; i++)
	inserir(raiz, chaves[i]);

// buscar por chaves diferentes
// if(buscar(raiz, "the"))
// 	console.log("Yes");
// else
// 	console.log("No");

// if(buscar(raiz, "these"))
// 	console.log("Yes");
// else
// 	console.log("No");

// remover(raiz, "aviao", 0);

// if(buscar(raiz, "heroi"))
// 	console.log("Yes");
// else
// 	console.log("No");

// console.log(remover(raiz, "heroi", 0))
console.log(buscar(raiz, "heroi"))
console.log(buscar(raiz, "aviao"))
console.log(buscar(raiz, "heri"))

delete raiz; //desalocando memória


//caso queiram usar front end web a funcao prompt para entrada de dados do teclado
// let qtdPalavras = prompt("Insira a quantidade de buscas: \n")
// for (let c =0; c<=qtdPalavras; c++){
//     var entrada = prompt("Digite uma palavra: \n")
//     console.log(buscar(raiz, entrada))
// }