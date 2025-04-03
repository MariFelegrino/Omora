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

  /* Galería */
    $('.lightgallery').lightGallery({
      mode: 'lg-fade',
      selector: '.item_gallery_img_lg',
    });
  /* Input Time */
    $("#timepicker").datetimepicker({
      format: "LT",
      icons: {
      up: "fa fa-chevron-up",
      down: "fa fa-chevron-down"
      }
  });
    
});