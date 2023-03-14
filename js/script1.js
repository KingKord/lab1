$(document).ready(function() {
    $('form').submit(function(event) {
      var textValue = $('#text').val();
      var phoneValue = $('#phone').val();
      var checkbox1Value = $('#checkbox1').prop('checked');
      var checkbox2Value = $('#checkbox2').prop('checked');
      var checkbox3Value = $('#checkbox3').prop('checked');
      var isValid = true;
  
      // Проверка поля "Text"
      if (textValue.length < 20 || textValue.length > 200) {
        $('#textError').text('Text must be between 20 and 200 characters.');
        isValid = false;
      } else {
        $('#textError').text('');
      }
  
      // Проверка поля "Phone number"
      if (!/^(\+\d{1,3}\(\d{3}\)\d{2}\.\d{2}\.\d{2})$/.test(phoneValue)) {
        $('#phoneError').text('Phone number must be in format +*(***)**.**.**');
        isValid = false;
      } else {
        $('#phoneError').text('');
      }
  
      // Проверка поля "Checkbox"
      if (checkbox1Value && checkbox3Value) {
        $('#checkboxError').text('Positions 1 and 3 cannot be selected at the same time.');
        isValid = false;
      } else {
        $('#checkboxError').text('');
      }
  
      // Если форма не валидна, предотвратить отправку данных
      if (!isValid) {
        event.preventDefault();
      }
    });
  });
  