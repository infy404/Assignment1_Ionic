import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  totalHours;
  hourlyRate;


  rgPay = 0;
  ovtPay = 0
  ttlPay = 0;
  ttlTax = 0;
  ntIncome = 0;

  constructor() {}


  calculatePay(){
    if(this.totalHours <= 40){
      this.rgPay = this.totalHours * this.hourlyRate;
      this.ovtPay = 0;
    }
    else{
      this.rgPay = 40 * this.totalHours;
      this.ovtPay = (this.totalHours - 40) * this.hourlyRate * 1.5;
    }

    this.ttlPay = this.rgPay + this.ovtPay;

    this.ttlTax = this.ttlPay * 0.18;

    this.ntIncome = this.ttlPay - this.ttlTax;
  }

}
