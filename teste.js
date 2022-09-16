//comecei a passar pra js mas tava com sono
class TrieNode{
    constructor(){
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie{
    constructor(){
        this.root = TrieNode();
    }
    insert( word){
        var cur = self.root;
    }
    for(let c=1; c<=word.length; c++{
        if (!cur.children){
            cur.children[c] = TrieNode();
        }
        cur = cur.children[c]
    }
    cur.endOfWord = true
    search()
}
/*
class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        cur = self.root

        for c in word:
            if c not in cur.children:
                cur.children[c] = TrieNode() 
            cur = cur.children[c]
        cur.endOfWord = True

    def search(self, word: str) -> bool:
        cur = self.root

        for c in word:
            if c not in cur.children:
                return False
            cur = cur.children[c]
        return cur.endOfWord

    def startsWith(self, prefix: str) -> bool:
        cur = self.root

        for c in prefix:
            if c not in cur.childre:
                return False
            cur = cur.children[c]
        return True

trie = Trie()
*/
