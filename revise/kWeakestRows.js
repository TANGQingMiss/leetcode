/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let order = [];
    let index = [];
    for(let i = 0; i < mat.length; i++){
        let tmp = 0;
        for(let j = 0; j < mat[0].length; j++){
            if(mat[i][j] == 1) tmp++;
            else break;
        }
        order.push(tmp);
        index.push(i);
    }

    //bubble sort and change index array
	let sorted;
	let n = order.length;
	for(let i = 0; i < n; i++){
		for(let j = 0; j < n - i - 1; j++){
			if(order[j] > order[j+1]){
				let tmp = order[j];
				order[j] = order[j+1];
				order[j+1] = tmp;
                //change index0
                let tmp2 = index[j];
                index[j] = index[j + 1];
                index[j + 1] = tmp2;
			}
		}
	}

    let res = [];
    for(let i = 0; i < k; i++){
        res.push(index[i]);
    }

    return res;

};
