import {BaseModel} from "@/components/globalModels/baseModel/baseModel.js";

export class Personal extends BaseModel {

  constructor() {
    super()

    this.data = {
      name: '',
      gender: 'male',
      birthday: '',
      nationality: null,
      phone: '',
      email: '',
    }

    this.validation = {
      name: false,
      gender: false,
      birthday: false,
      nationality: false,
      phone: false,
      email: false,
    }

    this.validationTranslate = {
      name: '',
      gender: '',
      birthday: '',
      nationality: '',
      phone: '',
      email: '',
    }

  }

  personalInfoValidation() {
    let validationItems = {
      name: this.data.name,
      gender: this.data.gender,
      birthday: this.data.birthday,
      nationality: this.data.nationality,
      phone: this.data.phone,
      email: this.data.email,
    }

    let validationOptions = {
      name: {type: ['empty']},
      gender: {type: ['empty']},
      birthday: {type: ['empty']},
      nationality: {type: ['empty']},
      phone: {type: ['phone', 'empty']},
      email: {type: ['email', 'empty']},
    }

    this.setValidationData(validationItems, validationOptions)
    return this.checkValidation()
  }

}
