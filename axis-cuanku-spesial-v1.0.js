const getApi = (nomor_tujuan) => {
    $(".loader").show();
    $('#list-produk').empty();
    isLoading = true;
    
    // Timer untuk menampilkan pesan peringatan setelah 5 detik
    const warningTimeout = setTimeout(() => {
        if (isLoading) {
            Toast.open('Sedang melakukan pengecekan, harap tunggu sebentar...', 3000, 'info-warning');
        }
    }, 5000); // 5 detik
    
    let param = {
        customer_no: nomor_tujuan,
        apikey: setProduct.apikey,
    };

    $.ajax({
        url: `https://${setProduct.baseApi}/axis-cuanku-spesial/produk`,
        data: param,
        success: (response) => {
            clearTimeout(warningTimeout); // Hapus timer jika respons diterima lebih cepat dari 5 detik
            if (response.result.status === 200 && response.produk) {
                allProducts = response.produk;
                looping(allProducts);
                $('.button-list').hide(); // Sembunyikan seluruh button-list setelah produk muncul
            } else {
                Toast.open('Paket tidak tersedia untuk nomor yang dituju.', 3000, 'info-danger');
            }
            $(".loader").hide();
            isLoading = false;
        },
        error: () => {
            clearTimeout(warningTimeout); // Hapus timer jika terjadi error
            $(".loader").hide();
            $(".product-notfound").show();
            isLoading = false;
        }
    });
};

// Fungsi untuk menyimpan produk yang dipilih oleh pengguna
const selectProduct = (id) => {
    selectedProduct = currentProducts[id]; // Set produk yang dipilih
    Sheet.open(popupDetail(), styleForSheet);

    $(".backdrop").click(() => {
        history.back();
    });

    $("#nomor-tujuan").text($('#user-id').val());
    $("#nama-produk").html(selectedProduct.nama);
    $("#masa-aktif").html(selectedProduct.masa_aktif);
    $("#deskripsi").html(selectedProduct.deskripsi || "Deskripsi tidak tersedia.");
    $("#harga-total").text(selectedProduct.harga);
};

// Fungsi untuk memanggil API order saat tombol "LANJUT" diklik
const orderProduct = () => {
    if (!selectedProduct) {
        Toast.open('Silakan pilih produk terlebih dahulu.', 3000, 'info-warning');
        return;
    }

    // Menampilkan pesan toast untuk memberi tahu pengguna bahwa kode bayar sedang dibuat
    Toast.open('Sedang membuat kode bayar, harap tunggu sebentar...', 3000, 'info-warning');

    let nomor_tujuan = $('#user-id').val();
    let param = {
        customer_no: nomor_tujuan,
        kode: selectedProduct.kode, // Menggunakan kode produk dari produk yang dipilih
        apikey: setProduct.apikey,
    };

    $.ajax({
        url: `https://${setProduct.baseApi}/axis-cuanku-spesial/order`,
        data: param,
        success: (response) => {
            if (response && response.result && response.result.status === 200 && response.data && response.data.kode_bayar) {
                let paymentCode = response.data.kode_bayar;
                window.location.href = `https://${setProduct.olshop}/produk/${setProduct.id_produk}?catatan=${encodeURIComponent(paymentCode)}`;
            } else {
                const errorMessage = response && response.message ? response.message : 'Gagal membuat kode pembayaran. Paket atau promo yang ingin Anda beli mungkin sudah kadaluarsa, atau terjadi kesalahan di sistem kami.';
                Toast.open(errorMessage, 3000, 'info-danger');
            }
        },
        error: () => {
            Toast.open('Server sedang gangguan.', 3000, 'info-danger');
        }
    });
};

const tryClickCategory = () => {
    let nomor_tujuan = $('#user-id').val().trim();

    if (nomor_tujuan.length < 9) {
        Toast.open('Nomor Tujuan minimal harus lebih dari 8 digit !!', 3000, 'info-danger');
        return;
    }

    let isValidPrefix = validPrefixes.some(prefix => nomor_tujuan.startsWith(prefix));

    if (!isValidPrefix) {
        Toast.open('Bukan nomor Tri. Harap periksa kembali.', 3000, 'info-danger');
        return;
    }

    if (isLoading) {
        Toast.open('Tunggu hingga produk selesai dimuat', 3000, 'info-warning');
    } else {
        getApi(nomor_tujuan);
    }
};

const popupDetail = () => `
    <div id="content-produk" class="content-produk">
        <div class="rincian">
            <h6>Rincian</h6>
            <i class="fa-solid fa-caret-down" onclick="history.back()"></i>
        </div>
        <div class="menu-detail">
            <div class="info-detail">
                <p>Nomor Tujuan</p>
                <p class="info-detail-r" id="nomor-tujuan">loading</p>
            </div>
            <div class="info-detail">
                <p>Produk</p>
                <p class="info-detail-r" id="nama-produk">loading</p>
            </div>
        </div>
        <br>
        <div class="deskirpsi-detail">
            <p id="deskripsi">loading</p>
        </div>
        <div class="button-pembelian">
            <p id="harga-total">loading</p>
            <button class="lanjut" onclick="orderProduct()" style="background: ${setProduct.color};">LANJUT</button>
        </div>
    </div>`;

const filterProducts = () => {
    let searchTerm = $('#search').val().toLowerCase();
    if (searchTerm) {
        let filteredProducts = allProducts.filter(product => product.nama.toLowerCase().includes(searchTerm));
        $('#list-produk').empty();
        looping(filteredProducts);
    } else {
        $('#list-produk').empty();
        looping(allProducts);
    }
};

// Check if Toast is already defined
if (typeof Toast === 'undefined') {
    const Toast = {
        open: (message, duration, type) => {
            let toast = $(`<div class="toast ${type}">${message}</div>`);
            $('body').append(toast);
            setTimeout(() => {
                toast.remove();
            }, duration);
        }
    };
}

$(document).ready(() => {
    $(".loader").hide();

    $('#user-id').on('input', function () {
        this.value = formatPhoneNumber(this.value);
        validateInput();
       
        clearProductList();
        $('.button-list').show();
    });

    $('#user-id').on('change', function () {
        this.value = formatPhoneNumber(this.value);
        validateInput();
        clearProductList();
        $('.button-list').show();
    });

    $('#take-contact').click(() => {
        window.location.href = `https://${setProduct.olshop}/ambil_kontak`;
    });

    displayCategoryName();

    $('#search').on('input', filterProducts);

    $('#toggle-button').click(() => {
        const listProduk = $('#list-produk');
        if (listProduk.hasClass('list')) {
            listProduk.removeClass('list').addClass('grid');
        } else {
            listProduk.removeClass('grid').addClass('list');
        }
    });

    $('#cek-produk-button').click(() => {
        tryClickCategory();
    });
});

function clearProductList() {
    $('#list-produk').empty();
    $(".product-notfound").hide();
}

function formatPhoneNumber(value) {
    value = value.replace(/[^0-9]/g, '');

    if (value.startsWith('62')) {
        value = '0' + value.slice(2); // Mengubah awalan "62" menjadi "0"
    }

    return value;
}

function validateInput() {
    const userid = $('#user-id').val();
    if (userid && userid.length >= 9) {
        $(".lanjut").css('background', setProduct.color);
    } else {
        $(".lanjut").css('background', '#EEE');
    }
}
console.log("This script is made by qiosdevelopment");