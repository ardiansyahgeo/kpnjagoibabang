document.addEventListener("DOMContentLoaded", function() {
    // Simulasikan waktu loading dengan menggunakan setTimeout
    setTimeout(function() {
        // Sembunyikan loader setelah halaman selesai dimuat
        document.querySelector(".loader-wrapper").style.display = "none";
        
        // Tampilkan konten halaman
        document.querySelector(".content").style.display = "block";
    }, 0); // Ganti nilai 3000 dengan waktu loading yang diinginkan dalam milidetik
});