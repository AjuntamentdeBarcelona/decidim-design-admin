//= require jquery/dist/jquery
//= require what-input/dist/what-input.min

//= require foundation_requires
//= require foundation-datepicker/js/foundation-datepicker
//= require foundation-datepicker/js/locales/foundation-datepicker.es.js
//= require foundation-datepicker/js/locales/foundation-datepicker.ca.js
//= require form_validation_multitab
//= require form_validation_custom_errors
//= require form_datepicker

//= require svg4everybody.min.js

//= require toggle-nav.js

$(document).foundation();

$(function(){
  svg4everybody();
  formValidationMultitab();
  formValidationCustomErrors();
  formDatePicker();
});
