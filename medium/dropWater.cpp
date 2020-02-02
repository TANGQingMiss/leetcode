//drop water
class Solution {
public:
    int trap(vector<int>& height) {
       int len = height.size();
       //find the maximum height
       int tmp = 0;
       int k = 0;
       int water = 0;
       for(int i = 0;i<len;i++){
           if (height[i] > tmp){
               tmp = height[i];
               k = i;
           }
       }
       for(int i = 0;i<k;i++){
           if(height[i]>height[i+1]) {
               water += height[i]-height[i+1];
               height[i+1] = height[i];
           }
       }

        for(int i = len-1;i>k;i--){
           if(height[i]>height[i-1]) {
               water += height[i]-height[i-1];
               height[i-1] = height[i];
           }
       }
       return water;
    }

};