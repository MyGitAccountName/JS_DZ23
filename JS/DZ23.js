let i = 0;
let functionNumber = 0;

// Показать список заданий
function showTaskList() {
    clearResult();
    document.getElementById('task').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('taskList').style.display = 'block';
    for (i = 1; i < 7; i++) {
        document.querySelector("#task input[type='text']:nth-of-type(" + i + ")").value = '';
    }
    document.querySelector("#inputs p:nth-of-type(1)").style.display = 'none';
    document.querySelector("#inputs").style.display = 'none';
}

// Отображение полей ввода данных
function enterParameters(...texts) {
 // document.getElementById('condition').innerText = condition;
    for (i = 0; i < texts.length; i++) {
        document.querySelector("#inputs h3:nth-of-type(" + (i + 1) + ")").innerHTML = texts[i];
        document.querySelector("#inputs h3:nth-of-type(" + (i + 1) + ")").style.display = 'block';
        document.querySelector("#inputs input[type='text']:nth-of-type(" + (i + 1) + ")").style.display = 'block';
    }
    for (i = texts.length; i < 6; i++) {
        document.querySelector("#inputs h3:nth-of-type(" + (i + 1) + ")").style.display = 'none';
        document.querySelector("#inputs input[type='text']:nth-of-type(" + (i + 1) + ")").style.display = 'none';
    }
    document.getElementById('task').style.display = 'block';
    document.getElementById('inputs').style.display = 'block';
}

// Выбор заголовков для ввода данных
function setParameters(n) {
    functionNumber = n;
    document.getElementById("taskList").style.display = 'none';
    document.querySelector("#inputs p:nth-of-type(1)").style.display = 'none';
    switch (n) {
        case 1: {
            enterParameters("Продукт:", "Количество:");
            document.querySelector('.cb').style.display='block';
            break;
        }
        case 2: {
            enterParameters("Название покупаемого продукта:");
            break;
        }
        case 3: {
            enterParameters("Название удаляемого продукта:");
            break;
        }
        case 4: {
            enterParameters("Текст:", "color:", "font-size:", "text-align:", "text-decoration:", "font-style:");
            break;
        }
        case 5: {
            enterParameters("Факультет:");
            break;
        }
        case 6: {
            enterParameters("Название группы:", "Количество студентов:", "Факультет:");
            break;
        }
        case 7: {
            enterParameters("Название:", "Количество мест:", "Факультет:");
            break;
        }
        case 8: {
            enterParameters("Название удаляемой аудитории:");
            break;
        }
    }
}

function chooseTask(taskNumber, taskName) {
    document.getElementById('condition').innerText = taskName;

    switch (taskNumber) {
        case 1: {
            showFoodShopList();
            document.getElementById('cheque').style.display = "none";
            document.getElementById('subJob4').style.display = "none";
            document.getElementById('subJob1').style.display = "block";
            break;
        }
        case 2: {
            showCheque(cheque);
            debugger
            document.getElementById('subJob1').style.display = "none";
            document.getElementById('subJob4').style.display = "none";
            document.getElementById('cheque').style.display = "block";
            break;
        }
        case 3: {
            document.getElementById('subJob1').style.display = "none";
            document.getElementById('cheque').style.display = "none";
            document.getElementById('subJob4').style.display = "none";
            setParameters(4);
            break;
        }
        case 4: {
            showAuditoriumList(auditoriumList);
            document.getElementById('subJob1').style.display = "none";
            document.getElementById('cheque').style.display = "none";
            document.getElementById('subJob4').style.display = "block";
            break;
        }
    }
    document.getElementById('taskList').style.display = 'none';
    document.getElementById('task').style.display = 'block';
}

function clearResult() {
    let a = document.querySelector('.result p');
    if (a) a.remove();
    let b = document.querySelector('.result table');
    if (b) b.remove();
}

function showText(text, style) {
    clearResult();

    const pTask3 = document.createElement('p');
    pTask3.style.color = style.find(x => x.name === "color").value;
    pTask3.style.fontSize = style.find(x => x.name === "font-size").value;
    pTask3.style.textAlign = style.find(x => x.name === "text-align").value;
    pTask3.style.textDecoration = style.find(x => x.name === "text-decoration").value;
    pTask3.style.fontStyle = style.find(x => x.name === "font-style").value;

    pTask3.innerHTML = text;
    document.querySelector('.result').appendChild(pTask3);
    document.querySelector('.result').style.display='block';
}

// Получение значения указанного параметра
function getParameter(i) {
    return document.querySelector("#task input[type='text']:nth-of-type(" + (i) + ")").value;
}

// Выполнение выбранного задания
function doChosen() {
    switch (functionNumber) {
        case 1: {
            addProduct(getParameter(1), +getParameter(2), document.getElementById('cb1').checked);
            showFoodShopList();
            break;
        }
        case 2: {
            buyProduct(getParameter(1));
            showFoodShopList();
            break;
        }
        case 3: {
            delProductByName(getParameter(1));
            showFoodShopList();
            break;
        }
        case 4: {
            let tmpStyle = [
                {name: "color", value: getParameter(2)},
                {name: "font-size", value: getParameter(3)},
                {name: "text-align", value: getParameter(4)},
                {name: "text-decoration", value: getParameter(5)},
                {name: "font-style", value: getParameter(6)}
            ]
            showText(getParameter(1), tmpStyle);
            break;
        }
        case 5: {
            showFacultyAuditoriums(getParameter(1));
            break;
        }
        case 6: {
            let group = {name:getParameter(1), studentsNum:getParameter(2), faculty:getParameter(3)};
            selectAuditorium(auditoriumList, group);
            break;
        }
        case 7: {
            addAuditorium(auditoriumList, getParameter(1), +getParameter(2), getParameter(3));
            showAuditoriumList(auditoriumList);
            break;
        }
        case 8: {
            delByName(getParameter(1));
            showAuditoriumList(auditoriumList);
            break;
        }
    }
}