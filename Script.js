document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Verifica se os campos estão preenchidos
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
  
    if (username && password) {
      // Verifica se a API de Notificações está disponível
      if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            // Exibe a notificação de login com sucesso
            navigator.serviceWorker.ready.then(function(registration) {
              registration.showNotification('Login feito com sucesso!', {
                body: 'Você está logado como ' + username,
                icon: '/icons/icon-192x192.png', // Caminho para o ícone
                vibrate: [200, 100, 200], // Vibração ao receber a notificação
                tag: 'login-notification' // Identificador da notificação
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
  