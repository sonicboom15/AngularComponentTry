import { Card } from './cardData';

export const Cards: Card[] = [
    {
        tiername:"Free",
        price:0,
        features:[
            {
                featurename:"Single User",
                availability:true
            },
            {
                featurename:"5GB Storage",
                availability:true
            },
            {
                featurename:"Unlimited Public Projects",
                availability:true
            },
            {
                featurename:"Community Access",
                availability:true
            },
            {
                featurename:"Unlimited Private Projects",
                availability:false
            },
            {
                featurename:"Dedicated Phone Support",
                availability:false
            },
            {
                featurename:"Free Subdomain",
                availability:false
            },
            {
                featurename:"Monthly Status Reports",
                availability:false
            }
        ],
        buttonStatus:false
    },
    {
        tiername:"PLUS",
        price:9,
        features:[
            {
                featurename:"5 Users",
                availability:true
            },
            {
                featurename:"50GB Storage",
                availability:true
            },
            {
                featurename:"Unlimited Public Projects",
                availability:true
            },
            {
                featurename:"Community Access",
                availability:true
            },
            {
                featurename:"Unlimited Private Projects",
                availability:true
            },
            {
                featurename:"Dedicated Phone Support",
                availability:true
            },
            {
                featurename:"Free Subdomain",
                availability:true
            },
            {
                featurename:"Monthly Status Reports",
                availability:false
            }
        ],
        buttonStatus:false
    },
    {
        tiername:"PRO",
        price:49,
        features:[
            {
                featurename:"Unlimited Users",
                availability:true
            },
            {
                featurename:"150GB Storage",
                availability:true
            },
            {
                featurename:"Unlimited Public Projects",
                availability:true
            },
            {
                featurename:"Community Access",
                availability:true
            },
            {
                featurename:"Unlimited Private Projects",
                availability:true
            },
            {
                featurename:"Dedicated Phone Support",
                availability:true
            },
            {
                featurename:"Unlimited Free Subdomains",
                availability:true
            },
            {
                featurename:"Monthly Status Reports",
                availability:true
            }
        ],
        buttonStatus:true
    }
];