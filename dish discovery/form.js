let mem = document.querySelector(`#memberprice`);
console.log(mem);
function calculateTotal() {
    const planPrices = {
        starter : 10,
        standard: 20,
        premium: 30
    };

    const selectedPlan = document.getElementById('membershipPlan').value;
    const selectedCurrency = document.getElementById('membershipcurrency').value;
    const conversionRates = {
        usd: 1,
        eur: 0.85,
        gbp: 0.75,
        inr :73.50
    };

    const totalCost = planPrices[selectedPlan] * conversionRates[selectedCurrency];
    document.getElementById('total-cost').innerText = `Total Cost: ${totalCost.toFixed(2)} ${selectedCurrency}`;

}

document.getElementById('membershipForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Registration completed !!');
});