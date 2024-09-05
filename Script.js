if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(registration => {
      console.log('Service Worker registrado com sucesso:', registration);
    })
    .catch(error => {
      console.log('Falha ao registrar o Service Worker:', error);
    });
}

document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault(); 

    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
  
    if (username && password) {
      if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            navigator.serviceWorker.ready.then(function(registration) {
              registration.showNotification('Login feito com sucesso!', {
                body: 'Você está logado como ' + username,
                icon: '/icons/icon-192x192.png',
                vibrate: [200, 100, 200], 
                tag: 'login-notification'
              });
            });
          } else {
            alert('Permissão para notificações negada.');
          }
        });
      } else {
        alert('Seu navegador não suporta notificações.');
      }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
  