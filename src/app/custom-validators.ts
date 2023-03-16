import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomVal {
  static invalidName(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'Test') {
      return {'invalidName': true};
    }
    return null;
  }

  static asyncInvalidName(control : FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test2') {
          resolve({'invalidName': true});
        } else {
          resolve(null);
        }
      }, 2000)
    })
    return promise;
  }
}
