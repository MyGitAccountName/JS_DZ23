let foodShopList = [
    {name: "Доширак", number: 5, isBought: true},
    {name: "Сосиски", number: 17, isBought: false},
    {name: "Мороженое", number: 1, isBought: false},
    {name: "Вискарь", number: 2, isBought: true}];

/*function showFoodShopListTmp() {
    console.log(foodShopList.filter(x => !x.isBought).concat(foodShopList.filter(x => x.isBought)));
}*/

function showFoodShopList() {
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
    th.innerHTML = "Продукт";
    document.getElementById("tr1").appendChild(th);
    th = document.createElement('th');
    th.innerHTML = "Количество";
    document.getElementById("tr1").appendChild(th);
    th = document.createElement('th');
    th.innerHTML = "Куплен";
    document.getElementById("tr1").appendChild(th);

    for (let elem of foodShopList) {
        let tr = document.createElement('tr');
        td = document.createElement('td');
        td.innerHTML = elem.name;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = elem.number;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = elem.isBought ? '+' : '-';
        tr.appendChild(td);

        document.getElementById("table1").appendChild(tr);
    }

    for (let i of document.querySelectorAll("tr > *")) i.style.padding="10px";
    document.querySelector('.result').style.display='block';
}

function addProduct(name, number, isBought) {
    foodShopList.find(product => product.name === name) ? foodShopList.find(product => product.name === name).number += number :
        foodShopList.push({name: name, number: number, isBought: isBought});
}

function buyProduct(name) {
    foodShopList.find(product => product.name === name).isBought = true;
}

function delProductByName(name) {
    return foodShopList = foodShopList.filter(x => x.name !== name);
}

function sortFoodShopList() {
    foodShopList = foodShopList.filter(x => !x.isBought).concat(foodShopList.filter(x => x.isBought));
    showFoodShopList();
}