//selected dropdown item
$(".dropdown-menu.nav-menu a").on("click", function () {
  $(this).parents("li").find(".selected-item").text($(this).text());
});

//search bar
$(".search-btn").click(function () {
  $(".search-input").toggleClass("active").focus;
  $(".search-input").val("");
});



$(document).ready(function() {
   $(".touchspin").TouchSpin({
     buttondown_class: "btn btn-link text-decoration-none text-dark",
     buttonup_class: "btn btn-link text-decoration-none text-dark",
   });
   $(".modal").on("hidden.bs.modal", function (e) {
     if ($(".modal:visible").length) {
       $("body").addClass("modal-open");
     }
   });

  var inputContainer = document.querySelector(".auth-input-wrapper");
  inputContainer.onkeyup = function (e) {
    var n = e.srcElement,
      a = parseInt(n.attributes.maxlength.value, 10),
      t = n.value.length;
    if (8 === e.keyCode) {
      if (0 === t)
        for (var r = n; (r = r.previousElementSibling) && null != r; )
          if ("input" == r.tagName.toLowerCase()) {
            r.focus();
            break;
          }
    } else if (t >= a)
      for (r = n; (r = r.nextElementSibling) && null != r; )
        if ("input" == r.tagName.toLowerCase()) {
          r.focus();
          break;
        }
  };

    $("input[name='method']").click(function () {
      $("input[name='method']").next().removeClass("active");
      $(this).next().addClass("active");
      if ($(this).next().hasClass("phone-method")) {
        $(".phone-section").removeClass("d-none");
        $(".email-section").addClass("d-none");
      } else {
        $(".phone-section").addClass("d-none");
        $(".email-section").removeClass("d-none");
      }
    });
        
})

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

function show_toast(index, e) {
  $(document).on("click", "i", function (e) {
    e.preventDefault();
  });
  $(`.toast#${index}`).toast("show");
} 

$(function () {
  var nextArrow='<button class="carousel-control-next border-0"> <span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></button>'; 
  var prevArrow = '<button class="carousel-control-prev border-0"> <span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></button>';
  $(".slider4").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: nextArrow,
    prevArrow: prevArrow,
    responsive: responsive_slide(4),
    autoplay: true,
  });
        $(".slider3").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: nextArrow,
          prevArrow: prevArrow,
          responsive: responsive_slide(3),
          autoplay: true,
        });
       $(".slider-for").slick({
         asNavFor: ".slider-nav",
         slidesToShow: 1,
         arrows: false,
       });

       $(".slider-nav").slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         asNavFor: ".slider-for",
         nextArrow: nextArrow,
         prevArrow: prevArrow,
         focusOnSelect: true,
       });
       if (window.matchMedia("(max-width: 768px)").matches) {
         $("#comment").slick({
           slidesToShow: 1,
           dots: true,
         });
       } 
    });
    function responsive_slide(slideNumber){
      return [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: slideNumber-1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ];
    }
    
    const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
      preferredCountries: ["sa"],
      separateDialCode: true,
      autoFormat: true,
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

