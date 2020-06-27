//search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。 . 可以表示任何一个字母
var WordDictionary = function() {
     // 哈希对象，键为单词长度，值为同长度的单词集合
    //  牛逼的思想，但是在空间复杂度上比前缀树高一些
      this.words = {}
    };
    
    WordDictionary.prototype.addWord = function(word) {
      
      if (this.words[word.length]) {
        this.words[word.length].push(word)
      } else {
        
        this.words[word.length] = [word]
      }
    };
    
 
    WordDictionary.prototype.search = function(word) {
     
      if (!this.words[word.length]) {
        return false
      }


      // 缓存目标字符串的长度
      const len = word.length
      
    // 普通字符串，则直接从等长单词集合中查找即可
      if (!word.includes('.')) {
        return this.words[len].includes(word)
    
      }
    
      // 否则是正则表达式，要先创建正则表达式对象
      const reg = new RegExp(word)
    
      // 对等长单词集合进行遍历，只要存在正则匹配即可
      return this.words[len].some((item) => {
        return reg.test(item)
      })
    };
