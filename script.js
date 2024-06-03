const boxes = document.querySelectorAll(".box");


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.classList.remove(
            "bounce",
            "rotate",
            "scale",
            "fade",
            "slide",
            "flip",
            "pulse",
            "shake",
            "swing",
            "tada",
            "wobble",
            "jello"
        );
        void box.offsetWidth;

        const animation = box.getAttribute("data-animation");

        box.classList.add(animation);

    });

});