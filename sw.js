const cacheName = 'static_v1'
const appShell = [
    '/index.html',
    '/sw.js',
    '/manifest.json',
    '/src/assets/icons/pokeball-32.png',
    '/src/assets/icons/pokeball-144.png',
    '/src/assets/pokemonLogo.png',
    '/src/assets/arrow.png',
    '/src/components/Banner.jsx',
    '/src/components/Pokeball.jsx',
    '/src/components/PokemonCard.jsx',
    '/src/components/PokemonDescription.jsx',
    '/src/components/PokemonDetailHeader.jsx',
    '/src/components/PokemonEvolution.jsx',
    '/src/components/PokemonProfile.jsx',
    '/src/components/PokemonsList.jsx',
    '/src/components/PokemonStats.jsx',
    '/src/components/PopupAlert.jsx',
    '/src/components/SearchBar.jsx',
    '/src/components/PokemonDetailTabs.jsx',
    '/src/reducers/PokedexReducer.js',
    '/src/reducers/PokemonInfosReducer.js',
    '/src/reducers/PokemonsReducer.js',
    '/src/services/Localstorage.service.js',
    '/src/services/Pokemons.service.js',
    '/src/services/ServiceWorker.service.js',
    '/src/store/index.js',
    '/src/styles/Banner.module.css',
    '/src/styles/Pokeball.module.css',
    '/src/styles/PokemonCard.module.css',
    '/src/styles/PokemonDetail.module.css',
    '/src/styles/Tabs.module.css',
    '/src/styles/Terminal.module.css',
    '/src/views/Home.jsx',
    '/src/views/Pokedex.jsx',
    '/src/views/PokemonDetail.jsx',
    '/src/App.jsx',
    '/src/main.jsx'
]

self.addEventListener('install', function(event) {
    console.log('Installing...');
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => cache.addAll(appShell))
        .then(console.log("adding new cache"))
        .then(() => self.skipWaiting())
        .catch(err => console.log("erreur on adding cache : ", err))
    );
});

self.addEventListener('activate', function(event) {
    console.log('Activated');
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                return response;
            }else{
                return fetch(event.request);
            }
        })
    )
});

