$("#subscribeButton").click(function(){
  console.log("User subscribing\n");
  var firstName = $.trim($("#inputFirstName").val());
  var lastName = $.trim($("#inputLastName").val());
  var email = $.trim($("#inputEmail").val());
 
  if(firstName.length<=0) console.log("First name invalid\n");
  if(lastName.length<=0) console.log("Last name invalid\n");
  if(email.length<=0) console.log("Email invalid\n");

  if(firstName.length>0 && lastName.length>0 && email.length>0){
    var userData = '[ { "email":"' + email + '","first_name":"' + firstName + '","last_name":"' + lastName + '"} ]';
  
    $.ajax({
      url: "https://api.sendgrid.com/v3/contactdb/recipients",
      type: "post",
      headers: {
          "Authorization": "Bearer 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"
      },
      dataType: 'application/json',
   	  data: userData,
   	  success: function(data){
   	  	//TODO add user to main list as well
    	console.log("Added\n");
        //console.log(data);
    }
    });
  }
});