import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  formataStringData(data) {
    var mm = data.getMonth() + 1; // getMonth() is zero-based
    var dd = data.getDate();

    return [(dd > 9 ? '' : '0') + dd + "/" +
      (mm > 9 ? '' : '0') + mm,
    data.getFullYear()
    ]
      .join('/');
  };

}
