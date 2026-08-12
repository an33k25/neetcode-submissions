class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
      const set1 = new Set();
      for (const num of nums1){
        set1.add(num);
      }
      const set2 = new Set();
      for (const num of nums2){
        if(set1.has(num)){
          set2.add(num)
        }
      }

      return [...set2];
      
    }
}
