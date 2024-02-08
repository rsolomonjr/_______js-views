// Palindrome 
// 121 is. 123 is not. fof is. foo is not. foof is. 

const isPalindrome = str => {
    return str === str.split('').reverse().join('');
}


