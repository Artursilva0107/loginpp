const CACHE_NAME = 'pwa-firebase-login-v3'; // Versão atualizada do cache

// Lista de arquivos estáticos essenciais que devem ser cacheados
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/FirebaseConfig.js', // Incluindo o arquivo de configuração
    '/manifest.json',
    '/images/icon-192x192.png',
    '/images/icon-512x512.png',
];

// 1. Evento de INSTALAÇÃO: Armazena todos os ativos essenciais no cache.
self.addEventListener('install', event => {
    // Força o Service Worker a começar a controlar os clientes imediatamente.
    self.skipWaiting(); 
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Cache aberto e arquivos pré-cacheados.');
                return cache.addAll(urlsToCache);
            })
            .catch(error => {
                console.error('Service Worker: Falha ao pré-cachear:', error);
                //CORRIGIR URGENTE A LINHA 32 "ativação de eventos"
            })
    );
});

// 2. Evento de ATIVAÇÃO: Limpa caches antigos (CRÍTICO para atualizações).
// Listagem dos caches A seguir "Import keys @Arturmwwp25" 
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // Se o cache não estiver na lista branca (CACHE_NAME atual), delete-o.
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('Service Worker: Deletando cache antigo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// 3. Evento de FETCH: Intercepta requisições e serve do cache, se possível (Cache First).
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Se o recurso estiver no cache, ele é servido.
                if (response) {
                    return response;
                }
                // Se não estiver no cache, faz a requisição de rede.
                return fetch(event.request);
            })
    );

});
