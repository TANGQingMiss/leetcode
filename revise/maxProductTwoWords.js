/**
 * @param {string[]} words
 * @return {number}
 */
//给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母
var maxProduct = function(words) {
        if(words.length == 0) return 0;        
        let len = words.length;
        let arr = new Array(len);
        for(let i=0;i<len;i++){
            let sum=0;
            for(let j=0;j<words[i].length;j++){
                let index=words[i].charCodeAt(j)-97;
                if(((sum>>index)&1)==0) sum=sum+(1<<index);                
            }
            arr[i]=sum;
        }
        let maxlen=0;
        for(let i=0;i<len;i++){
            for(let j=i+1;j<len;j++){
                if((arr[i]&arr[j])==0){
                    let plen=words[i].length*words[j].length;
                    maxlen=Math.max(maxlen,plen);
                }
            }
        }
        return maxlen;
};
