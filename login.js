const login = {
  username: "admin",
  password: "admin123",
};

let username = document.getElementById("username");
let password = document.getElementById("password");

function panggil() {
  if (username.value === login.username && password.value === login.password) {
    localStorage.setItem("admin", password.value);
    window.location.href =
      "http://127.0.0.1:5500/lintasnusantara.github.io/main.html";
    alert("Berhasil login");
  } else {
    alert("Login Tidak Berhasil");
  }
}
