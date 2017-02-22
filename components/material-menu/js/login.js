// JavaScript Document
/* globals CustomEvent */
$(function (){
    var initInputs = function() {
        // Add checkbox to material checkboxes
        $(".checkbox > label > input").not(".bs-material").addClass("bs-material").after("<span class=check></span>");
    };
    initInputs();
    $(document).on("change", ".checkbox input", function() {
        $(this).blur();
    });
	
	
	 $("body").on("touchstart, click","button[type='submit']",function(){
		 var username, password;
		 username	=	$("#username");
		 password	=	$("#password");
		 $('span.error-text').remove();
		 if (username.val().length == 0 && password.val().length == 0) { 
			 username.addClass('error-massage');
			 username.after("<span class='error-text'> Please enter your username</span>");
			 password.addClass('error-massage');
			 password.after("<span class='error-text'> Please enter your password</span>");
			 return false;
		 }
		 else if (username.val().length == 0) {
			  username.addClass('error-massage');
			  username.after("<span class='error-text'> Please enter your username</span>");
			  return false;
		 }
		 else if (password.val().length == 0) {
			 password.addClass('error-massage');
			  password.after("<span class='error-text'> Please enter your password</span>");
			 return false;
		 }else{
			 $('span.error-text').remove();
		}
    // Specify validation rules
  
  });
});