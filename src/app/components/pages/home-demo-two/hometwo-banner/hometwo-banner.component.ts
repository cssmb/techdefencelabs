import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    awardImage = [
        {
            img: `assets/img/award.png`
        }
    ]
    homeInnerContent = [
    {
            title: `Web Application Penetration Testing`,
            list:[
                "Combining the latest scanning technologies, methodologies and deep expertise.",
                "Coverage of all OWASP & WASC Classes.",
                "Zero false positive guarantee.",
                "Actionable and accurate reports in days not weeks.",
                "On demand or On premise Options available.",
            ],
            buttonBox: [
                {
                    buttonText: `GET FREE POC AUDIT`,
                    buttonIcon: `bx bxs-chevron-right`,
                    buttonLink: `contact`
                }
            ],
            img: `assets/img/banner-img1.png`
        },
        {
            title: `Mobile Application Penetration Testing`,
            list:[
                "Combining the latest scanning technologies, methodologies and deep expertise.",
                "Static & Dynamic analysis of Mobile Apps..",
                "Actionable and accurate reports in days not weeks.",
                "On demand or On premise Options available.",
                "Support for testing of Android, iOS, Windows Mobile & J2ME applications.",
            ],
            buttonBox: [
                {
                    buttonText: `GET FREE POC AUDIT`,
                    buttonIcon: `bx bxs-chevron-right`,
                    buttonLink: `contact`
                }
            ],
            img: `assets/img/banner-img2.png`
        },
        {
            title: `Source Code Review`,
            list:[
                "Audit and patch your code for security vulnerabilities.",
                "Hybrid Approach by integrating automated with manual review by experts. ",
                "Actionable and accurate reports in days not weeks.",
                "Actionable and accurate reports in days not weeks.",
                "On demand or On premise Options available.",
            ],
            buttonBox: [
                {
                    buttonText: `GET FREE POC AUDIT`,
                    buttonIcon: `bx bxs-chevron-right`,
                    buttonLink: `contact`
                }
            ],
            img: `assets/img/banner-img3.png`
        }        
    ];

    homeSlides: OwlOptions = {
		loop: true,
		nav: true,
		margin: 30,
		dots: false,
		autoplay: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
        autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			}
		}
    }

}