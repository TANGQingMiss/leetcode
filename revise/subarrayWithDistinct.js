/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
//给定一个正整数数组 A，如果 A 的某个子数组中不同整数的个数恰好为 K，则称 A 的这个连续、不一定独立的子数组为好子数组。
var subarraysWithKDistinct = function(A, K) {
    let hash = new Array(A.length+1).fill(0);
    let left = 0;
    let right = 0;
    let size = 0;    //记录窗口中的种类数
    let res = 0;
    while(left+K<A.length && right<A.length) {			
        hash[A[right]]++;
        if(hash[A[right++]]==1)
            size++;
        
        if(size==K) {	//1.当窗口中有k种数字时，将left往右移动，最后恢复左指针和hash原来的状态
            let leftcopy = left;
            while(size==K) {		 //left指针往右移动
                res++;
                hash[A[left]]--;
                if(hash[A[left++]]==0)
                    size--;
            }				
            left--;
            while(left>=leftcopy) {	 //恢复状态，关键
                hash[A[left]]++;
                if(hash[A[left--]]==1)
                    size++;
            }
            left++;
        }else if(size>K) {	//2.遇到新的数字，首先往右移动左指针，直到size==k
            while(size>K) {
                hash[A[left]]--;
                if(hash[A[left++]]==0)
                    size--;
            }
            if(size==K) {		//然后与1中的情况相同
                let leftcopy = left;
                while(size==K) {
                    res++;
                    hash[A[left]]--;
                    if(hash[A[left++]]==0)
                        size--;
                }
                left--;
                while(left>=leftcopy) {
                    hash[A[left]]++;
                    if(hash[A[left--]]==1)
                        size++;
                }
                left++;
            }
        }
    }
    return res;
};
