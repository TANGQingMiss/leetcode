class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int len = nums.size();
        vector<int> result(2);
        result[0] = -1;
        result[1] = -1;
        for(int i = 0; i < len; i++){
            if (nums[i]==target){
                result[0] = i;
                break;
            }
        }
        for(int i = len-1; i >= 0; i--){
            if (nums[i]==target){
                result[1] = i;
                break;
            }
        }

        return result;
    }
};
