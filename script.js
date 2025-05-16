$(document).ready(function() {
    // Email validation
    $('#register-form').on('submit', function(e) {
      var email = $('#email').val();
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(email)) {
        alert('Please enter a valid email address.');
        $('#email').focus();
        e.preventDefault();
        return false;
      }
      if (!$('#policy').is(':checked')) {
        alert('You must accept the privacy policy.');
        e.preventDefault();
        return false;
      }
    });
  
    // Country code auto-fill
    $('#country').on('change', function() {
      var codes = {
        'br': '+55',
        'us': '+1',
        'uk': '+44'
      };
      var selected = $(this).val();
      $('#phone-code').val(codes[selected] || '');
    });
  });