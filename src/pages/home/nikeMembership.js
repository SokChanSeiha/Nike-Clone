const trendingData = {
    //Data for Home page
    homePage: [
        {
            imgURL: "../../images/home/last-1.png",
            text_1: "Nike Alphafly 3",
            text_2: "Nike Zegama 2",
            buttonText: "Shop"
        },
        {
            imgURL: "../../images/home/last-2.png",
            text_1: "Nike Pegasus 39",
            text_2: "Nike Invincible 2",
            buttonText: "Shop"
        },
        {
            imgURL: "../../images/home/last-3.png",
            text_1: "Nike Air Zoom",
            text_2: "Nike Wildhorse 7",
            buttonText: "Shop"
        }
    ],
    //Data for Women page
    womenPage: [
        {
            imgURL: "../../images/home/last-1.png",
            text_1: "Member Product",
            text_2: "Your Exclusive Access",
            buttonText: "Shop"
        },
        {
            imgURL: "../../images/home/last-4.png",
            text_1: "Member Rewards",
            text_2: "How We Say Thank You",
            buttonText: "Celebrate"
        },
        {
            imgURL: "../../images/home/last-2.png",
            text_1: "Sport & Wellness Apps",
            text_2: "Movement Where <br> You're At",
            buttonText: "Shop"
        }
    ]

};

//HTML code fused with various data as dynamic component
export const nikeMembership = (items) => {
    return `
        <div class="max-w-[1920px] mx-auto px-12">
            <div class="py-6"><h1 class="text-3xl font-bold tracking-[0.5px]">Nike Membership</h1></div>
            <div class="flex text-white gap-4">
                ${items.map(item => `
                    <div class="relative w-full">
                        <a href="#">
                            <img class="w-full h-full" src="${item.imgURL}" alt="">
                        </a>
                        <div class="absolute left-11 bottom-11">
                            <h1>${item.text_1}</h1>
                            <h1 class="pb-4 text-3xl mt-1 tracking-wide">${item.text_2}</h1>
                            <button class="px-4 py-2 bg-white text-black rounded-full">${item.buttonText}</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

class NikeMembershipComponent extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        // Determine which data to render based on an attribute or any other logic
        const page = this.getAttribute('page') || 'homePage';
        const items = trendingData[page];
        
        this.innerHTML = nikeMembership(items);
    }
}

//naming a callback component for "Nike Membership content"
customElements.define("nike-membership-component", NikeMembershipComponent);