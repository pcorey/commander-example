Jobs = new Mongo.Collection("jobs");

Jobs.post = (title, description) => {
  var jobId = Jobs.insert({
    title: title,
    description: description
  });

  EventGenerator.raise(new JobWasPosted(Jobs.findOne(jobId)));
};

Jobs.fill = (jobId) => {
  var job = Jobs.findOne(jobId);
  Jobs.remove(jobId);

  EventGenerator.raise(new JobWasFilled(job));
};