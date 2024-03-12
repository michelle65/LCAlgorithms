function lenghtOfLongestSubstring(s){
    let windowsCharsMap = {};
    let windowsStart = 0;
    let maxLength = 0;

    for(let i = 0;i<s.length;i++){
        const endChar = s[i];

        if(windowsCharsMap[endChar] >= windowsStart){
            windowsStart = windowsCharsMap[endChar] + 1;
        }

        windowsCharsMap[endChar] = i;
        maxLength = Math.max(maxLength,i-windowsStart+1);
    }

    return maxLength;
}