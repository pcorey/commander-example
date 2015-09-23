JobFilledHandler = class JobFilledHandler extends CommandHandler {

  handle(command) {
    Jobs.fill(command.jobId);
    console.log(`Handled JobFilled for ${command.jobId}`);
  }

};