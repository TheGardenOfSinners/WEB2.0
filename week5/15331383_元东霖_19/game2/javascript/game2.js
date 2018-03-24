var flag1 = 0;//show the game if it is being played
var showCondition = "Game Over";//the game condition
var flag2 = 1;
var score = 0;//score
var Time = 0;//time
var t;
window.onload = function () {
    showConditionOnUI(showCondition);
    mainControl();

    
}

function mainControl() {//主按钮
    var ele = document.getElementById("control-button");
    var cN = ele.id;
    ele.onmousedown = function () {
        ele.id = "turn-blue";
    }
    ele.onmouseup = function () {
        ele.id = cN;
    }
    ele.onclick = function () {
        if (flag1 == 0) {
            showScore();
            startGame();
        }
        else {
            endGame();
        }
    }
}

function getRamdomNum() {//生成随机数
    var a = Math.floor(Math.random() * 60 + 1);
    return a;
}

function showConditionOnUI(context) {//显示状态
    var ele = document.getElementById("condition");
    ele.textContent = context;
    showCondition = context;
}

function showScore() {//显示分数
    var ele = document.getElementById("scoreOutput");
    ele.textContent = score;
}

function showTime() {//显示时间
    var ele = document.getElementById("timeOutput");
    ele.textContent = Time;
}

function endGame() {//游戏结束
    clearInterval(t);
    flag1 = 0;
    showScore();
    showConditionOnUI("Game Over");
    for (var i = 1; i <= 60; i++) {
        var Name = "b" + i;
        var ele = document.getElementsByName(Name)[0];
        ele.id = "";
    }
    Time = 0;
    showTime();
    alert("Game Over!!\nYour Score: " + score);
}

function Clock() {//计时器
    Time--;
    showTime();
    if (Time > 0) {
        t = setTimeout("Clock()", 1000);
    } else {
        endGame();
    }
}

function startGame() {//游戏开始
    flag1 = 1;
    Time = 31;
    score = 0;
    showScore();
    showConditionOnUI("Playing");
    clickHole();
    giveHole();
    Clock();
    
}

function clickHole() {//点击洞时
    if (flag1 == 1) {
        for (var i = 1; i <= 60; i++) {
            var Name = "b" + i;
            var ele = document.getElementsByName(Name)[0];
            ele.onclick = function () {
                score--;
                showScore();
            }
        }
    }
    
}

function giveHole() {//随机生成地鼠
    if (flag1 == 1) {
        clickHole();
        var Name = "b" + getRamdomNum();
        var ele = document.getElementsByName(Name)[0];
        var Id = ele.id;
        ele.id = "the-blue-one";
        ele.onclick = function () {
            score++;
            showScore();
            ele.id = Id;
            giveHole();
        }
    }
}