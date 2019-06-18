const url = "http://localhost:2019/housing-options";
const success = data => {
    // Process data here
    document.getElementById("housing-options").innerHTML = data;
};

/**
 * GET HOUSING OPTIONS
 */
$.get({ url, success });



// function checkForm(form)
// {
//   // validation fails if both postal code and neighborhood are selected!
//   if(form.inputfield.city.value != "" && form.inputfield.postal_code.value !="") {
//     alert("Both neighborhood and Postal Code selected");
//     form.inputfield.focus();
//     return false;
//   }f

//   // validation was successful
//   return true;
// }

