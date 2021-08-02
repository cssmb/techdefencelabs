import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-features',
    templateUrl: './hometwo-features.component.html',
    styleUrls: ['./hometwo-features.component.scss']
})
export class HometwoFeaturesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    featuresBox = [
        {
            icon: `fa fa-random`,
            title: `Vulnerability Assessment`,
            paragraph: `TechDefence approach towards vulnerability has been very rigorous and crucial. We put our best experts at work with a “Researcher’s Instinct” to route through your system and produce before you your own system as never seen before. We go by the routine testing methodical procedure of Attack, Consequence, Weakness, and Vulnerability.`
        },
        {
            icon: `fa fa-arrows-alt`,
            title: `Technical Assurance`,
            paragraph: `A customized proprietary platform along with manned penetration testing tools is the basic approach today for penetration testing. However, TechDefence processes the penetration testing methodology with a crucial viewpoint of manual testing following in tandem with the tools and proprietary platform developed. This safe guards that none of the aspects will be overseen or missed by our multi-fold testing philosophy.`,
        },
        {
            icon: `fa fa-cogs`,
            title: `Security Solutions`,
            paragraph: `TechDefence with its state-of-the-art R&D center and a horde of cyber security experts cater to the various innumerable needs of clients for a unique and customized solution for securing the cyber space. TechDefence undertakes and develops tools as well as services which are at par with the needs of the clients, thus performing a satisfactory server-client interface.`,
            link: `services-details`,
        }
    ]

}