/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
    //use greedy algorithm
    //for each B[i] -> has element in A > B, choose the smallest bigger element
    //if not, choose the smallest element
    if(A.length == 1) return A;
    A = A.sort(function(x,y){return x - y;});
    let res = [];
    function removeElement(arr,idx){
        if(idx == arr.length - 1) arr.pop();
        else{
            for(let i = idx; i < arr.length - 1; i++){
                arr[i] = arr[i+1];
            }
            arr.pop();
        }
        return arr;
    }

    for(let i = 0; i < B.length; i++){
        flag = false;//mark whether A[i] > B[i] element exists
        for(let j = 0; j < A.length; j++){
            if(A[j] > B[i]){
                res.push(A[j]);
                removeElement(A,j);
                flag = true;
                break;
            }
        }
        if(flag == false){
            res.push(A[0]);
            removeElement(A,0);
        }
    }
    return res;
};
