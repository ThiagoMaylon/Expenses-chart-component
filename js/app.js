const containerGrafic = document.querySelector('.container-graphic');

const data = fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(e => console.log(e))

data.then(data => {
    data.forEach(item => {
        let chart = document.createElement('div');
        chart.classList.add('chart');
        const height = item.amount / 7;
        let value = "";
        
        if(item.day == "wed"){
            value=`<div class="chart-value active" style="--height: ${height}em"><div class="amount">${item.amount}</div></div>`
        }else{
            value=`<div class="chart-value" style="--height: ${height}em"><div class="amount">${item.amount}</div></div>`
        }

        chart.innerHTML = `
            <div class="chart-wrapper">
            ${value}
            </div>
            <div class="chart-title">${item.day}</div>
        `;
        containerGrafic.appendChild(chart);
    });
})

