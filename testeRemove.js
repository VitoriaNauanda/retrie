

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
	static contador = 0;
	static arrayValue = {
		key: [],
		value: []
	};
	static copiaArrayValue = {
		key: [],
		value: []
	}

    //construtor padrão com array do tamanho do alfabeto e fim da palavra por padrão falso
	constructor()
	{
		this.filhos=new Array(TAMANHO_ALFABETO);
		this.fimDaPalavra=false;
	}
	destructor()
	{
		delete this.filhos;
	}
}

// Se não tiver presente, insere a chave na trie 
// Se a chave é um prefixo da trie, apenas marca o nó folha 

/**
 * Esta é uma função que insere a chave informada na árvore trie.
 *  
 * @param {TrieNode} raiz obrigatório instância da classe TrieNode
 * @param {string} chave obrigatório chave (palavra) de valor do alfabeto a ser inserida
 */
function inserir(raiz,chave)
{
	let caminhar = raiz;

		//validação usando valores ASCII para as chaves do alfabeto
		for (let i = 0; i < chave.length; i++) {
			let index = chave[i].charCodeAt(0) - 'a'.charCodeAt(0);
			//se a raiz nao tiver filhos, adicionar a chave informada no indice dos filhos
			if (caminhar.filhos[index] == null)
				caminhar.filhos[index] = new TrieNode();

			caminhar = caminhar.filhos[index];
		}

	//marca o ultimo no folha como fim da palavra 
	caminhar.fimDaPalavra = true;
	//adicionando key value as palavras formadas 
	TrieNode.arrayValue.value.push(TrieNode.contador);
	TrieNode.arrayValue.key.push(chave);

	//copia
	TrieNode.copiaArrayValue.value.push(TrieNode.contador);
	TrieNode.copiaArrayValue.key.push(chave);
	// console.log(TrieNode.contador)
	TrieNode.contador ++;
}

/**
 * Esta é uma função que busca a chave informada na árvore trie.
 *  
 * @param {TrieNode} raiz obrigatório instância da classe TrieNode
 * @param {string} chave obrigatório chave (palavra) de valor do alfabeto a ser buscado
 */
function buscar(raiz,chave)
{
	//busca retorna true caso a chave esteja presente na trie 
	let caminhar = raiz;
		
		// Se nao for o ultimo caractere, recorre pelos filhos obtidos usando os valores ASCII
		for (let i = 0; i < chave.length; i++) {
			let index = chave[i].charCodeAt(0) - 'a'.charCodeAt(0);
			if (caminhar.filhos[index] == null)
				return `Palavra ${chave} não encontrada!`//false;

			caminhar = caminhar.filhos[index];
		}

		return `Palavra ${chave} encontrada`;//(caminhar != null && caminhar.fimDaPalavra);
}

/**
 * Esta é uma função que retorna true se a raíz não tiver filhos, senão false.
 *  
 * @param {TrieNode} raiz obrigatório instância da classe TrieNode.
 */
function isVazio(raiz)
{
	// Retorna true se a raiz nao tiver filhos, senao false 
	for (let i = 0; i < TAMANHO_ALFABETO; i++)
			if (raiz.filhos[i] != null)
				return false;
		return true;
}

/**
 * Esta é uma função recursiva responsável por remover a chave informada na árvore trie, 
 * caso exista.
 *  
 * @param {TrieNode} raiz obrigatório instância da classe TrieNode
 * @param {string} chave obrigatório chave (palavra) de valor do alfabeto a ser removido
 * @param {int} profundidade obrigatório valor da profundidade do nó 
 * a ser removido.
 */
function remover(raiz,chave,profundidade)
{	

	cont = 0
	// Se a arvore estiver vazia
	if (raiz == null)
		return null;

	// Se o ultimo caractere da chave estiver sendo processado 
	if (profundidade == chave.length) {

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
	let index = chave[profundidade].charCodeAt(0) - 'a'.charCodeAt(0);
	raiz.filhos[index] = remover(raiz.filhos[index], chave, profundidade + 1);

	//Caso a raiz nao tenha nenhum filho (seu unico filho foi
	//deletado), e não é o fim de outra palavra.
	
	if (isVazio(raiz) && raiz.fimDaPalavra == false){
		raiz = null;
	}
	//removendo recursivamente cada chave node
	// console.log(`caracter ${chave[cont]} removido`)
	// cont++

	if(TrieNode.arrayValue.value.length >= TrieNode.contador){
		console.log('entoru a')
		console.log(`contador ${TrieNode.contador}`)
		let indice = TrieNode.arrayValue.key.indexOf(chave);
		console.log(indice-1)
		TrieNode.arrayValue.key.splice(indice, 1);
		TrieNode.arrayValue.value.splice(indice, 1);

		// TrieNode.copiaArrayValue.key.splice(indice, 1);
		// TrieNode.copiaArrayValue.value.splice(indice, 1);
	}

	return raiz; //`${chave} removida`;//
}


/*
Main
*/ 

// Input utilizando o range do alfabeto (de a - z)
// e em minusculas para funcionar o ASCII )
let chaves = [ "teste", "a", "casa",
				"resposta", "qualquer", "garoto",
				"adeus", "heroi", "aviao" ];
let tamanho = chaves.length; // tamanho das chaves

let raiz = new TrieNode();

// Construindo a trie
for (let i = 0; i < tamanho; i++)
	inserir(raiz, chaves[i]);



inserir(raiz, "reginaldo");

remover(raiz, "resposta", 0);
remover(raiz, "reginaldo", 0);

	
	
// buscar por chaves diferentes
// console.log(buscar(raiz, "heroi"))
// console.log(buscar(raiz, "aviao"))
console.log(buscar(raiz, "garota"))


// let indice = TrieNode.arrayValue.value.indexOf(TrieNode.contador-1);
// TrieNode.arrayValue.value.splice(indice, 1);
// TrieNode.arrayValue.key.splice(indice, 1);

for(let c=0; c<TrieNode.arrayValue.key.length; c++){
	console.log(`Key:${TrieNode.arrayValue.key[c]} Value:${TrieNode.arrayValue.value[c]}\n`)
}
raiz.destructor();//desalocando memória
delete raiz; //desalocando memória