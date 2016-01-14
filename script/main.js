// alert('project JS File')

$(function() {
 
  // push button, submit form
  $("#pushbutton").click(function(e) {
  	e.preventDefault()
  	 //    window.location.href = 'output.html', '_blank';
    // return false;
    document.getElementById("title").style.visibility = "hidden";
    document.getElementById("bucket").style.visibility = "hidden";
    document.getElementById("bucket").style.height = "0px";
    document.getElementById("start").classList.add("start");
    document.getElementById("scrolltitle").classList.add("scrolltitle");
    document.getElementById("scrolltext").classList.add("scrolltext");
    document.getElementById("scroll").style.visibility = "visible";
    var starform1 = $(".starform1").val()
    var starform2 = $(".starform2").val()
    var starform3 = $(".starform3").val()
    var starform4 = $(".starform4").val()
    var starform5 = $(".starform5").val()
    var starform6 = $(".starform6").val()
    var starform7 = $(".starform7").val()
    var starform8 = $(".starform8").val()
    var starform9 = $(".starform9").val()
    var starform10 = $(".starform10").val()

    // form entry appears in HTML (need it to appear in HTML)
    $(".magic1").empty().append(starform1);
    $(".magic2").empty().append(starform2);
    $(".magic3").empty().append(starform3);
    $(".magic4").empty().append(starform4);
    $(".magic5").empty().append(starform5);
    $(".magic6").empty().append(starform6);
    $(".magic7").empty().append(starform7);
    $(".magic8").empty().append(starform8);
    $(".magic9").empty().append(starform9);
    $(".magic10").empty().append(starform10);


  });

});




