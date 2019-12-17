class Solution {
public:
    bool isPalindrome(long x) {
        if(x<0) return false;
        long left=0,y=0;
        long right=x;
        while(right!=0){
            left=right%10;
            y=y*10+left;
            right=right/10;
        }
        return y==x;
    }
};
