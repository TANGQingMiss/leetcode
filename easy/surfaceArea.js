var surfaceArea = function(grid) {
    let res = 0;
    let row = grid.length;
    let col = grid[0].length;
    for (let i = 0; i < row; i++) {
			for (let j = 0; j < col; j++) {
				if (grid[i][j]!=0) 
					res+=grid[i][j]*4+2;
				//minus superposition
				if (i>0)
					res-=Math.min(grid[i-1][j], grid[i][j])*2;
				if (j>0)
					res-=Math.min(grid[i][j-1], grid[i][j])*2;
			}
	}
    return res;
};
