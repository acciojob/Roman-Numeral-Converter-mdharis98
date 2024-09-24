function convertToRoman(num) {
    // Roman numerals and their values
    const romanSymbols = [
        ['M', 1000], 
        ['CM', 900],
        ['D', 500], 
        ['CD', 400],
        ['C', 100], 
        ['XC', 90],
        ['L', 50], 
        ['XL', 40],
        ['X', 10], 
        ['IX', 9],
        ['V', 5], 
        ['IV', 4],
        ['I', 1]
    ];

    // Initialize an empty string to store the Roman numeral
    let romanNumeral = '';

    // Loop through the Roman symbols array
    for (let i = 0; i < romanSymbols.length; i++) {
        let symbol = romanSymbols[i][0];
        let value = romanSymbols[i][1];

        // Append symbol while num is greater or equal to value
        while (num >= value) {
            romanNumeral += symbol;
            num -= value;
        }
    }

    return romanNumeral;
}

// Test examples
console.log(convertToRoman(14));    // Output: XIV
console.log(convertToRoman(798));   // Output: DCCXCVIII

// do not edit below this line
module.exports = convertToRoman;
