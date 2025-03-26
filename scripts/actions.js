$(document).ready(function(){

    /* Agregar clase para el select */
    $('.select_action').each(function() {
        var selectElement = this;
        var selectContainer = $(selectElement).closest('.select_select');
  
        $(selectElement).on('focus', function() {
          selectContainer.addClass('openSelect');
        });
  
        $(selectElement).on('blur', function() {
          selectContainer.removeClass('openSelect');
        });
      });
      
});