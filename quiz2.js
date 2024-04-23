
    // Palindrome Check
    function isPalindrome(str) {
        const len = str.length;
        for (let i = 0; i < len / 2; i++) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
        return true;
    }

    // Test cases for Palindrome Check
    const palindromeTests = [
        "radar",
        "level",
        "hello",
        "noon"
    ];

    console.log("Palindrome Check:");
    palindromeTests.forEach(test => {
        console.log(`${test}: ${isPalindrome(test)}`);
    });

    // Minimum and Maximum Numbers
    function findMinMax(numbers) {
        let min = numbers[0];
        let max = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < min) {
                min = numbers[i];
            }
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        return { min, max };
    }

    // Test cases for Minimum and Maximum Numbers
    const numbers = [5, 3, 8, 1, 9, 2, 7];
    const { min, max } = findMinMax(numbers);
    console.log("\nMinimum and Maximum Numbers:");
    console.log(`Numbers: ${numbers}`);
    console.log(`Minimum: ${min}`);
    console.log(`Maximum: ${max}`);

    // Missing Number Identification
    function findMissingNumber(numbers) {
        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i + 1] - numbers[i] !== 1) {
                return numbers[i] + 1;
            }
        }
        return -1; // If no missing number found
    }

    // Test cases for Missing Number Identification
    const series = [11, 12, 14, 15, 16, 18, 19, 20];
    const missingNumber = findMissingNumber(series);
    console.log("\nMissing Number Identification:");
    console.log(`Series: ${series}`);
    console.log(`Missing Number: ${missingNumber}`);