
function checkPalindrome() {
	var revStr = ""
	var str = document.getElementById("str").value;
	var i = str.length;
	for (var j = i; j >= 0; j--) {
	  revStr = revStr + str.charAt(j)
	}
	if (str == revStr) {
	  alert("The entry is Palindrome")
	} else {
	  alert("The entry is not a Palindrome")
	}
}