import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota-memberjoin-now',
  templateUrl: './nota-memberjoin-now.component.html',
  styleUrls: ['./nota-memberjoin-now.component.css']
})
export class NotaMemberjoinNowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   yesnoCheck(that) {
    if (that.value == "dam") {
      document.getElementById("ifYes").style.display = "block";
    }
    else if (that.value == "sire") {
      document.getElementById("ifYes").style.display = "block";
    } else {
      document.getElementById("ifYes").style.display = "none";
    }
  }
}
