import QRCode from 'qrcodejs';

const vpa = "greatwarrior@upi";
const name = "Great Warrior";
let qrObj: QRCode | null = null;

function getUpiString(amount: number) {
    let str = `upi://pay?pa=${vpa}&pn=${encodeURIComponent(name)}&cu=INR`;
    if (amount && amount > 0) {
        str += `&am=${amount.toFixed(2)}`;
    }
    return str;
}

function refreshQR() {
    const input: HTMLInputElement = document.getElementById('amtInput') as HTMLInputElement;
    const amt = input.value;
    const display: HTMLElement = document.getElementById('valText') as HTMLElement;
    const clearBtn: HTMLButtonElement = document.getElementById('clearBtn') as HTMLButtonElement;

    // Toggle Clear Icon
    clearBtn.style.display = amt.length > 0 ? "block" : "none";

    if (amt && Number(amt) > 0) {
        display.innerHTML = `Paying <span class="highlight">₹${parseFloat(amt).toFixed(2)}</span>`;
    } else {
        display.innerHTML = "";
    }

    if (qrObj) {
        qrObj.makeCode(getUpiString(parseFloat(amt)));
    }
}

window.onload = function () {
    qrObj = new QRCode(document.getElementById("qrcode") as HTMLElement, {
        text: getUpiString(0),
        width: 200,
        height: 200,
        correctLevel: QRCode.CorrectLevel.M
    });

    const input: HTMLInputElement = document.getElementById('amtInput') as HTMLInputElement;
    const clearBtn: HTMLButtonElement = document.getElementById('clearBtn') as HTMLButtonElement;

    // Typing event to show/hide clear icon
    input.addEventListener('input', refreshQR);

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            refreshQR();
            input.blur();
        }
    });

    // Clear button logic
    clearBtn.addEventListener('click', function () {
        input.value = "";
        refreshQR();
        input.focus();
    });

    input.addEventListener('change', refreshQR);
};