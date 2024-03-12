function isPalindrome(s) {
    console.log("Input string:", s);
    s = s.toLowerCase().replace(/[\W _]/g, "")
    console.log("Processed string:", s);

    let left = 0;
    let right = s.length - 1

    while (left < right) {
        console.log("Comparing characters at indices:", left, "and", right);
        if (s[left] !== s[right]) {
            console.log("Characters are not equal, returning false.", " s[left] -> ", s[left], " s[right] -> ", s[right]);
            return false
        }
        left++;
        right--;
    }
    console.log("String is a palindrome, returning true.");
    return true;
}


