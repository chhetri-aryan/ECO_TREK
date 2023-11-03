$(document).ready(function () {


  $("#mh2").mouseenter(function () {
    $("#save").addClass("ani");
  });

  $("#mh2").mouseleave(function () {
    $("#save").removeClass("ani");
  });



  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
      else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  //Email validation
  $("#liveToastBtn").click(function () {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mail = $("#email").val();
    var txt = $("#textarea").val();

    if (mail.match(validRegex) && txt != "") {

      //alert(mail);

      const toastTrigger = document.getElementById('liveToastBtn')
      const toastLiveExample = document.getElementById('liveToast')
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastBootstrap.show()

      setTimeout(function () {

        $("#email").val("");
        $("#textarea").val("");
      }, 2000);


    }

    if (!mail.match(validRegex)) {
      $("#email-id").removeClass("d-none")
      setTimeout(function () {
        $("#email-id").addClass("d-none");

      }, 3000);

    }

    if (txt === "") {
      $("#query-text").removeClass("d-none")
      setTimeout(function () {

        $("#query-text").addClass("d-none")
      }, 3000);
    }




  });






});



