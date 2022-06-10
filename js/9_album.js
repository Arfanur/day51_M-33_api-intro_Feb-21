function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data));
}
loadAlbums();

function displayAlbums(albums) {
    const albumsContainer = document.getElementById('albums');
    for (const album of albums) {
        console.log(album);
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.innerText = album.title;
        albumsContainer.appendChild(p);
    }
}