const URL_REQUEST = "./json/data.json";
const barClass = document.querySelector('.bar');
const barWrapper = document.querySelector('.bar-wrapper');
const dayWrapper = document.querySelector('.day-wrapper');
const statsTotal = document.querySelector('.stats-total-span')
let totalAmount = 0;
const currentDay = new Date().toLocaleString('en-us', { weekday: 'short' }).toLowerCase();

async function fetchResponse() {
    fetch(URL_REQUEST)
        .then(function (response) {
            return response.text();
        })
        .then(function (processedResponse) {
            const responseFetched = JSON.parse(processedResponse);
            createChart(responseFetched);
        })
        .catch(function (error) {
            console.log(error)
        });
}

// Get total amount so later each bar heigh can be estimated as real percentaje of that amount.
function getTotal(responseFetched) {
    for (let i = 0; i < responseFetched.length; i++) {
        totalAmount += responseFetched[i].amount;
    }
}
function createBar(dayItem) {
    let bar = document.createElement('div');
    let barLabel = document.createElement('span');
    barLabel.classList.add('bar-span');
    barLabel.innerText = `${dayItem.amount}$`;
    bar.appendChild(barLabel);
    bar.classList.add('bar');
    if (dayItem.day === currentDay) {
        bar.classList.add('bar-current-day');
    }

    bar.style.height = `${(dayItem.amount / 100) * totalAmount}px`;

    // Display label.
    bar.addEventListener('mouseover', function () {
        barLabel.classList.add('bar-span-active');
    })
    bar.addEventListener('mouseout', function () {
        barLabel.classList.remove('bar-span-active');
    })

    barWrapper.appendChild(bar);
}

function createDay(dayItem) {
    let day = document.createElement('div');
    day.classList.add('day');
    day.innerText = dayItem.day;
    dayWrapper.appendChild(day);
}

function createChart(responseFetched) {
    getTotal(responseFetched);
    for (let i = 0; i < responseFetched.length; i++) {
        createBar(responseFetched[i]);
        createDay(responseFetched[i]);
    }
    statsTotal.innerText = `${totalAmount}$`;
}

fetchResponse();