const lock = document.querySelector(".lock-icon");
const password = document.querySelector(".password");

lock.addEventListener("click", () => {
  if (lock.classList.contains("bxs-lock")) {
    lock.classList.remove("bxs-lock");
    lock.classList.add("bxs-lock-open");
    password.type = "text";
  } else {
    lock.classList.add("bxs-lock");
    lock.classList.remove("bxs-lock-open");
    password.type = "password";
  }
});