let imgSrc = "assets/img/giphy.gif";
let queData = {
    student: [
        {letter: "A", img: imgSrc},
        {letter: "B", img: imgSrc},
        {letter: "C", img: imgSrc},
        {letter: "D", img: imgSrc},
        {letter: "E", img: imgSrc},
        {letter: "F", img: imgSrc}
    ],
    nextStudent: function () {
        let lastStudent = this.student.pop();
        this.student.unshift(lastStudent);
    }
}

renderQue();

function renderQue() {
    $("main> section:first-child").empty();
    for (let i = 0; i < queData.student.length; i++) {
        $("main> section:first-child").append(`<div><img src="${queData.student[i].img}" alt="student"><h4>${queData.student[i].letter}</h4></div>`);
    }
    queData.nextStudent();
}

setInterval(renderQue, 3000);
