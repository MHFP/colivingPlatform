
$(document).ready(function(){
  $("#continent").on('change', function() {
    var selection = $(this).val();
    console.log(selection);

    $(".hidden").each(function(){
      if($(this).text().indexOf(selection) === -1){
        $(this).parent().hide();
      } else {
        $(this).parent().show();
      }
    });
  });



});
