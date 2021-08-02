import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home-demo-two',
    templateUrl: './home-demo-two.component.html',
    styleUrls: ['./home-demo-two.component.scss']
})
export class HomeDemoTwoComponent implements OnInit {
	
	partnerItem = [
        {
            img: `assets/img/company/yahoo.jpg`
        },
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
    constructor( private titleService: Title ) {
        this.titleService.setTitle('Techdefence Labs');
    }

    ngOnInit(): void {
    }

}