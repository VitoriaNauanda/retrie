

const TAMANHO_ALFABETO = 26;

// Iniciando a Classe TrieNode
class TrieNode
{
    //construtor padrão com array do tamanho do alfabeto e
    //fim da palavra por padrão falso
	constructor()
	{
		this.filhos=new Array(TAMANHO_ALFABETO);
		this.fimDaPalavra=false;
	}
}

// Se não tiver presente, insere a chave na trie If not present, inserts key into trie
	// Se a chave é um prefixo da trie, apenas marca o nó folha If the key is prefix of trie node, just
	// marks leaf node
function inserir(raiz,key)
{
	let caminhar = raiz;

		for (let i = 0; i < key.length; i++) {
			let index = key[i].charCodeAt(0) - 'a'.charCodeAt(0);
			if (caminhar.filhos[index] == null)
				caminhar.filhos[index] = new TrieNode();

			caminhar = caminhar.filhos[index];
		}

		//marca o ultimo no como folha = fim da palavra 
		caminhar.fimDaPalavra = true;
}

//busca retorna true caso a chave esteja presente na trie Returns true if key presents in trie, else
	// false
function buscar(raiz,key)
{
	let caminhar = raiz;

		for (let i = 0; i < key.length; i++) {
			let index = key[i].charCodeAt(0) - 'a'.charCodeAt(0);
			if (caminhar.filhos[index] == null)
				return `Palavra ${key} não encontrada!`//false;

			caminhar = caminhar.filhos[index];
		}

		return `Palavra ${key} encontrada`;//(caminhar != null && caminhar.fimDaPalavra);
}

// Returns true if raiz has no filhos, else false
function isVazio(raiz)
{
	for (let i = 0; i < TAMANHO_ALFABETO; i++)
			if (raiz.filhos[i] != null)
				return false;
		return true;
}

// Recursive function to delete a key from given Trie
function remover(raiz,key,depth)
{
	// Se a arvore estiver vaiaIf tree is empty
    cont = 0
		if (raiz == null)
			return null;

		// Se o ultimo caractere da chave estiver sendo processado If last character of key is being processed
		if (depth == key.length) {

			// Não será mais fim da palavra após a remoção da chave informadaThis node is no more end of word after
			// removal of given key
			if (raiz.fimDaPalavra)
				raiz.fimDaPalavra = false;

			// Se a chave informada não for prefixo de alguma outra palavra If given is not prefix of any other word
			if (isVazio(raiz)) {
				raiz = null;
			}

			return raiz;
		}

		//Se nao for o ultimo caractere percorre o filho, percorre pelo filho obtido usando o valor ASCII,  If not last character, recur for the child
		// obtained using ASCII value
		let index = key[depth].charCodeAt(0) - 'a'.charCodeAt(0);
		raiz.filhos[index] =
			remover(raiz.filhos[index], key, depth + 1);

        //Caso a raiz nao tenha nenhum filho (seu unico filho foi
        //deletado), e não é o fim de outra palavra.
		// If raiz does not have any child (its only child got
		// deleted), and it is not end of another word.
		if (isVazio(raiz) && raiz.fimDaPalavra == false){
			raiz = null;
		}
        //removendo recursivamente cada key node
        console.log(`${key[cont]} removida`)
        cont++
		return raiz; //`${key} removida`;//
}

// Driver
// Input utilizando o range do alfabeto (de a - z)Input chaves (use only 'a' through 'z'
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