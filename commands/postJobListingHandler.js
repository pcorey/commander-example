PostJobListingHandler = class PostJobListingHandler extends CommandHandler {

  handle(command) {
    Jobs.post(command.title, command.description);
    console.log(`Handled PostJobListing for ${command.title}/${command.description}`);
  }

};