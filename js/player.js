class Jukebox {
    constructor() {
        this.albums = [];
    }

    addAlbum(album) {
        this.albums.push(album);
    }

    favoriteAlbum() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }

    play() {
        this.played += 1;
    }

    display() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

const albumsData = [
  { artist: 'Operation Ivy', title: 'Energy' },
  { artist: 'Blink 182', title: 'Dude Ranch' },
  { artist: 'New Found Glory', title: 'Sticks and Stones' }
];

const albumsDropdown = document.getElementById('albumsDropdown');
const playButton = document.getElementById('playButton');
const favoriteAlbumButton = document.getElementById('favoriteAlbumButton');
const jbox = new Jukebox();

albumsData.forEach(albumData => {
    const album = new Album(albumData.artist, albumData.title);
    jbox.addAlbum(album);

    const option = document.createElement('option');
    option.text = `${album.artist} - ${album.title}`;
    albumsDropdown.add(option);
});

playButton.addEventListener('click', () => {
    const selectedAlbumIndex = albumsDropdown.selectedIndex;
    const selectedAlbum = jbox.albums[selectedAlbumIndex];
    selectedAlbum.play();
});

favoriteAlbumButton.addEventListener('click', () => {
    const favoriteAlbumMessage = jbox.favoriteAlbum();
    document.getElementById('favoriteAlbum').textContent = favoriteAlbumMessage;
});
