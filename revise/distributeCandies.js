/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    //step 1: set res and initialize it to 0
    let res = new Array(num_people);
    for(let i = 0; i < res.length; i++){
        res[i] = 0;
    }

    //step 2: set cycle
    let count = 0;
    let i = 0;
    while(candies > 0){
        if(count * num_people + i % num_people + 1 <= candies){
            res[i % num_people] += count * num_people + i % num_people + 1;
            candies -= count * num_people + i % num_people + 1;
            i++;
            count = Math.floor(i / num_people);
        }else{
            res[i % num_people] += candies;
            break;
        }
    }
    return res;
};
