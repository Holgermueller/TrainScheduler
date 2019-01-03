'use strict';

$(document).on('click', '#update', function () {
  $('body').append(`
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalCenterTitle">Update Table Entry</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form>
        <div class="form-group">
          <input type="text" id="newTrainName" class="form-group form-control" name="newTrainName"
            value="Train name...">
          <input type="text" id="newDestination" class="form-group form-control" name="newDestination"
            value="Destination...">
          <input type="text" id="newFirstTrainTime" class="form-group form-control" name="newFirstTrainTime"
            value="First train time...">
          <input type="text" id="newFrequency" class="form-group form-control" name="newFrequency"
            value="Frequency...">
          <input id="updateSubmit" type="Submit" class="update-submit form-group form-control btn btn-primary"
            name="update-submit" value="Update">
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
    </div>
  </div>
</div>
</div>
  `);
});

$(document).on('click', '#updateSubmit', function (e) {
  e.preventDefault();
  let updatedTrain = $('#newTrainName').val().trim();
  let newDestination = $('#newDestination').val().trim();
  let newFirstTrainTime = $('#newFirstTrainTime').val().trim();
  let newFrequency = $('#newFrequency').val().trim();
  console.log(updatedTrain, newDestination, newFirstTrainTime, newFrequency);
});
