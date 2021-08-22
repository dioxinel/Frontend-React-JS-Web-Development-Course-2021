function calculateWordsInString(string) {
  const list = string.split(' ');
  let res = 0;
  for (let i = 0; i <= list.length; i++) {
    if (list[i]) {
      res++;
    }
  }
  console.log(res);
 }
 calculateWordsInString("Easy string for count");
 calculateWordsInString("Easy");
 calculateWordsInString("Some string with a triple   space");
 calculateWordsInString("Some?  string, with a triple   space");