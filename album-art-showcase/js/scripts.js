$(function() {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('#modal-form, #album-info').modal();
  $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });
// form here




});
