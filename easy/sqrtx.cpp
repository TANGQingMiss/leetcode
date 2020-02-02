class Solution {
public:
    int mySqrt(int x) {
        //return (int)sqrt(x);
        if(x==1) return 1;
        int min = 0;
        int max = x;
        while(max-min>1){
            int m = (max+min)/2;
            if(x/m < m){
                max = m;
            }else{
                min = m;
            }
        }
        return min;
    }
};
