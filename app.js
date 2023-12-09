var word = prompt("Enter any word to check it's Palindrome or not");

if (word[0] == word[word.length - 1] && word[1] == word[word.length - 2]) {
    alert("Its Palindrome");
} else {
    alert("Its Not");
}