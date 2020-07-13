$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        var city = $('#cityname').val();
  
        $.ajax({
          type: 'POST',
          url: '/',
          data: {city: city},
          success: function(data){
            console.log('Posted');
            console.log(data);
            
          }
        });
  
        return false;
  
    });
  
    
    });
  