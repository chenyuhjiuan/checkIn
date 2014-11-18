console.info("Started Check-in App");

$(function(){
    $('#checkIn').on('submit', function(e){
      e.preventDefault();
      var 
      $el = $(this),
      $name =$el.find('#name'),
      $email =$el.find('#email');
      //console.log($name.val(), $email.val());
      if($name.val().length<3){
        $name.addClass('error');
        return;
      }
      
      $.ajax({
        data:{
          name: $name.val(),
          email:$email.val()
        },
        type: "POST",
        url:"/users"
        
      }).done(function(data){
             console.log(data);
       });
      
      
   });
});
