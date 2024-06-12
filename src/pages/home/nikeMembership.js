const trendingData = {
    //Data for Home page
    homePage: [
        {
            imageURL: "../../images/home/last-1.png",
            titleText: "Nike Alphafly 3",
            captionText: "Nike Zegama 2",
            buttonText: "Shop"
        },
        {
            imageURL: "../../images/home/last-2.png",
            titleText: "Nike Pegasus 39",
            captionText: "Nike Invincible 2",
            buttonText: "Shop"
        },
        {
            imageURL: "../../images/home/last-3.png",
            titleText: "Nike Air Zoom",
            captionText: "Nike Wildhorse 7",
            buttonText: "Shop"
        }
    ],

    //Data for Women page
    womenPage: [
        {
            imageURL: "../../images/home/last-1.png",
            titleText: "Member Product",
            captionText: "Your Exclusive Access",
            buttonText: "Shop"
        },
        {
            imageURL: "../../images/home/last-4.png",
            titleText: "Member Rewards",
            captionText: "How We Say Thank You",
            buttonText: "Celebrate"
        },
        {
            imageURL: "../../images/home/last-2.png",
            titleText: "Sport & Wellness Apps",
            captionText: "Movement Where <br> You're At",
            buttonText: "Shop"
        }
    ]

};

//HTML code fused with various data as dynamic component
export const nikeMembership = (items) => {
    return `
        <div class="max-w-[1920px] mx-auto px-12">
            <div class="py-6"><h1 class="text-3xl font-bold tracking-[0.5px]">Nike Membership</h1></div>
            <div class="flex text-white gap-4 overflow-x-scroll">
                ${items.map(item => `
                    <div class="relative w-full">
                        <picture href="#">
                            <img class="min-w-[300px]" src="${item.imageURL}" alt="">
                        </picture>
                        <article class="absolute left-11 bottom-11">
                            <h1 class="text-sm md:text-lg">${item.titleText}</h1>
                            <h1 class="pb-4 text-xl lg:text-3xl font-semibold mt-1 tracking-wide">${item.captionText}</h1>
                            <button class="px-4 py-2 bg-white text-black rounded-full">${item.buttonText}</button>
                        </article>
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