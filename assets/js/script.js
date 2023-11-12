$(document).ready(function () {

  //--------------------------------------------//
  //-----------BUTTON layanan.html--------------//
  // Tampilkan konten tombol 1 secara default
  $("#content1").removeClass("hidden");

  $("#button1").click(function () {
    $(".content-container > div").addClass("hidden");
    $("#content1").removeClass("hidden");
  });

  // When button2 is clicked, hide content1 and show content2
  $("#button2").click(function () {
    $(".content-container > div").addClass("hidden");
    $("#content2").removeClass("hidden");
  });

  // When button3 is clicked, hide content2 and show content3
  $("#button3").click(function () {
    $(".content-container > div").addClass("hidden");
    $("#content3").removeClass("hidden");
  });

  // When button4 is clicked, hide content3 and show content4
  $("#button4").click(function () {
    $(".content-container > div").addClass("hidden");
    $("#content4").removeClass("hidden");
  });

  // Fungsi untuk menangani perubahan kelas tombol
  function handleButtonClick(clickedButton) {
    // Menghapus kelas 'gray-button' dan menambahkan 'red-button-no-shadow'
    clickedButton.removeClass("gray-button").addClass("red-button-no-shadow");

    // Menangani perubahan kelas pada tombol lainnya
    $(".btn")
      .not(clickedButton)
      .addClass("gray-button")
      .removeClass("red-button-no-shadow");
  }

  // Setiap tombol mendapatkan event click
  $(".btn").click(function () {
    handleButtonClick($(this));
  });

  // Pada saat halaman dimuat, button1 diubah menjadi kelas 'red-button-no-shadow'
  handleButtonClick($("#button1"));
  //--------------------------------------------//
  //--------------------------------------------//

  //--------------------------------------------//
  //----------FORM coba-layanan.html------------//
  document
    .getElementById("biodata-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Validasi Setiap Input
      var isFormValid = true; // Flag untuk menandakan apakah formulir valid atau tidak
      isFormValid =
        validateInput("nama", /^[a-zA-Z\s']+$/, "name-error-message") &&
        isFormValid;
      isFormValid =
        validateInput("no", /^[0-9+]+$/, "no-error-message") && isFormValid;
      // Lanjutkan dengan validasi input lainnya...

      // Setelah validasi semua input
      if (isFormValid) {
        window.location.href = "../pages/uji-coba-layanan.html";
      }
    });

  function validateInput(inputId, regex, errorMessageId) {
    var input = document.getElementById(inputId);
    var errorMessage = document.getElementById(errorMessageId);

    // Validasi Input yang Diperlukan
    if (!regex.test(input.value.trim())) {
      errorMessage.innerText =
        inputId === "no"
          ? "Input ini hanya berisi angka. Teks tidak diizinkan"
          : "Input ini hanya berisi teks. Angka tidak diizinkan.";
      return false;
    } else {
      errorMessage.innerText = ""; // Hapus pesan kesalahan jika ada
      return true;
    }
  }
  //--------------------------------------------//
  //--------------------------------------------//
});

//--------------------------------------------//
//--------FORM uji-coba-layanan.html----------//
// Menampilkan jumlah karakter textarea pada formulir
document.getElementById("kebutuhan").addEventListener("input", function () {
  var charCount = this.value.length;
  var charLimit = 300;

  document.getElementById("charCount").innerText = charCount + "/" + charLimit;
});

function submitForm() {
  // Validate the form here
  if (validateForm()) {
      // If the form is valid, show the modal
      $('#successModal').modal('show');
  }
}

function validateForm() {
  // Add your form validation logic here
  // For example, check if the required fields are filled
  var isValid = true;

  $('form#uji-coba-layanan-form :input[required]').each(function() {
      if ($(this).val().trim() === '') {
          isValid = false;
          return false; // exit the loop if an empty required field is found
      }
  });

  return isValid;
}

document.getElementById('uji-coba-layanan-form').addEventListener('submit', function (event) {
  // Prevent the form from submitting by default
  event.preventDefault();

  // Validate the form here
  if (validateForm()) {
      // If the form is valid, show the modal
      $('#successModal').modal('show');
  }
});

function validateForm() {
  // Add your form validation logic here
  // For example, check if the required fields are filled
  var isValid = true;

  $('form#uji-coba-layanan-form :input[required]').each(function () {
      if ($(this).val().trim() === '') {
          isValid = false;
          return false; // exit the loop if an empty required field is found
      }
  });

  return isValid;
}


//--------------------------------------------//
//--------------------------------------------//