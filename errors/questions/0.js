try {
  const letters = "abc";
  letters(); // <- How would you describe what we're trying to do to letters here ? :🤔
} catch (error) {
  console.log(error, "<--- error");
}
//type letters is not a function 