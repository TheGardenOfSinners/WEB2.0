var allArea = {//����ȫ�ֱ���
    array: [],//the box
    flag1: 0,//show if the game is on
    flag2: 0,//�Ƿ�������
    step: 0,//���֣���¼����
    cButton: "",//��ť
    inside: "",//��ť������
}

window.onload = function () {//����
    loadElement();
    activateControlButton();
}

function showStep() {//��ʾ����
    var ele = document.getElementById("step");
    ele.textContent = allArea.step;
}

function getRamdomNum(MAX) {//��������ΪMAX�������
    var a = Math.floor(Math.random() * MAX + 1);
    return a;
}

function isReset() {//����Ƿ�ԭ
    var num;
    for (num = 0; num <= 15; num++) {
        var pos = (allArea.array[num].row - 1) * 4 + allArea.array[num].col - 1;
        if (pos != num) return false;
    }
    return true;
}

function reSet() {//��ԭ
    var num;
    for (num = 0; num < 16; num++) {
        if (num < 4) allArea.array[num].row = 1;
        else if (num < 8) allArea.array[num].row = 2;
        else if (num < 12) allArea.array[num].row = 3;
        else allArea.array[num].row = 4;
        allArea.array[num].col = (num % 4) + 1;
        reFlash(allArea.array[num]);
    }
}

function mixBox() {//��������
    var count = 200;
    while (count != 0) {
        var num = getRamdomNum(15);
        if (isBeside(allArea.array[num])) {
            moveBox(allArea.array[num]);
            count--;
        }
    }
}

function isBeside(ele) {//���Ԫ���Ա��Ƿ�Ϊ��
    if (ele.col == allArea.array[15].col) {
        if (ele.row == allArea.array[15].row - 1 || ele.row == allArea.array[15].row + 1) return true;
        else return false;
    }
    else if (ele.row == allArea.array[15].row) {
        if (ele.col == allArea.array[15].col - 1 || ele.col == allArea.array[15].col + 1) return true;
        else return false;
    }
    else return false;
}

function reFlash(ele) {//�ƶ�λ��
    ele.className = "square r" + ele.row + " c" + ele.col;
}

function moveBox(ele) {//���ʱ���õ��ƶ�����
    if (allArea.flag1 == 1 && isBeside(ele)) {
        var val;
        val = ele.col;
        ele.col = allArea.array[15].col;
        allArea.array[15].col = val;
        val = ele.row;
        ele.row = allArea.array[15].row;
        allArea.array[15].row = val;
        reFlash(ele);
        reFlash(allArea.array[15]);
        if (allArea.flag2 == 1) allArea.step++;
        showStep();
        if (isReset() && allArea.flag2 == 1) {
            alert("Success\nUsing step:" + allArea.step);
            allArea.flag1 = 0;
            allArea.flag2 = 0;
            allArea.cButton.textContent = allArea.inside;
        }
    }
}

function loadElement() {//����Ԫ��
    allArea.array[15] = {
        condition: "empty",
        col: 4,
        row: 4,
        Num: 16,
    };
    var num;
    for (num = 0; num < 15; num++) {
        allArea.array[num] = document.getElementById("s" + (num + 1));
        allArea.array[num].Num = num + 1;
        if (num < 4) allArea.array[num].row = 1;
        else if (num < 8) allArea.array[num].row = 2;
        else if (num < 12) allArea.array[num].row = 3;
        else allArea.array[num].row = 4;
        allArea.array[num].col = (num % 4) + 1;
        allArea.array[num].onclick = function () {
            moveBox(this);
        }
    }
    showStep();
}

function activateControlButton() {//���ť
    allArea.cButton = document.getElementById("ControlButton");
    allArea.inside = allArea.cButton.textContent;
    allArea.cButton.onclick = function () {
        if (allArea.flag1 == 0) {
            allArea.flag1 = 1;
            allArea.cButton.textContent = "RESET";
            mixBox();
            allArea.step = 0;
            allArea.flag2 = 1;
            showStep();
        } else {
            allArea.flag1 = 0;
            reSet();
            allArea.flag2 = 0;
            allArea.cButton.textContent = allArea.inside;
            allArea.step = 0;
            showStep();
        }
    }
}