
    function getVowels() {
      var str = document.getElementById('inputText').value;
      var count = 0, total_vowels="";
      for (var i = 0; i < str.length; i++) {
      if (str.charAt(i).match(/[a-zA-Z]/) != null) {
      // findVowels
      if (str.charAt(i).match(/[aeiouAEIOU]/))
      {
      total_vowels = total_vowels + str.charAt(i);
      count++;
      }
      }
      }
      document.getElementById('vowels').value = total_vowels;
      document.getElementById('vcount').value = count;
      }
    
   