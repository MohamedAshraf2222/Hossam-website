(function() {
    var removeSuccess;
  
    removeSuccess = function() {
      return $('.button-animate-dev').removeClass('success');
    };
  
    $(document).ready(function() {
      return $('.button-animate-dev').click(function() {
        $(this).addClass('success');
        return setTimeout(removeSuccess, 3000);
      });
    });
  
  }).call(this);