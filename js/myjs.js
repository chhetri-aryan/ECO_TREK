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

  
  document.getElementById("sub1")
    .addEventListener("click", function (event) {
      event.preventDefault();

      var electricityBill = $("#electric-bill").val();
      var vehicleMileage = $("#vehicle-milage").val();
      var gasBill = $("#gas-bill").val();
      var oilBill = $("#oil-bill").val();
      var flight = $("#flight").val();
      var flights = $("#flights").val();

      var rp = $("#rp").val();
      var rm = $("#rm").val();
    
      var eb=electricityBill * 105;
      var vm=vehicleMileage * 0.79
      var gb= gasBill * 105;
      var ob=oilBill * 113;
      var fl= flight * 1100;
      var fls=flights * 4400;
      var rrp=rp * 184;
      var rrm= rm * 166;

      var totalEmissions = eb+vm+gb+ob+fl+fls+rrp+rrm;

      $("#result1").html("Total Emission : " + totalEmissions);


      //Pie Chart

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Consumption', 'Units'],
          ['Electricity', eb],
          ['Vehicle', vm],
          ['Gas', gb],
          ['Oil', ob],
          ['Flights', fl+fls]
        ]);

        var options = {
        
          
          //pieHole: 0.4,
          is3D: true,
          
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
        chart.draw(data, options);
      }

    });


});



