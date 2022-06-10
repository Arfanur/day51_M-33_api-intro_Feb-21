function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data));
}
loadPhotos();

function displayPhotos(photos) {
    const photosContainer = document.getElementById('photos');
    for (const photo of photos) {
        console.log(photo);
        const h3 = document.createElement('h3');
        h3.innerText = photo.title;
        photosContainer.appendChild(h3);
        const imgDiv = document.createElement('div');
        imgDiv.innerHTML = `
        <img src="${photo.url}" alt=""></img>
        `;
        photosContainer.appendChild(imgDiv);
    }
}