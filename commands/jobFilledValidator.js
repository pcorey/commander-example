JobFilledValidator = class JobFilledValidator {

  validate(command) {
    check(command.jobId, String);
  }

}