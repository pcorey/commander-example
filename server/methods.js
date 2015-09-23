Meteor.methods({
  postJob: function(title, description) {
    var command = new PostJobListingCommand(title, description);

    CommandBus.execute(command);
  },
  fillJob: function(jobId) {
    CommandBus.execute(new JobFilledCommand(jobId));
  }
});