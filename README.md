# Project Title
LIRI Bot

# How does LIRI Bot works?

LIRI Bot is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

# Instructions:

You can use the following commands:

concert-this [artist/band name here] - Gives you information about concerts
spotify-this-song [song name] - Gives you information about song name
movie-this [movie name] - Gives you information about that movie
do-what-it-says - Reads from random.txt and gets the command and the value and executes the command

# Built with:
* [Javascript](http://www.javascript.com)
* [JQuery](http://www.jquery.com)
* [Nodejs](http://www.nodejs.org/en)
* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
* [Axios](https://www.npmjs.com/package/axios)
* [OMBD API](http://www.omdbapi.com/)
* [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
* [Moment](https://www.npmjs.com/package/moment)

# Working Proof
### Spotify-this-song command

<a href="/gif/-yGmf88" title="Spotify this song">
  <img src="https://i.makeagif.com/media/5-13-2019/yGmf88.gif" alt="" style="max-width:100%"></a>
<div style="font-size:20px;"><a href="/" title=""></a></div>

This command will show the following information about the song in your terminal/bash window
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from

### Movie-this command

<a href="/gif/-aX0dx4" title=""><img src="https://i.makeagif.com/media/5-13-2019/aX0dx4.gif" alt="" style="width:500px; height:275px;"></a><div style="font-size:11px;"><a href="/" title=""></a></div>

This will output the following information to your terminal/bash window:
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
  
### Concert-this command

<a href="/gif/-z60tc5" title=""><img src="https://i.makeagif.com/media/5-13-2019/z60tc5.gif" alt=""></a><div style="font-size:11px;"><a href="/" title=""></a></div>

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")

### do-what-it-says command

<a href="/gif/-vsRcOB" title=""><img src="https://i.makeagif.com/media/5-13-2019/vsRcOB.gif" alt=""></a><div style="font-size:11px;"><a href="/" title=""></a></div>

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.









