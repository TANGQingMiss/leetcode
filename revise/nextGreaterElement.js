/**
 * @param {number} n
 * @return {number}
 */
//给定一个32位正整数 n，你需要找到最小的32位整数，其与 n 中存在的位数完全相同，并且其值大于n。如果不存在这样的32位整数，则返回-1
var nextGreaterElement = function(n) {
    //判断是否是逆序排序，是否有大于当前值的最小值。
    function check(source, sort){
        for(let i = 0; i < source.length; i++){
            if(source[i] != sort[i]){
                return true;
            }
        }
        return false;
    }
    function buildString(str){
        let strArray = str.split(''),
            firstChar = strArray.shift(),
            sortArray = [...strArray].sort((a, b)=> a > b ? -1 : 1),
            res = '';
        /*
            除去高位（第一个字符）后的从大到小排序比较，
            如果一样，证明后续位数是除去高位后剩下位数所能构成的最大值，
            因此要选取升序中高位的下一个数来替换高位，
            替换高位后所得值已经比给出值大，所以只需将后面的位数最小化即可；
        */
        if(!check(strArray, sortArray)){
            for(let i = 0; i <= sortArray.length; i++){
                if(sortArray[i] <= firstChar || i == sortArray.length){
                    res += sortArray[i - 1];
                    sortArray.splice(i - 1, 1, firstChar);
                    break;
                }
            }
            sortArray.sort((a, b)=> a > b ? 1 : -1);
            return res + sortArray.join('');
        }
        //无需改变高位，只关心后续位数
        return firstChar + buildString(strArray.join(''));;
    }

    let nToString = n.toString().split(''),
        sortSet = [...nToString].sort((a, b)=> a > b ? -1 : 1);
    //判断是否有解，解是否是32位整数
    if(check(nToString, sortSet)){
        let num = buildString(nToString.join('')) - 0;
        return num > Math.pow(2, 31) - 1 ? -1 : num;
    }
    //无解
    return -1;
};
