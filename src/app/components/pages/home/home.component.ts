import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	
	partnerItem = [
        {
            img: `assets/img/partner/partner-img2.png`
        },
        {
            img: `assets/img/partner/partner-img3.png`
        },
        {
            img: `assets/img/partner/partner-img4.png`
        }
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
