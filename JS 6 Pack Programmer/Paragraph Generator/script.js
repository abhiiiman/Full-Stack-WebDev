const input = document.getElementById("numOfWords");

const container = document.querySelector(".container");

const generateWord = (n) => {
    let text = "";
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < n; i++) {
        const random = (Math.random() * 25).toFixed(0);
        text += letters[random];
    }

    return text;
}

// generating the para here onclick of the button generate here.

let noOfWords;

const generatePara = () => {
    noOfWords = Number(input.value);

    const para = document.createElement("p");

    let data = '';

    for (let i = 0; i < noOfWords; i++) {

        const randomNumber = (Math.random() * 15).toFixed(0);
        data += generateWord(randomNumber) + " ";

    }

    para.innerText = data;
    para.setAttribute("class", "para");

    container.append(para);
};