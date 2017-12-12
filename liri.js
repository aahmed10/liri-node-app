/*Make it so liri.js can take in one of the following commands:

   * `my-tweets`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`
   */

var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: ["my-tweet", "spotify-this-song", "movie-this", "do-what-it-says"],
      name: "options"
    },
  
  ])
  .then(function(inquirerResponse) {
    if (inquirerResponse.options === "my-tweet"){
      getTweets();
    }
    else if (inquirerResponse.options === "spotify-this-song") {
      getSpotify();
    }
    else if (inquirerResponse.options === "movie-this") {
      getIMDB();
    }
    else if (inquirerResponse.options === "do-what-it-says") {
      doWhatItSays();
    }

  });

// //----------------------------------------------
var keys = require ("./keys.js");
var Twitter = require("twitter");
var client = new Twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  access_token_key: keys.access_token_key,
  access_token_secret: keys.access_token_secret,
});
