// history-on
document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('history').classList.remove('hidden');
    document.getElementById('donation').classList.add('hidden');

});
// donation-on
document.getElementById('donation-btn').addEventListener('click', function () {
    document.getElementById('history').classList.add('hidden');
    document.getElementById('donation').classList.remove('hidden');

});


//donation-function-fenny
// document.getElementById('donation-noakhali').addEventListener('click', function () {
//     const noakhaliDonationInput = parseFloat(document.getElementById('donation-noakhali-amount').value);
//     const totalDonationAmount = parseFloat(document.getElementById('total-donation-amount').innerText);
//     if (!isNaN(noakhaliDonationInput) && noakhaliDonationInput <= totalDonationAmount) {

//         const leftMoney = totalDonationAmount - noakhaliDonationInput;
//         document.getElementById('total-donation-amount').innerText = leftMoney;

//         const noakhaliDonation = parseFloat(document.getElementById('noakhali-total-donation').innerText);
//         const totalDonation = noakhaliDonationInput + noakhaliDonation;
//         document.getElementById('noakhali-total-donation').innerText = totalDonation;

//         //popup//no add function
//         document.getElementById('donation-noakhali').onclick = function () {
//             document.getElementById('popup').classList.remove('hidden');
//         }

//         window.onclick = function (event) {
//             const popup = document.getElementById('popup');
//             if (event.target === popup) {
//                 popup.classList.add('hidden');
//             }
//         }

//         document.getElementById('popup-close').addEventListener('click', function () {
//             document.getElementById('popup').classList.add('block');
//         });
//         //popup//no add functionEnds

//         //apned notification

//         const historyNotifyDiv = document.createElement('div');
//         historyNotifyDiv.className = 'rounded-lg border py-3 w-[80%] m-auto mt-2 px-5';

//         const titleElement = document.createElement('h2');
//         titleElement.className = 'text-xl font-semibold pb-2';
//         titleElement.innerText = `${noakhaliDonationInput} Taka is Donated for Noakhali, Bangladesh`;

//         const dateDisplay = document.createElement('p');
//         dateDisplay.id = 'dateDisplay';


//         //current date/
//         const date = new Date();
//         const options = {
//             weekday: 'short',
//             year: 'numeric',
//             month: 'short',
//             day: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit',
//             second: '2-digit',
//             timeZone: 'Asia/Dhaka',
//             timeZoneName: 'short'
//         };

//         // date 
//         dateDisplay.innerText = 'Date: ' + date.toLocaleString('en-US', options) + ' (Bangladesh Standard Time)';

//         historyNotifyDiv.appendChild(titleElement);
//         historyNotifyDiv.appendChild(dateDisplay);
//         document.getElementById('history').appendChild(historyNotifyDiv);

//         //apend-notifyDone
//         document.getElementById('popup').classList.remove('hidden');

//         document.getElementById('popup-close').addEventListener('click', function () {
//             document.getElementById('popup').classList.add('hidden');
//         });

//         window.onclick = function (event) {
//             const popup = document.getElementById('popup');
//             if (event.target === popup) {
//                 popup.classList.add('hidden');
//             }
//         }


//     } else {
//         return alert('Please Input Valid Amount');
//     }
// });
////////////////////////////////////////////////////////////////////////////////////////////////////

function calCaulation(donationBtnName, donationAmountValue, placeDonationAmount, palceNametext) {
    const donationInputField = document.getElementById(donationAmountValue);
    const donationInputField2 = donationInputField.value;
    const donationInput = parseFloat(donationInputField2);
    const totalDonationAmount = parseFloat(document.getElementById('total-donation-amount').innerText);

    if (!isNaN(donationInputField2) && donationInput <= totalDonationAmount && donationInput > 0) {
        const leftMoney = totalDonationAmount - donationInput;
        document.getElementById('total-donation-amount').innerText = leftMoney;

        const noakhaliDonation = parseFloat(document.getElementById(placeDonationAmount).innerText);
        const totalDonation = donationInput + noakhaliDonation;
        document.getElementById(placeDonationAmount).innerText = totalDonation;
        donationInputField.value = '';
        // Append notification
        const historyNotifyDiv = document.createElement('div');
        historyNotifyDiv.className = 'rounded-lg border py-3 w-[80%] m-auto mt-2 px-5';

        const titleElement = document.createElement('h2');
        titleElement.className = 'text-xl font-semibold pb-2';
        titleElement.innerText = `${donationInput} Taka is Donated for ${palceNametext}, Bangladesh`;

        const dateDisplay = document.createElement('p');
        dateDisplay.id = 'dateDisplay';

        // current date
        const date = Date();
     
        dateDisplay.innerText = date;

        historyNotifyDiv.appendChild(titleElement);
        historyNotifyDiv.appendChild(dateDisplay);
        document.getElementById('history').appendChild(historyNotifyDiv);

        // Show popup
        document.getElementById('popup').classList.remove('hidden');

    } else {
        alert('Please Input a Valid Amount & Write Amount Below Balance');
    }
}

// popup 
document.getElementById('popup-close').addEventListener('click', function () {
    document.getElementById('popup').classList.add('hidden');
});

// window.onclick = function (event) {
//     const popup = document.getElementById('popup');
//     if (event.target === popup) {
//         popup.classList.add('hidden');
//     }
// };


document.querySelectorAll('.donation-button').forEach(function (button) {
    button.addEventListener('click', function (event) {
        const buttonId = event.target.id;

        if (buttonId === 'noakhali-btn') {
            calCaulation('noakhali-btn', 'noakhali-input', 'noakhali-balance', 'Noakhali');
        } else if (buttonId === 'feni-btn') {
            calCaulation('feni-btn', 'feni-input', 'feni-balance', 'Feni');
        } else if (buttonId === 'injured-btn') {
            calCaulation('injured-btn', 'injured-input', 'injured-balance', 'Quota');
        }
    });
});


