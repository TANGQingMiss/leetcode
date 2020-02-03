/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length - 1;
    while(left < right){
        let mid = Math.floor((right + left) / 2);
        if(letters[mid] > target){
            right = mid;
        }else{
            left = mid + 1;
        }
    }
    if(left == letters.length - 1 && letters[letters.length - 1] <= target){
        return letters[0];
    }
    else return letters[left];
};
