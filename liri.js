/*---------------------------------------------------*/
/*	REQUIRED LIBRARIES
/*---------------------------------------------------*/

require("dotenv").config();
var fs = require("fs");

var axios = require("axios");
var moment = require('moment');

var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var argument1 = process.argv[2];
var argument2 = process.argv[3];

/*---------------------------------------------------*/
/*	      CODE FUNCTIONALITY
/*---------------------------------------------------*/

function concertInformation(artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function (response) {
            printConcertInfo(response.data, artist)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function spotifyThisSong(word) {

    if (word == undefined) {
        word = "Someone like you";
    }

    spotify.search({ type: 'track', query: word }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        printSpotify(data);
    });
}

function movie(movie) {

    if (movie == undefined) {
        movie = "Star Wars";
    }

    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            printMovieData(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function printConcertInfo(data, searchValue) {

    for (let i = 0; i < data.length; i++) {
        var search = searchValue;
        var name = data[i].venue.name;
        var location = data[i].venue.city + ", " + data[i].venue.country;
        var date = moment(data[i].datetime).format("MM-DD-YYYY");

        console.log("Search: " + search
            + "\nName: " + name
            + "\nLocation: " + location
            + "\nDate: " + date);
        console.log("------------------------------");

        appendFile("log.txt", "Search: " + search
            + "\nName: " + name
            + "\nLocation: " + location
            + "\nDate: " + date
            + "\n------------------------------\n");
    }
}

function printSpotify(data) {

    for (let i = 0; i < data.tracks.items.length; i++) {
        var artist = data.tracks.items[i].artists[0].name;
        var song = data.tracks.items[i].name;
        var album = data.tracks.items[i].album.name;
        var preview = data.tracks.items[i].preview_url;

        if (preview == null) {
            preview = "No preview available."
        }

        console.log("Artist: " + artist
            + "\nSong: " + song
            + "\nAlbum: " + album
            + "\nPreview: " + preview);
        console.log("------------------------------");

        appendFile("log.txt", "Artist: " + artist
            + "\nSong: " + song
            + "\nAlbum: " + album
            + "\nPreview: " + preview
            + "\n------------------------------\n");
    }
}

function printMovieData(data) {
    var title = data.Title;
    var year = data.Year;
    var rateIMDB = data.imdbRating;
    var rateRotten;
    var country = data.Country;
    var language = data.Language;
    var plot = data.Plot;
    var actors = data.Actors;

    for (var i = 0; i < data.Ratings.length; i++) {
        if (data.Ratings[i].Source == "Rotten Tomatoes") {
            rateRotten = data.Ratings[i].Value;
            break;
        } else {
            rateRotten = "Not available."
        }
    }

    console.log("Title: " + title
        + "\nYear: " + year
        + "\nIMDB Rating: " + rateIMDB
        + "\nRotten Tomatoes Rating: " + rateRotten
        + "\nCountry: " + country
        + "\nLanguage: " + language
        + "\nPlot: " + plot
        + "\nActors: " + actors);
    console.log("------------------------------");

    appendFile("log.txt", "Title: " + title
        + "\nYear: " + year
        + "\nIMDB Rating: " + rateIMDB
        + "\nRotten Tomatoes Rating: " + rateRotten
        + "\nCountry: " + country
        + "\nLanguage: " + language
        + "\nPlot: " + plot
        + "\nActors: " + actors
        + "\n------------------------------\n");
}

function readFile(filename) {
    fs.readFile(filename, "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }

        var dataArr = data.split(",");
        chooseCommand(dataArr[0], dataArr[1]);

    })
}

function appendFile(filename, textToAppend) {
    fs.appendFile(filename, textToAppend, function (err) {

        if (err) {
            console.log(err);
        }
    });
}

/*---------------------------------------------------*/
/*	      CHOOSE BETWEEN DIFFERENT FUNCTIONS
/*---------------------------------------------------*/

function chooseCommand(first, valueToDisplay) {
    var result = first + " " + valueToDisplay + "\n";
    appendFile("log.txt", "Result: " + result + "\n------YOUR RESULTS ARE\n");
    switch (first) {
        case "concert-this":
            concertInformation(valueToDisplay);
            break;
        case "spotify-this-song":
            var song = process.argv.slice(3).join(" ").toLowerCase();
            if (song === "") {
                song === "Umbrella";
            }
            spotifyThisSong(valueToDisplay);
            break;
        case "movie-this":
            movie(valueToDisplay);
            break;
        case "do-what-it-says":
            readFile("random.txt");
            break;
    }
}

chooseCommand(argument1, argument2);

