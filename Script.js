if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(registration => {
      console.log('Service Worker registrado com sucesso:', registration);
    })
    .catch(error => {
      console.log('Falha no registro do Service Worker:', error);
    });
}

// Função para solicitar permissão de notificação
function pedirPermissaoNotificacao() {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log('Permissão para notificações concedida!');
        } else {
            console.log('Permissão para notificações não concedida.');
        }
    });
}

// Função para enviar a notificação via Service Worker
function enviarNotificacao() {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then(reg => {
            const options = {
                body: 'Bem-vindo! Você fez login com sucesso.',
                icon: './icons/icon-192x192.png', // Ícone da notificação
                vibrate: [200, 100, 200],
                tag: 'login-notification'
            };
            reg.showNotification('Login PWA', options);
        });
    }
}

// Evento para disparar a notificação ao clicar no botão de login
const loginButton = document.getElementById('login-btn');
loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Previne o envio do formulário para fins de teste
    enviarNotificacao(); // Envia a notificação via Service Worker
});

// Solicitar permissão para enviar notificações ao carregar a página
window.onload = pedirPermissaoNotificacao;