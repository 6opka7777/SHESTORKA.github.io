document.addEventListener("DOMContentLoaded", () => {
    console.log("Сайт загружен!");
});

function copyTON() {
    const tonWallet = "UQC7_vysU7sy4gqAScBmifGixzyzhL_VbpUKmeOXQ2cEA6fl";
    navigator.clipboard.writeText(tonWallet).then(() => {
        let message = document.querySelector(".copy-success");
        message.style.display = "block";
        setTimeout(() => {
            message.style.display = "none";
        }, 2000);
    });
}
