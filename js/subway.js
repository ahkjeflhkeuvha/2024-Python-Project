const itemImg = document.querySelector('.item > img');
const itemName = document.querySelector('.item > p');
const pageName = document.querySelector('.title-container > p');

const titleContainer = document.getElementsByClassName('title-container')[0]
const itemContainer = document.getElementsByClassName('item-container')[0]

function getData() {
    const url = './subway.json';

    fetch(url)
        .then((res) => res.json()) // Call json() here
        .then((data) => showData(data))
        .catch((error) => console.log(error));
}

function showData(data) {
    
    Object.keys(data).forEach((category) => {
        console.log(category); // 카테고리 이름 출력
        data[category].forEach((item) => {
            console.log(item); // 각 아이템 출력
            var data = `<div class="item">
                            <img src="${item["image"]}" alt="">
                            <p>${item["name"]}</p>
                        </div>`

            itemContainer.innerHTML += data
            pageName.textContent = `${category}`; 
        });
    });
}

getData();
