import {BaseModel} from "@/components/globalModels/baseModel/baseModel.js";

export class Booking extends BaseModel{

  constructor() {
    super()

    this.data = {
      activeStep: 2,

      activeHouse: 1,

      locationUlis: '',
      date: null,
      adults: null,


      name: '',
      gender: 'male',
      birthday: '',
      nationality: null,
      phone: '',
      email: '',


      agreeWithRules: false,
    }

    this.validation = {
      locationUlis: false,
      date: false,
      adults: false,

      name: false,
      gender: false,
      birthday: false,
      nationality: false,
      phone: false,
      email: false,


      agreeWithRules: false,
    }

    this.validationTranslate = {
      locationUlis: '',
      date: '',
      adults: '',

      name: '',
      gender: '',
      birthday: '',
      nationality: '',
      phone: '',
      email: '',


      agreeWithRules: '',
    }

  }

  stepAValidation() {
    let validationItems = {
      locationUlis: this.data.locationUlis,
      date: this.data.date,
      adults: this.data.adults,
    }

    let validationOptions = {
      locationUlis: {type: ['empty']},
      date: {type: ['empty']},
      adults: {type: ['empty']},
    }

    this.setValidationData(validationItems, validationOptions)
    return this.checkValidation()
  }

  stepDValidation() {
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
      // birthday: {type: ['empty']},
      nationality: {type: ['empty']},
      phone: {type: ['phone', 'empty']},
      email: {type: ['email', 'empty']},
    }

    this.setValidationData(validationItems, validationOptions)
    return this.checkValidation()
  }

  stepEValidation() {
    let validationItems = {
      agreeWithRules: this.data.agreeWithRules,
    }

    let validationOptions = {
      agreeWithRules: {type: ['checked']},
    }

    this.setValidationData(validationItems, validationOptions)
    return this.checkValidation()
  }

  certificateValidation() {
    let validationItems = {
      name: this.data.name,
      birthday: this.data.birthday,
      nationality: this.data.nationality,
      phone: this.data.phone,
      email: this.data.email,
    }

    let validationOptions = {
      name: {type: ['empty']},
      birthday: {type: ['empty']},
      nationality: {type: ['empty']},
      phone: {type: ['phone', 'empty']},
      email: {type: ['email', 'empty']},
    }

    this.setValidationData(validationItems, validationOptions)
    return this.checkValidation()
  }


}