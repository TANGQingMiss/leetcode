/**
 * @param {string} num
 * @return {boolean}
 */
// 累加数是一个字符串，组成它的数字可以形成累加序列。
// 一个有效的累加序列必须至少包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。
// 给定一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是累加数
var isAdditiveNumber = function(num) {
    if(num.length<3){
        return false;
    }
    let ans = false;
    const backtrack = function(first,second,rest){
        if(first!=="" && second!==""){
            //不能为0的两位数，但是可以单个0
            if((first.length>1&&first[0]==="0")||(second.length>1&&second[0]==="0")){ return;}
            let sum = Number(first)+Number(second);
            if(rest.indexOf(sum)==0){
                //符合条件，往后推
                //注意类型转换，数字没有length属性
                rest = rest.substring(String(sum).length)
                if(!rest.length){
                    //当数组全部取完，那么即是累加数
                    ans = true;
                }
                backtrack(second,sum,rest);
            }
            return;
        }
        for(let i=1;i<Math.floor(rest.length/2)+1;i++){
            first = rest.substring(0,i);
            let temp = rest.substring(i);
            for(let j=1;j<Math.floor(temp.length/2)+1;j++){
                second = temp.substring(0,j);
                let temp2 = temp.substring(j);
                backtrack(first,second,temp2);
            }
        }
    }
    backtrack("","",num)
    return ans;
    
};
