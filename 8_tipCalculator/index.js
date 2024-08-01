const form = document.querySelector('.form');

function calculateTip() {
    const billAmount = parseFloat(document.querySelector('#billAmount').value);
    const tipPercentage = parseFloat(document.querySelector('#tipPercentage').value);
    const numberOfPeople = parseFloat(document.querySelector('#numberOfPeople').value);
    const resultcontainer = document.querySelector('.result-container');
    form.addEventListener('submit', function (event) {
        event.preventDefault;
        form.reset();
    })

    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
        alert('input a valid cred');
        return;
    }

    const totalTip = (billAmount * tipPercentage) / 100;
    const totalBill = billAmount + totalTip;
    const tipPerPerson = totalTip / numberOfPeople;
    const totalPerPerson = totalBill / numberOfPeople;


    const arr = [
        { label: 'totalTip:', value: totalTip.toFixed(2) },
        { label: 'totalBill:', value: totalBill.toFixed(2) },
        { label: 'tipPerPerson:', value: tipPerPerson.toFixed(2) },
        { label: 'totalPerPerson:', value: totalPerPerson.toFixed(2) },
    ];
    resultcontainer.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        const p = document.createElement('p');
        p.textContent = `${arr[i].label} $${arr[i].value}`;
        resultcontainer.appendChild(p);
    }
}