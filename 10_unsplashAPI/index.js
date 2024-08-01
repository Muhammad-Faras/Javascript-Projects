const q = document.querySelector('#query');
const imagesdiv = document.querySelector('.images');

q.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        loadImages();
        q.value = '';
    }
});

function loadImages() {

    const query = q.value;
    const accessKey = 'your key here(removed for security purpose)';
    const url = `https://api.unsplash.com/search/photos/?query=${query}&per_page=9&client_id=${accessKey}`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert(`Error: ${response.status}`);
                throw new Error(response.statusText);
            }
        })
        .then(data => {
            imagesdiv.innerHTML = '';
            const imageNodes = [];
            for (let i = 0; i < data.results.length; i++) {
                imageNodes[i] = document.createElement('div');
                imageNodes[i].style.backgroundImage = 'url(' + data.results[i].urls.raw + ')';
                imageNodes[i].style.width = '200px';
                imageNodes[i].style.height = '200px';
                imageNodes[i].style.backgroundSize = 'cover';
                imageNodes[i].addEventListener('dblclick', function () {
                    window.open(data.results[i].links.download, '_blank');
                });
                imagesdiv.appendChild(imageNodes[i]);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
