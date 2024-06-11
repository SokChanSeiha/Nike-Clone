// const trendingData = {
//     homePage: [
//         {
//             imgURL: "../../images/home/last-1.png",
//             text_1: "Nike Alphafly 3",
//             text_2: "Nike Zegama 2",
//             buttonText: "Shop"
//         },
//         {
//             imgURL: "../../images/home/last-2.png",
//             text_1: "Nike Pegasus 39",
//             text_2: "Nike Invincible 2",
//             buttonText: "Shop"
//         },
//         {
//             imgURL: "../../images/home/last-3.png",
//             text_1: "Nike Air Zoom",
//             text_2: "Nike Wildhorse 7",
//             buttonText: "Shop"
//         }
//     ],
//     womenPage: [
//         {
//             imgURL: "../../images/home/last-1.png",
//             text_1: "Member Product",
//             text_2: "Your Exclusive Access",
//             buttonText: "Shop"
//         },
//         {
//             imgURL: "../../images/home/last-4.png",
//             text_1: "Member Rewards",
//             text_2: "How We Say Thank You",
//             buttonText: "Celebrate"
//         },
//         {
//             imgURL: "../../images/home/last-2.png",
//             text_1: "Sport & Wellness Apps",
//             text_2: "Movement Where <br> You're At",
//             buttonText: "Shop"
//         }
//     ]

// };

//import data from other seperate file
import {imageDataForHome, imageDataForWomen} from "./classicData.js"

const dataSource = {
    "womenImage" : imageDataForWomen,
    "homeImage" : imageDataForHome
}

//HTML code fused with various data as dynamic component
const classicSpotlight = (items) => {
    return `
        <div class="max-w-[1920px] mx-auto px-12 py-6 flex items-center justify-between mt-20">
            <h1 class="text-2xl">Classic Spotlight</h1>
        </div>
        <div class="mx-auto">
            <div class=" mx-auto flex gap-6 mb-6 overflow-x-scroll">
            ${items.map((image) =>`
                <div class="w-full">
                    <div class="w-[330px] 2xl:w-[489px]">
                        <a href=""><img class="w-full" src="${image.url}" alt=""></a>
                    </div>
                </div>

    `).join("")}
            </div>
        </div>
    `
}

class ClassicSpotlight extends HTMLElement {
    connectedCallback(){
        const dataAtt = this.getAttribute("data-source");
        const dataSourceKey = dataSource[dataAtt]
        this.innerHTML = classicSpotlight(dataSourceKey)
    }
}

customElements.define("classic-spotlight-component", ClassicSpotlight)