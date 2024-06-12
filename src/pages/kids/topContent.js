//usable for kids page and women page
const titleContent = (title) => {
    return `
    <div class="max-w-[1920px] mx-auto w-full px-10 flex flex-col h-24 justify-center mb-2">
        <div class="w-full text-lg mx-auto lg:flex gap-3 h-20 items-center">
            <div class="flex items-center h-6 lg:my-0 my-4">
                <h1><a href="#">${title}</a></h1>
            </div>
            <div class="flex xl:mx-auto ml-auto sm:items-center">
                <ul class="flex gap-8">
                    <li class="text-nowrap"><a href="#">Shoe</a></li>
                    <li class="text-nowrap"><a href="#">Clothing</a></li>
                    <li class="text-nowrap"><a href="#">New Arrivals</a></li>
                    <li class="text-nowrap"><a href="#">Gear & Accessories</a></li>
                    <li class="text-nowrap"><a href="#">Mini Me</a></li>
                    <li class="text-nowrap"><a href="#">Sale</a></li>
                </ul>
            </div>
        </div>
    </div>
    `;
};

class TitleContent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title = this.getAttribute('title');
        this.innerHTML = titleContent(title);
    }
}

customElements.define("title-component", TitleContent);
