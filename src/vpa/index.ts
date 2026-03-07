import * as QRCode from 'qrcode';

const vpa = "greatwarrior@upi";
const name = "Great Warrior";
let initialized = false;
let inputEl: HTMLInputElement | null = null;
let clearBtnEl: HTMLElement | null = null;
let displayEl: HTMLElement | null = null;
let qrContainerEl: HTMLElement | null = null;
let canvasEl: HTMLCanvasElement | null = null;

function getUpiString(amount: number) {
    let str = `upi://pay?pa=${vpa}&pn=${encodeURIComponent(name)}&cu=INR`;
    if (amount && amount > 0) {
        str += `&am=${amount.toFixed(2)}`;
    }
    return str;
}

function ensureCanvas(): HTMLCanvasElement | null {
    if (!qrContainerEl) return null;
    if (!canvasEl) {
        canvasEl = document.createElement('canvas');
        qrContainerEl.innerHTML = "";
        qrContainerEl.appendChild(canvasEl);
    }
    return canvasEl;
}

async function drawQR(amount: number) {
    const canvas = ensureCanvas();
    if (!canvas) return;

    const value = getUpiString(amount > 0 ? amount : 0);

    try {
        await QRCode.toCanvas(canvas, value, {
            width: 200,
            margin: 1,
        });
    } catch {
        // swallow errors to avoid breaking the UI
    }
}

function refreshQR() {
    if (!inputEl || !displayEl || !clearBtnEl) return;

    const amtStr = inputEl.value.trim();

    // Toggle Clear Icon
    clearBtnEl.style.display = amtStr.length > 0 ? "block" : "none";

    const amt = parseFloat(amtStr);

    if (amtStr && !Number.isNaN(amt) && amt > 0) {
        displayEl.innerHTML = `Paying <span class="highlight">₹${amt.toFixed(2)}</span>`;
    } else {
        displayEl.innerHTML = "";
    }

    void drawQR(!Number.isNaN(amt) && amt > 0 ? amt : 0);
}

type InitParams = {
    qrElement: HTMLElement | null;
    input: HTMLInputElement | null;
    clearBtn: HTMLElement | null;
    display: HTMLElement | null;
};

export function initVpa({ qrElement, input, clearBtn, display }: InitParams): () => void {
    if (initialized || !qrElement || !input || !clearBtn || !display) {
        return () => {};
    }

    initialized = true;
    inputEl = input;
    clearBtnEl = clearBtn;
    displayEl = display;
    qrContainerEl = qrElement;

    const handleInput = () => refreshQR();
    const handleKeydown = (e: KeyboardEvent) => {
        const event = e as KeyboardEvent & { keyCode?: number };
        if (event.key === 'Enter' || event.keyCode === 13) {
            refreshQR();
            input.blur();
        }
    };
    const handleClearClick = () => {
        input.value = "";
        refreshQR();
        input.focus();
    };
    const handleChange = () => refreshQR();

    // Typing event to show/hide clear icon
    input.addEventListener('input', handleInput);
    input.addEventListener('keydown', handleKeydown);

    // Clear button logic
    clearBtn.addEventListener('click', handleClearClick);

    input.addEventListener('change', handleChange);

    // Initial state
    refreshQR();

    return () => {
        if (!inputEl || !clearBtnEl) return;

        inputEl.removeEventListener('input', handleInput);
        inputEl.removeEventListener('keydown', handleKeydown);
        inputEl.removeEventListener('change', handleChange);
        clearBtnEl.removeEventListener('click', handleClearClick);

        if (qrContainerEl) {
            qrContainerEl.innerHTML = "";
        }

        inputEl = null;
        clearBtnEl = null;
        displayEl = null;
        qrContainerEl = null;
        canvasEl = null;
        initialized = false;
    };
}