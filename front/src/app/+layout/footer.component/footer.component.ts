import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ss-footer-component',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})
export class FooterComponent implements OnInit {
  public year: number;

  constructor() {
  }

  ngOnInit() {
    this.year = (new Date()).getFullYear();
  }
}
