const images = document.querySelectorAll(".photo-image")

images.forEach(function (image) {
    image.addEventListener("click", function () {
        image.classList.toggle("green-border")
    })
})
