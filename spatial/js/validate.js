$(function(){
	$("#form_booking").validate({
		rules: {
		patient_name: "required",
		phone: "required",
		email: "required",
		date_of_birth: "required",
		appointment_date: "required",
		},
		messages: {
			patient_name: "Please enter your patient name.",
			phone: "Please enter your phone number.",
			email: "Please enter your email address.",
			date_of_birth: "Please enter your date of birth.",
			appointment_date: "Please enter appointment date.",
		}
	});
})