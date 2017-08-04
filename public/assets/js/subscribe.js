$('#subscribeButton').click(function(){
  var firstName = $.trim($("#inputFirstName").val());
  var lastName = $.trim($("#inputLastName").val());
  var email = $.trim($("#inputEmail").val());
  var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var cont = true;

  $('#firstNameGroup').removeClass('has-danger').removeClass('has-success');
  $('#lastNameGroup').removeClass('has-danger').removeClass('has-success');
  $('#emailGroup').removeClass('has-danger').removeClass('has-success');

  if(!firstName.length>0){
    cont = false;
    $('#firstNameGroup').addClass('has-danger');
  } else $('#firstNameGroup').addClass('has-success');
  if(!lastName.length>0){
    cont = false;
    $('#lastNameGroup').addClass('has-danger');
  } else $('#lastNameGroup').addClass('has-success');
  if(!emailRegex.test(email)){
    cont = false;
    $('#emailGroup').addClass('has-danger');
  } else $('#emailGroup').addClass('has-success');

  if(cont === true){
    var userData = '[ { "email":"' + email + '","first_name":"' + firstName + '","last_name":"' + lastName + '"} ]';
  
    $.ajax({
      url: "https://api.sendgrid.com/v3/contactdb/recipients",
      type: "post",
      headers: {
          "Authorization": "Bearer API-KEY-HERE"
      },
      dataType: 'application/json',
   	  data: userData,
      complete: function(xhr) {
        var jsonResponse = JSON.parse(xhr.responseText);
        var errorCount = jsonResponse['error_count']

        if(xhr.status === 201){
          if(jsonResponse['error_count'] === 0){
            $('#responseModalTitle').text("Subscription Succeeded");
            $('#responseModalBody').text("You are now subscribed to the NIMS mailing list!");
          }
          else{
            var errors = jsonResponse['errors'];
            var modalMessage = "";
            errors.forEach(function(error, ndx){
              console.log(error['message']);
              modalMessage += ((ndx+1) + ": " + error['message'] + "\n");
            });
            $('#responseModalTitle').text("Subscription Error");
            $('#responseModalBody').text(modalMessage);
          } 
        } else{
            $('#responseModalBody').text("Please try again");
            $('#responseModalTitle').text("Subscription Error");
          }
        $('#responseModal').modal('show');
      } 
    });
  }
});