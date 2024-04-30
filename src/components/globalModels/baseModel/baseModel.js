import {Validation} from "../validations/Validation";

export class BaseModel extends Validation {

  constructor() {
    super()

    this.validation = {}
    this.validationTranslate = {}
  }

}