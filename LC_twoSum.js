class Solution {
    twoSum(nums,target){
        let ans = new Array(2).fill(0);
        let map = new Map();
        for(let i=0;i<nums.length;i++){
            let diff = target - nums[i];
            if(!map.has(diff)){
                map.set(nums[i],i)
            }else{
                ans[0] = i;
                ans[1] = map.get(diff);
                break;
            }
        }
        return ans;
    }
}

//Generate fake input data
const solution = new Solution();
const nums = [2,7,11,15];
const target = 9;

//Call the function
const result = solution.twoSum(nums,target);
console.log("Indices:",result)