//speakeasy alert Ginevra 

var currentCallback;

// override default browser alert
window.alert = function(msg, callback){
  $('.message').text(msg);
  $('.customAlert').css('animation', 'fadeIn 0.3s linear');
  $('.customAlert').css('display', 'inline');
  setTimeout(function(){
    $('.customAlert').css('animation', 'none');
  }, 300);
  currentCallback = callback;
}

$(function(){
  
  // add listener for when our confirmation button is clicked
  $('.confirmButton').click(function(){
    $('.customAlert').css('animation', 'fadeOut 0.3s linear');
    setTimeout(function(){
     $('.customAlert').css('animation', 'none');
    $('.customAlert').css('display', 'none');
    }, 300);
    currentCallback();
  })
  

  
  // our custom alert box
  setTimeout(function(){
    alert('Speakeasy is accessed through a door inside an anonymous venue, and of course by invitation only. You can only gain exclusive entry if you know the password through connections and word of mouth.      Do you know the password?', function(){
        console.log("Callback executed");
      });
  }, 500);
});

//speak easy alert Ginevra END
