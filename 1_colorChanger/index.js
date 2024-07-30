var index = 0;
function colorChanger() {

    let colors = ["red", "blue", "green", "yellow"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];
    console.log(index);



    console.log(index === colors.length - 1)
    console.log(index === colors.length)
    if (index > colors.length - 1) {

        index = 0;
    }



}