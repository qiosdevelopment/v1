// Pastikan CSS hanya disuntikkan satu kali
let isToastCssInjected = false;

/**
 * Menampilkan notifikasi toast.
 * @param {string} message - Pesan yang ingin ditampilkan.
 * @param {string} [type='info'] - Tipe notifikasi ('success', 'error', 'info', 'warning').
 * @param {number} [duration=5000] - Durasi notifikasi dalam milidetik.
 */
function showToast(message, type = 'info', duration = 5000) {
    if (!isToastCssInjected) {
        injectToastCSS();
        isToastCssInjected = true;
    }

    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
        success: 'fa-solid fa-circle-check',
        error: 'fa-solid fa-circle-xmark',
        info: 'fa-solid fa-circle-info',
        warning: 'fa-solid fa-triangle-exclamation'
    };
    const iconClass = icons[type] || icons.info;

    toast.innerHTML = `
        <div class="toast-icon-wrapper">
            <i class="${iconClass}"></i>
        </div>
        <div class="toast-content">
            <p class="toast-message">${message}</p>
        </div>
    `;
    
    // appendChild akan menempatkan toast baru di atas secara z-index
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => toast.remove());
    }, duration);
}

/**
 * Fungsi internal untuk menyuntikkan semua CSS yang dibutuhkan.
 */
function injectToastCSS() {
    const css = `
        /* DIKEMBALIKAN: Reset CSS */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* DIKEMBALIKAN: Posisi tengah atas */
        #toast-container {
            position: fixed;
            top: 20px;
            left: 50%;
            width: 350px;
            margin-left: -175px;
            z-index: 9999;
            pointer-events: none;
        }

        /* DIKEMBALIKAN: Toast diposisikan absolut agar menumpuk */
        .toast {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 16px;
            background-color: var(--card-bg-color, #ffffff);
            border-radius: 12px;
            border: 1px solid var(--border-color, #e0e0e0);
            transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            font-family: 'Poppins', sans-serif;
            pointer-events: auto;

            /* DIKEMBALIKAN: Animasi dari atas */
            opacity: 0;
            transform: translateY(-30px);
        }
        .toast.show {
            opacity: 1;
            transform: translateY(0);
        }
        .toast-icon-wrapper {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        .toast-icon-wrapper i {
            color: var(--white-color, #ffffff);
            font-size: 1.2rem;
        }
        .toast-content {
            flex-grow: 1;
        }
        .toast-message {
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--text-color, #4f4f4f);
            line-height: 1.5;
            word-break: break-word;
        }
        .toast.success .toast-icon-wrapper { background-color: var(--green-color, #28a745); }
        .toast.error .toast-icon-wrapper { background-color: var(--red-color, #dc3545); }
        .toast.info .toast-icon-wrapper { background-color: var(--primary-color, #185e80); }
        .toast.warning .toast-icon-wrapper { background-color: var(--warning-color, #f8bb06); }
    `;
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.innerHTML = css;
    document.head.appendChild(style);
}
