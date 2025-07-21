var URL = 'https://api.marketstack.com'

var ApiKey = '719424b2bf8766adedf63f71b7c0c0b6'
var symbols = 'AAPL'

async function UserAuth() {
    fetch(`${URL}/v2/eod?access_key=${ApiKey}&symbols=${symbols}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`API responded with ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let actitivity_card_element = document.getElementById("activity_card")
        actitivity_card_element.classList.add("show")
        actitivity_card_element.classList.remove("hide")

        let actitivity_element = document.getElementById("activity_display")
        actitivity_element.innerHTML = data.activity
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

async function RealTickerSearch(activityType) {
    fetch(`${URL}/activity?type=${activityType}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`API responded with ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let actitivity_card_element = document.getElementById("activity_card")
        actitivity_card_element.classList.add("show")
        actitivity_card_element.classList.remove("hide")
        
        let actitivity_element = document.getElementById("activity_display")
        actitivity_element.innerHTML = data.activity
    })
    .catch(error => {
        console.error('Error:', error);
    });
}