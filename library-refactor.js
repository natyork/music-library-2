var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function () {
    var pID = this.playlists;
    for (var key in pID) {
      var playID = pID[key].id;
      var playName = pID[key].name;
      var numTracks = pID[key].tracks.length;
      var result = playID + ': ' + playName + ' - ' + numTracks + ' tracks';
      console.log(result);
    }
  },

  printTracks: function () {
    var tID = this.tracks;
      for (var key in tID) {
        var trackID = tID[key].id;
        var trackName = tID[key].name;
        var trackArtist = tID[key].artist;
        var trackAlbum = tID[key].album;
        var result = trackID + ': ' + trackName + ' by ' + trackArtist + ' (' + trackAlbum + ')';
        console.log(result);
     }
  },

  printPlaylist: function (playlistId) {
    var pID = this.playlists[playlistId];
    var playID = pID.id;
    var playName = pID.name;
    var numTracks = pID.tracks.length;
    var result = playID + ': ' + playName + ' - ' + numTracks + ' tracks';
    console.log(result);
    var trackListArray = pID.tracks;
    for (var i = 0; i < trackListArray.length; i++){
      var tout = trackListArray[i]
      var tID =this.tracks[tout];
      var trackID = tID.id;
      var trackName = tID.name;
      var trackArtist = tID.artist;
      var trackAlbum = tID.album;
      var result = trackID + ': ' + trackName + ' by ' + trackArtist + ' (' + trackAlbum + ')';
      console.log(result);
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    var pID = this.playlists[playlistId];
    var trackListArray = pID.tracks;
    trackListArray.push(trackId);
  },

  uid:  function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {
    var newtID = 't' + this.uid(); // new ID string
    if (!this.tracks[newtID]) {
      var newTrack = (this.tracks[newtID]={});
      newTrack['id'] = newtID;
      newTrack['name'] = name;
      newTrack['artist'] = artist;
      newTrack['album'] = album;
    }
    console.log(library.tracks);
  },

  addPlaylist: function (name) {
    var newpID = 'p' + this.uid();
    if (!library.playlists[newpID]) {
      var newPlaylist = (library.playlists[newpID]={});
      newPlaylist['id'] = newpID;
      newPlaylist['name'] = name;
      newPlaylist['tracks'] = [];
    }
    console.log(library.playlists);
  }
}



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
// str.search(regexp)
}

//function calls for testing
library.printPlaylists();
library.printTracks();
library.printPlaylist('p01');
library.addTrackToPlaylist('t01', 'p02');
library.addTrack('Fat Bottomed Girls', 'Queen', 'Jazz (1978)');
library.addPlaylist('Running');
library.printSearchResults()

// console.log(uid());