// Verificar suporte para Push API e solicitar permissão
if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('/service-worker.js').then(function(swReg) {
      console.log('Service Worker registrado', swReg);
  
      // Solicitar permissão para notificações
      Notification.requestPermission(function(status) {
        console.log('Permissão de notificação:', status);
        if (status === 'granted') {
          swReg.showNotification('PWA Instalado com sucesso!', {
            body: 'Seu PWA agora está funcionando offline!',
            icon: '/icons/icon-192x192.png',
          });
        }
      });
    }).catch(function(error) {
      console.error('Falha ao registrar o Service Worker:', error);
    });
  }
  