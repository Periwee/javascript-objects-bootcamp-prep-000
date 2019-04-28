var playlist = new Object({Jlo :'Get on the floor'});

function updatePlaylist(playlist,artistName,songTitle){
    playlist[artistName] = songTitle;
    return playlist;
}

function removeFromPlaylist(playlist, artistName){
    console.log(playlist);
    delete playlist.artistName;
    console.log(playlist);
    return Obj;
}
