/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
//给定一个整数数组 A，以及一个整数 target 作为目标值，返回满足 i < j < k 且 A[i] + A[j] + A[k] == target 的元组 i, j, k 的数量。
var threeSumMulti = function(A, target) {
    A.sort((a,b)=>a-b);
    //记录每一个数的出现次数
    let hash = {};
    for(let i=0;i<A.length;i++){
        hash[A[i]]?(hash[A[i]]++):(hash[A[i]]=1);
    }
    //去重
    let B = Array.from(new Set(A));
    //根据题意需要mod这个数
    let mod = (10**9)+7
    
    //三指针求组合，存入path，需要注意一点，这里跟我举例有所区别，因为这里是可以取重复数的。i,j,k是可以重合的
    let path = [];
    for(let i=0;i<B.length;i++){
        let k=B.length-1;
        for(let j=i;j<=k;){
            if(B[i]+B[j]+B[k]==target){
                path.push([B[i],B[j],B[k]]);
            }
            if(B[i]+B[j]+B[k]>target&&j<=k){
                k--;
                j--;
            }
            j++;
        }
    }

    //使用数学方法计数
    let ans = 0;
    for(let i=0;i<path.length;i++){
        if(path[i][0]==path[i][1]&&path[i][1]!=path[i][2]){
            //A A B 如果是第一个数和第二个数相等
            let count = hash[path[i][1]];
            if(count<2){
                //如果总次数都没有2次，那么这个 A A B的组合显然是不成立的。
                continue;
            }
            ans += (count*(count-1))/2*hash[path[i][2]];
            
        }else if(path[i][0]!=path[i][1]&&path[i][1]==path[i][2]){
            //A B B 如果是第二个数和第三个数相等，
            let count = hash[path[i][1]];
            if(count<2){
                continue;
            }
            ans += (count*(count-1))/2*hash[path[i][0]];
        }
        else if(path[i][0]==path[i][1]&&path[i][1]==path[i][2]){
            //A A A 三个数相等，因为数组是有序的，所以不存在第一个数和第三个数相等但是中间不相等的情况
            let count = hash[path[i][0]];
            if(count<3){
                continue;
            }
            ans += (count*(count-1)*(count-2))/6;
        }else{
            // A B C 
            ans+=(hash[path[i][0]]*hash[path[i][1]]*hash[path[i][2]]);
        }
    }
    return ans%mod;
};
