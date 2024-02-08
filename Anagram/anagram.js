// write anagram function 

const isAnagram  = (str1, str2) => {
    if(str1.length !== str2.length){
        return false;
    }else{

        const lowerStr1 = str1.toLowerCase(); 
        const lowerStr2 = str2.toLowerCase(); 
        
        if(lowerStr1 === lowerStr2){
            return false
        }

        let sortedStr1 = lowerStr1.split('').sort().join('');
        let sortedStr2 = lowerStr2.split('').sort().join('');
        return sortedStr1 === sortedStr2

    }    
}

