class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int len = s.size();
        int i = 0;
        int j,k;
        int max = 0;
        for(j = 0; j<len;j++){
            for(k = i; k < j; k++){
                if(s[k]==s[j]){
                    i = k+1;
                    break;
                }
            }
            if(j-i+1>max){
                    max = j-i+1;
            }   
        }
        return max;
    }
};
