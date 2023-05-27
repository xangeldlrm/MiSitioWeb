document.getElementById("myForm").addEventListener("submit", function(event) {
    alert("¡Datos enviados correctamente!");
});
document.getElementById("myForm").addEventListener("reset", function(event) {
    event.preventDefault();
    this.reset();
});