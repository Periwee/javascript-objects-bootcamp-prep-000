var playlist = new Object({Jlo :'Get on the floor'});

function updatePlaylist(playlist,artistName,songTitle){
    playlist[artistName] = songTitle;
    return playlist;
}

function removeFromPlaylist(artistName){
    delete playlist.artistName;
    playlist;
}
