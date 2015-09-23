EmailNotifier = new EventHandler({
  whenJobWasPosted: (event) => {
    console.log("Emailing everyone...");
  },
  whenJobWasFilled: (event) => {
    console.log("Send congrats email to employer for job", event.job.title);
  }
});