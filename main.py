class TrieNode:
    def __init__(self):
        self.filhos = {}
        self.fimDaPalavra = False

    # def showWord(self, palavra: str) -> str:
    #     palavraFormada = []
    #     for c in palavra:
    #         palavraFormada.append(c)
    #     return palavraFormada
    

class Trie:
    def __init__(self):
        self.raiz = TrieNode() #acessar os atributos da raiz, instancia um TrieNode



    def inserir(self, palavra: str) -> None:
        atual = self.raiz

        for c in palavra: #para c dentro da string informada
            if c not in atual.filhos: #se c nao tiver substring da raiz
                atual.filhos[c] = TrieNode() #instancia um novo TrieNode para subarvore da raiz
            atual = atual.filhos[c] #caso faça parte da palavra o nó atual adiciona c em seus subnós 
        atual.fimDaPalavra = True #caso chegue na folha digo que a palavra acabou
        print("entrou no inserir")
    

    '''
    Inserir o valor de um nó na árvore

    @param  string $palavra valor de um nó 
    '''

    def busca(self, palavra: str) -> bool:
        atual = self.raiz

        for c in palavra: #para c dentro da string informada
            if c not in atual.filhos: #se c nao for filho da raiz
                print(palavra, end=' -> ')
                return "word_not_found" #nao encontrou a palavra 
            atual = atual.filhos[c] #caso pertença a subarvore, percorre ela
            print(c, end=' -> ',)
        return atual.fimDaPalavra

    '''
    Procura o valor de um nó na árvore

    @param  string $prefix Valor do nó 
    '''

    def startsWith(self, prefix: str) -> bool:
        atual = self.raiz

        for c in prefix:
            if c not in atual.filhos:
                return False
            atual = atual.filhos[c]
        return True

    '''
    Checa se o nó raíz começa com o valor $prefixo

    @param  string $prefix Node value 
    '''
    def showWord(self, palavra: str) -> str:
        palavraFormada = []
        atual = self.raiz
        for c in palavra:
            if c not in atual.filhos:
                palavraFormada.append(c)
                return "word_not_found"
        return palavraFormada
    



trie = Trie()

print(trie.inserir('abacate'))
print(trie.inserir('almofada'))
print(trie.inserir('teste'))
print(trie.inserir('teste'))
print(trie.busca('abacate'))
print(trie.busca('almofada'))
print(trie.busca('reginaldo'))
print(trie.startsWith('t'))
print(trie.startsWith('j'))
# print(trie.showWord('almofada'))
# print(trie.startsWith('a'))
