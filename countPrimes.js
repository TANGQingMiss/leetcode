/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // if(n <= 2) return 0;
    // if(n == 3) return 1;
    // let res = [2];
    // let flag;
    // for(let i = 3; i < n; i++){
    //     for(let j = 0; j < res.length; j++){
    //         if(i % res[j] == 0){
    //             flag = 0;
    //             break;
    //         }else{
    //             flag = 1;
    //             continue;
    //         }
    //     }
    //     if(flag == 1) res.push(i);
    // }
    //return res.length;

    if(n < 2) return 0;
    let count = 0;
    
    //based on Eratosthenes algorithm
    for(let d = 2; d < n; d++){

        if (d <= 3) { count++; continue; }
        if (d % 2 == 0 || d % 3 == 0) { continue; }
        let nonPrime = 0;
        for (let i = 5; i * i <= d; i += 6) {
            if (d % i == 0 || d % (i + 2) == 0) { nonPrime = 1; break; }
        }
        if(!nonPrime) count++;
    }

    return count;
};
