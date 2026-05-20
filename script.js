const container = document.getElementById("container")
const toggleBtn = document.getElementById("toggleBtn")

toggleBtn.onclick = () => {
    container.classList.toggle("active");
    toggleBtn.innerText = container.classList.contains("active") ? "Sign In" : "Sign Up";
};
