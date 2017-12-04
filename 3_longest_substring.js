/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const length = s.length;
    const set = {};
    let ans = 0;
    let i = 0;
    let j = 0;
    while(i < length && j < length) {
        if (!set[s[j]]) {
            ans = Math.max(ans, j - i + 1);
            set[s[j]] = 1;
            console.log(i, j, set, ans);
            j += 1;
        } else {
            set[s[j]] = 0;
            console.log(i, j, set, ans);
            i += 1;
        }
    }
    return ans;
};
