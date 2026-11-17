class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = False

class WordDictionary:

    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        curr = self.root

        for c in word:
            if c not in curr.children:
                curr.children[c] = TrieNode()
            curr = curr.children[c]

        curr.word = True

    def search(self, _word: str) -> bool:
        curr = self.root

        def matches(word, trie):
            if not word:
                return False

            c = word[0]

            if c == ".":
                result = False

                for child in trie.children:
                    next_word = word[1:]

                    if word == ".":
                        return trie.children[child].word

                    result = matches(word[1:], trie.children[child])

                    if result == True:
                        return True

                return False

            if c not in trie.children:
                return False
            else:

                word = word[1:]

                if word == "":
                    return trie.children[c].word

                return matches(word, trie.children[c])

        return matches(_word, self.root)
