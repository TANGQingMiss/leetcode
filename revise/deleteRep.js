<script type="text/javascript">
    //delete repetitive items in an array by js

    //method1: using ES6 - set
    function deleteRep_v1(nums){
        return Array.from(new Set(nums));//array.from() object array - array
    }

    //method2: using for cycle and splice
    function deleteRep_v2(nums){
        for(let i = 0; i < nums.length; i++){
            for(let j = i+1; j < nums.length; j++){
                if(nums[i]==nums[j]){
                    nums.splice(j,1);//splice(m,n) - delete n elements from index m
                    j--;
                }
            }
        }
        return nums;
    }

    //method 3: using indexOf
    function deleteRep_v3(nums){
        var res = [];
        for(let i = 0; i , nums.length; i++){
            if(res.indexOf(nums[i])===-1){
                res.push(nums[i]);
            }
        }
        return res;
    }

    //method 4: using sort
    function deleteRep_v4(nums){
        nums.sort();
        let res = [nums[0]];
        for(let i = 1; i < nums.length; i++){
            if(nums[i]!==nums[i-1]) res.push(nums[i]);
        }
        return res;
    }

    //method 5: using includes to verify if an array has a given number
    function deleteRep_v5(nums){
        let res = [];
        for(let i = 0; i < nums.length; i++){
            if(!res.includes(nums[i])) res.push(nums[i]);
        }
        return res;
    }

    //method 6: using filter
    function deleteRep_v6(nums){
        return nums.filter(function(item,index,nums){
            return nums.indexOf(item,0)===index;
        });
    }

    //method 7: using map
    function deleteRep_v7(nums){
        let map = new Map();
        let res = new Array();
        for(let i = 0; i < nums.length; i++){
            if(map.has(nums[i])){
                map.set(res[i],true);
            }else{
                map.set(nums[i],false);
                res.push(nums[i]);
            }
        }
        return res;
    }
</script>