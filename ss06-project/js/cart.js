
// nút tăng
document.querySelector('.input-group-prepend').addEventListener('click', function() {
    var input = this.parentNode.querySelector('input');
    var currentValue = parseInt(input.value, 10);
    if (currentValue > 1) {
        input.value = currentValue - 1;
    }
});

document.querySelector('.input-group-append').addEventListener('click', function() {
    var input = this.parentNode.querySelector('input');
    input.value = parseInt(input.value, 10) + 1;
});


// nút bấm shopee
// Lấy thẻ div bằng class
const shopee = document.getElementsByClassName("shopee")[0];

// Gán sự kiện click cho thẻ div
shopee.addEventListener("click", load);
function load() {
    window.location.href = "../index.html";
}