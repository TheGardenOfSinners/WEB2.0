var flag1 = 0;//判断游戏是否开始
var flag2 = 0;//判断有没有作弊
var Content = "";
window.onload = function () {
    showit("");
    Start();
    End();

}

function inConditor(){
    var Element = document.getElementById("maze-conditor");
    Element.onmouseover = function () {
        flag2 = 1;
    }
    Element.onmouseout = function () {
        flag2 = 0;
    }
}

function showit(content) {
    Content = content;
    var Element = document.getElementById("game-condition");
    Element.textContent = Content;
}

function onWall() {
    var Element1 = document.getElementById("left");
    var classname = Element1.className;
    Element1.onmouseover = function () {
        if (flag1 == 1) {
            Element1.className = 'turn-red';
            showit("YOU LOST!");
            flag1 = 0;
        }
    }
    Element1.onmouseout = function () {
        Element1.className = classname;
    }
    var Element2 = document.getElementById("right");
    var classname = Element2.className;
    Element2.onmouseover = function () {
        if (flag1 == 1) {
            Element2.className = 'turn-red';
            showit("YOU LOST!");
            flag1 = 0;
        }
    }
    Element2.onmouseout = function () {
        Element2.className = classname;
    }
    var Element3 = document.getElementById("middle");
    var classname = Element3.className;
    Element3.onmouseover = function () {
        if (flag1 == 1) {
            Element3.className = 'turn-red';
            showit("YOU LOST!");
            flag1 = 0;
        }
    }
    Element3.onmouseout = function () {
        Element3.className = classname;
    }
    var Element4 = document.getElementById("bottom");
    var classname = Element4.className;
    Element4.onmouseover = function () {
        if (flag1 == 1) {
            Element4.className = 'turn-red';
            showit("YOU LOST!");
            flag1 = 0;
        }
    }
    Element4.onmouseout = function () {
        Element4.className = classname;
    }
    var Element5 = document.getElementById("head");
    var classname = Element5.className;
    Element5.onmouseover = function () {
        if (flag1 == 1) {
            Element5.className = 'turn-red';
            showit("YOU LOST!");
            flag1 = 0;
        }
    }
    Element5.onmouseout = function () {
        Element5.className = classname;
    }
}

function Start() {
    var Element = document.getElementById("start");
    Element.onmouseover = function () {
        showit("");
        flag1 = 1;
        flag2 = 1;
    }
    Element.onmouseout = function () {
        onWall();
        flag2 = 0;
        var Element1 = document.getElementById("maze-conditor");
        Element1.onmouseover = function () {
            flag2 = 1;
        }
    }
}

function End() {
    var Element = document.getElementById("end");
    Element.onmouseover = function () {
        
        if (flag1 == 1 && flag2 == 0) {
            showit("Don't cheat, you should start form the 'S' and move to the 'E' inside the maze!");
        }
        else if (flag1 == 1 && flag2 == 1) {
            showit("YOU WIN!");
        }
    }
    Element.onmouseout = function () {
        flag1 = 0;
    }
}