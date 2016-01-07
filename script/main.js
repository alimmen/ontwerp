// alert('project JS File')

$(function() {
 
  // push button, submit form
  $("#pushbutton").click(function(e) {
  	e.preventDefault()
    var enterform = $("enterform").val()
    console.log('project JS File');
    console.log(enterform);

    // form entry appears in HTML
    $(".magic").append(enterform);
  });

});
