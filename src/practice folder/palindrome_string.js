let str = "madam";
let reversed = str.split("").reverse().join("");

if (str === reversed) {
    alert(str + " is a palindrome");
} else {
    alert(str + " is not a palindrome");
}