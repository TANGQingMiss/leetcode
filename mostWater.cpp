class Solution {
public:
    int maxArea(vector<int>& height) {
        int len = height.size();
        int result = 0;
        int tmp;
        for(int i = 0; i < len; i++){
            for(int j = i; j < len; j++){
                if(height[i]<height[j]) {
                    tmp = height[i]*(j-i);
                }else{
                    tmp = height[j]*(j-i);
                }
                if (tmp>result) result = tmp;
            }
        }
        return result;
    }
};
