/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    if(bills == null || bills.length == 0) return true;
    //use map to store money information
    let map = new Map([['5',0],['10',0],['20',0]]);
    for(let i = 0; i < bills.length; i++){
        if(bills[i] == 5) map.set('5',map.get('5')+1);
        if(bills[i] == 10){
            if(map.get('5') == 0) return false;
            else{
                map.set('5',map.get('5')-1);
                map.set('10',map.get('10')+1);
            }
        }
        if(bills[i] == '20'){
            if(map.get('5') >= 1 && map.get('10') >= 1){
                map.set('5',map.get('5')-1);
                map.set('10',map.get('10')-1);
                map.set('20',map.get('20')+1);
            }else if(map.get('5') >= 3){
                map.set('5',map.get('5')-3);
                map.set('20',map.get('20')+1);
            }else return false;
        }
    }
    return true;
};
