import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }
  showTitle()
  {
  let demotitle = 'Demo Title';
  return demotitle;
  }

}
