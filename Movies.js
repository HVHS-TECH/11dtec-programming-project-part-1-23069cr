function start() {
  var userMovie = prompt("What movie do you need")
  while (userMovie == null){
    userMovie = prompt("What movie do you need");
  }
  alert("You are now renting " + userMovie);
}
