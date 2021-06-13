let auditoriumList = [
    {name: "307", seatsNum: 20, faculty:"Web"},
    {name: "308", seatsNum: 18, faculty:"3D"},
    {name: "211", seatsNum: 12, faculty:"3D"},
    {name: "415", seatsNum: 10, faculty:"Web"},
    {name: "222", seatsNum: 18, faculty:"Web"},
]

function addAuditorium(auditoriumList, name, seatsNum, faculty) {
    auditoriumList.find(x => x.name === name) ? alert("Аудитория с таким именем уже в списке!") :
        auditoriumList.push({name: name, seatsNum: seatsNum, faculty: faculty});
}

function delByName(name) {
    return auditoriumList = auditoriumList.filter(x => x.name !== name);
}

/*function showAuditoriumList(auditoriumList) {
    console.log(auditoriumList);
}*/

function showAuditoriumList(auditoriumList) {
    clearResult();
    let th='';
    let td='';

    const table = document.createElement('table');
    table.setAttribute("id", "table1");
    table.setAttribute('border','1');
    document.querySelector('.result').appendChild(table);

    const tr = document.createElement('tr');
    tr.setAttribute("id", "tr1");
    document.getElementById("table1").appendChild(tr);

    th = document.createElement('th');
    th.innerHTML = "Название";
    document.getElementById("tr1").appendChild(th);
    th = document.createElement('th');
    th.innerHTML = "Количество мест";
    document.getElementById("tr1").appendChild(th);
    th = document.createElement('th');
    th.innerHTML = "Факультет";
    document.getElementById("tr1").appendChild(th);

    for (let elem of auditoriumList) {
        let tr = document.createElement('tr');
        td = document.createElement('td');
        td.innerHTML = elem.name;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = elem.seatsNum;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = elem.faculty;
        tr.appendChild(td);

        document.getElementById("table1").appendChild(tr);
    }
    for (let i of document.querySelectorAll("tr > *")) i.style.padding="10px";
    document.querySelector('.result').style.display='block';
}

function showFacultyAuditoriums(faculty) {
    showAuditoriumList(auditoriumList.filter(x => x.faculty === faculty));
}

function selectAuditorium(auditoriumList, group) {
    showAuditoriumList(auditoriumList.filter(x => (x.seatsNum >= group.studentsNum) && (x.faculty === group.faculty)));
}

function sortBySeatsNumber(auditoriumList) {
    auditoriumList.sort(function (x, y) {
        return x.seatsNum - y.seatsNum;
    });
    showAuditoriumList(auditoriumList);
}

function sortByName(auditoriumList) {
    auditoriumList.sort(function (x, y) {
        if (x.name > y.name) {
            return 1;
        }
        if (x.name < y.name) {
            return -1;
        }
        return 0;
    });
    showAuditoriumList(auditoriumList);
}