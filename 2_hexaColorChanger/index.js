var index = 0;
function hexaColorChanger() {
    let hexa_color = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",]
    var hexa_code = '';
    for (let i = 0; i < 6; i++) {
        rand_index = Math.floor(Math.random() * hexa_color.length)

        hexa_code += hexa_color[rand_index]
    }
    console.log(hexa_code)
    // let para = document.getElementsByTagName('p');
    // para.style.background = "#" + hexa_code;

    let para = document.getElementById('para'); // Use [0] to get the first paragraph
    para.style.background = "#" + hexa_code; // Apply background color

    let textcolor = document.querySelector('.colorshow');
    textcolor.innerHTML = "#" + hexa_code;
}