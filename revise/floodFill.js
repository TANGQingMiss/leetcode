/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let target = image[sr][sc];
    dfs(image, newColor, sr,sc,target);
    return image;

    function dfs(image, newColor, i, j, target){
        if(image[i][j] == newColor || image[i][j] != target){
            return;
        }
        image[i][j] = newColor;
        if(i > 0){
            dfs(image, newColor, i - 1, j, target);
        }
        if(i < image.length - 1){
            dfs(image, newColor, i + 1, j, target);
        }
        if(j > 0){
            dfs(image, newColor, i, j - 1, target);
        }
        if(j < image[i].length - 1){
            dfs(image, newColor, i, j + 1, target);
        }
    }
};
