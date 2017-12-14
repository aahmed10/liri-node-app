var inquirer = require("inquirer");
// Create a "Prompt" with a series of questions.
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

function getTweets () {
  var params = {BigBallerAdeel: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        for (i=0; i<tweets.length; i++){
          var eachtweettext = tweets[i].text;
          console.log(eachtweettext)
        };
      };
      });
};

//Spotify //----------------------------------------------
//keys
/*
     * Artist(s)
     
     * The song's name
     
     * A preview link of the song from Spotify
     
     * The album that the song is from
*/
//---------------------------------------------
//omdb 

//prompt fxn
//promise with request fxn 
//get api key 
//check activity for format
/*   ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
   */
//-----------------------------

var fs = require("fs");

function doWhatItSays (){
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }

    else {
    var dataArr = data.split(",");
      if (dataArr[0] === "my-tweet"){
        getTweets()
      }
    
  });//end of fs.readFile
};