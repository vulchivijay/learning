// whenever you want to create objects with similar functionalities (to use the
// same methods and properties), you encapsulate the main functionalities in a
// Function and you use that Function’s constructor to create the objects. This
// is the essence of encapsulation. And it is this need for encapsulation that we
// are concerned with and why we are using the Combination Constructor/Prototype Pattern.

function User (theName, theEmail) {
  this.name = theName;
  this.email = theEmail;
  this.quizScores = [];
  this.currentScore = 0;
}

User.prototype = {
  constructor: User,
  saveScore:function (theScoreToAdd)  {
      this.quizScores.push(theScoreToAdd)
  },
  showNameAndScores:function ()  {
      var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
      return this.name + " Scores: " + scores;
  },
  changeEmail:function (newEmail)  {
      this.email = newEmail;
      return "New Email Saved: " + this.email;
  }
}

// A User 
let firstUser = new User("Richard", "Richard@examnple.com"); 
firstUser.changeEmail("RichardB@examnple.com");
firstUser.saveScore(15);
firstUser.saveScore(10); 

firstUser.showNameAndScores(); //Richard Scores: 15,10

// Another User
let secondUser = new User("Peter", "Peter@examnple.com");
secondUser.saveScore(18);
secondUser.showNameAndScores(); //Peter Scores: 18