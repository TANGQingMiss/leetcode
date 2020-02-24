/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let set = new Set();
    for(let i = 0; i < emails.length; i++){
        let str = emails[i].split("@");
        //deal with local name
        let head = str[0];
        head = head.split('.').join('');
        let idx = head.indexOf('+');
        if(idx != -1){
            head = head.split('').slice(0,idx).join('');
        }
 
        let name = head + '@' + str[1];
        set.add(name);
    }
    return set.size;
};
