class Solution {
public:
    int climbStairs(int n) {
        if(n==1) return 1;
        if(n==2) return 2;
        int result = 0;
        int i = 1, j = 2;
        int k = 3;
        while(k<=n){
            result = i + j;
            i = j;
            j = result;
            k++;
        }
        return result;
    }
};
