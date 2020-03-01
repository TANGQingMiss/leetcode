/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    if(path == "") return "";
    let res = [];
    path = path.split('/').filter(Boolean);
    for(let i = 0; i < path.length; i++){
        if(path[i] != ' ' && path[i] != '.'){
            if(path[i] == '..'){
                if(res.length != 0) res.pop();
            }else{
                res.push(path[i]);
            }
        }
    }

    return '/' + res.join('/');
};
