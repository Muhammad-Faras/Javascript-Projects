var num = 0;
function increaseNum() {
    var counter = document.querySelector('.counter');
    num++;
    counter.innerHTML = num;

}
function descreaseNum() {
    var counter = document.querySelector('.counter');
    num--;
    counter.innerHTML = num;

}
function resetNum() {
    var counter = document.querySelector('.counter');
    num = 0;
    counter.innerHTML = num;

}