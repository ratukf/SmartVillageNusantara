$(document).ready(function() {
    // Show content1 by default
    $('#content1').removeClass('hidden');

    $('#button1').click(function() {
        $('.content-container > div').addClass('hidden');
        $('#content1').removeClass('hidden');
    });

    // When button2 is clicked, hide content1 and show content2
    $('#button2').click(function() {
        $('.content-container > div').addClass('hidden');
        $('#content2').removeClass('hidden');
    });

    // When button3 is clicked, hide content2 and show content3
    $('#button3').click(function() {
        $('.content-container > div').addClass('hidden');
        $('#content3').removeClass('hidden');
    });

    // When button4 is clicked, hide content3 and show content4
    $('#button4').click(function() {
        $('.content-container > div').addClass('hidden');
        $('#content4').removeClass('hidden');
    });

        // Fungsi untuk menangani perubahan kelas tombol
        function handleButtonClick(clickedButton) {
            // Menghapus kelas 'gray-button' dan menambahkan 'red-button-no-shadow'
            clickedButton.removeClass('gray-button').addClass('red-button-no-shadow');

            // Menangani perubahan kelas pada tombol lainnya
            $('.btn').not(clickedButton).addClass('gray-button').removeClass('red-button-no-shadow');
        }

        // Setiap tombol mendapatkan event click
        $('.btn').click(function() {
            handleButtonClick($(this));
        });

        // Pada saat halaman dimuat, button1 diubah menjadi kelas 'red-button-no-shadow'
        handleButtonClick($('#button1'));
});