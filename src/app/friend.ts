import {isObservable} from 'rxjs/internal-compatibility';
import {Observable} from 'rxjs';

export class Friend {

  fName;
  lName;
  email;
  favouritelanguage;
  phone;

  constructor(fName: string | null , lName: string | null, email: string | null,
              favouritelanguage: string | null, phone: string | null) {

    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.favouritelanguage = favouritelanguage;
    this.phone = phone;
  }

}
