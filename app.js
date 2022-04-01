const apiKey = 'yWPqWAUSTrxqC6TuANyD0DX4tVpQ27YY';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
const showOnMain = document.getElementById('main-content');

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Animated Gift';
        img.className = 'position-absolute top-50 start-50 translate-middle';

        showOnMain.appendChild(img);
    })
    .catch( console.warn );