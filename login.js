const login = {
    username: "admin",
    password: "admin123"
};

let username = document.getElementById('username');
let password = document.getElementById('password');

function panggil() {
    if (username.value === login.username && password.value === login.password) {
        window.location.href = '/Users/olviyanti/Desktop/LintasNusantara/lintasnusantara.github.io/main.html'
        alert('Berhasil login');
    } else {
        alert('Login Tidak Berhasil');
    }
}
