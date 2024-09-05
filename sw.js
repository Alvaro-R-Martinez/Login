// Adiciona a funcionalidade de push
self.addEventListener('push', function(event) {
  let data = event.data ? event.data.text() : 'Sem dados de push';

  const options = {
    body: data,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-192x192.png',
    vibrate: [200, 100, 200],  // Vibração em dispositivos móveis
    actions: [
      {
        action: 'explore',
        title: 'Ver agora',
        icon: '/icons/icon-192x192.png'
      },
      {
        action: 'close',
        title: 'Fechar',
        icon: '/icons/icon-192x192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Nova notificação', options)
  );
});

// Clique em notificação
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  if (event.action === 'explore') {
    clients.openWindow('/');
  }
}, false);

