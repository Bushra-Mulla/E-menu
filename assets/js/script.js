//selected dropdown item
$(".dropdown-menu.nav-menu a").on("click", function () {
  $(this).parents("li").find(".selected-item").text($(this).text());
});

//search bar
$(".search-btn").click(function () {
  $(".search-input").toggleClass("active").focus;
  $(".search-input").val("");
});


const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  preferredCountries: ["sa"],
  separateDialCode: true,
  autoFormat: true,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

function show_toast(index,e) { 
$(document).on("click", "i", function (e) {
  e.preventDefault();
});
  $(`.toast#${index}`).toast("show");
} 


function reset_success() {
  Swal.fire({
    icon: "success",
    title: "تم إعادة تعيين كلمة المرور بنجاح",
    cancelButtonText:
      '<a href="#"class="mb-3" data-toggle="modal" data-target="#login">تسجيل دخول</a>',
    showConfirmButton: false,
    showCancelButton: true,
    customClass: {
      cancelButton: "btn btn-link",
    },
    buttonsStyling: false,
  });
}

