const findVowels = (str) => {
    const vowels  = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').reduce((acc, char) => {
        return vowels.includes(char) ? acc + 1 : acc;
    }, 0)
}

