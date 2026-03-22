// alert.js

function showToast(message, type = 'info') {
    // 1. Cek dan suntikkan CSS jika belum ada
    if (!document.getElementById('toast-style')) {
        const style = document.createElement('style');
        style.id = 'toast-style';
        style.innerHTML = `
            .custom-toast {
                position: fixed;
                top: 30px;
                left: 50%;
                transform: translateX(-50%);
                
                /* Layout Balon & Flexbox untuk Icon + Text */
                width: calc(100% - 40px);
                max-width: 400px;
                box-sizing: border-box;
                display: flex;
                align-items: center; /* Sejajar tengah secara vertikal */
                gap: 12px; /* Jarak antara ikon dan teks */
                
                background: #ffffff;
                color: #1f2937;
                padding: 16px 20px;
                border-radius: 16px;
                font-size: 0.85rem;
                font-weight: 500;
                text-align: left;
                font-family: 'Poppins', sans-serif;
                line-height: 1.4;
                
                z-index: 99999;
                box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                pointer-events: none;
                opacity: 0;
                margin-top: -20px;
            }
            .custom-toast.show {
                opacity: 1;
                margin-top: 0;
            }
            
            /* Pengaturan Ikon */
            .toast-icon {
                flex-shrink: 0;
                width: 24px;
                height: 24px;
            }
            
            /* Warna Berdasarkan Tipe */
            .toast-success .toast-icon { color: #10b981; } /* Hijau */
            .toast-error .toast-icon { color: #ef4444; }   /* Merah */
            .toast-warning .toast-icon { color: #f59e0b; } /* Kuning/Orange */
            .toast-info .toast-icon { color: #3b82f6; }    /* Biru */
        `;
        document.head.appendChild(style);
    }

    // 2. Hapus toast lama jika ada
    const exist = document.getElementById('custom-toast');
    if (exist) exist.remove();

    // 3. Tentukan SVG Ikon berdasarkan 'type'
    let iconSvg = '';
    switch(type) {
        case 'success':
            iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
            break;
        case 'error':
            iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
            break;
        case 'warning':
            iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
            break;
        default: // 'info'
            iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    // 4. Buat elemen toast
    const toast = document.createElement('div');
    toast.id = 'custom-toast';
    toast.className = `custom-toast toast-${type}`;
    
    // Gabungkan Ikon dan Teks
    toast.innerHTML = `${iconSvg} <span>${message}</span>`;

    document.body.appendChild(toast);

    // 5. Animasi Muncul
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // 6. Animasi Hilang
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500); // Waktu tampil saya perpanjang sedikit jadi 2.5 detik agar nyaman dibaca
}
