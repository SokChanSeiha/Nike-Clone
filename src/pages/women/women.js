const createWomenPage = () => {
    return`
    <div class="max-w-[1920px] mx-auto w-full lg:px-10 px-5 flex flex-col justify-center">
    <div>
        <img src="../../images/women/bigImgLG.png" class="hidden sm:block" alt="">
        <img src="../../images/women/bigImgSM.png" class="block sm:hidden w-full" alt="">
    </div>
    <div class="sm:mx-auto max-w-7xl flex flex-col gap-4 py-8">
        <h1 class="sm:mx-auto font-medium">Nike Indy Bra</h1>
        <h1 class="sm:mx-auto text-5xl lg:text-7xl font-black tracking-[-2px] oswald">FEEL SCULPTED</h1>
        <h1 class="sm:mx-auto">Light, medium or high support fo every move, for every body.</h1>
        <div class="sm:mx-auto">
            <button class=" bg-black rounded-full px-[17px] py-[6px] flex mt-2 hover:bg-gray-500">
                <h1 class=" text-white">Shop</h1>
            </button>
        </div>
    </div>
</div>

<div class="max-w-[1920px] mx-auto md:px-12 px-6 mt-12 flex items-center justify-between py-4">
    <h1 class="text-2xl">Shop the Essentials</h1>
    <div class="flex gap-5">
        <button class="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center">
            <img src="../../images/home/nextleft.png" class="w-3">
        </button>
        <button class="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
            <img src="../../images/home/nextright.png" class="w-3">
        </button>
    </div>
</div>
<div class="max-w-[1920px] mx-auto flex gap-6 mb-6 overflow-x-scroll md:px-12 px-6">
    <div class="w-full">
        <div class="sm:w-[500px] w-[400px] xl:w-[600px]">
            <a href=""><img class="w-full" src="../../images/women/shop-1.png" alt=""></a>
            <h1 class="text-lg my-3 mb-9">Clothing</h1>
        </div>
    </div>
    <div class="w-full">
        <div class="sm:w-[500px] w-[400px] xl:w-[600px]">
            <a href=""><img class="w-full" src="../../images/women/shop-2.png" alt=""></a>
            <h1 class="text-lg my-3 mb-9">Shoes</h1>
        </div>
    </div>
    <div class="w-full">
        <div class="sm:w-[500px] w-[400px] xl:w-[600px]">
            <a href=""><img class="w-full" src="../../images/women/shop-3.png" alt=""></a>
            <h1 class="text-lg my-3 mb-9">Accessories</h1>
        </div>
    </div>
    <div class="w-full">
        <div class="sm:w-[500px] w-[400px] xl:w-[600px]">
            <a href=""><img class="w-full" src="../../images/women/shop-4.png" alt=""></a>
            <h1 class="text-lg my-3 mb-9">Bras & Leggings</h1>
        </div>
    </div>
</div>
<div class="">
    <div class="py-4 mx-auto px-4 md:px-10">
        <h1 class="text-2xl font-medium tracking-[0.5px]">Trending</h1>
    </div>
    <div class="max-w-[1920px] flex flex-col mx-auto text-white md:px-12 px-6 sm:flex-row">
        <!-- picture1 -->
        <div class="relative w-full md:block hidden">
            <a class=""><img class="w-full h-full object-cover " src="../../images/women/womenLG.png" alt=""></a>
            <div class="absolute left-11 bottom-11">
                <h1>Just In</h1>
                <h1 class="text-lg mt-1 tracking-wide">Air Max DN</h1>
                <button class="bg-white py-1.5 px-5 rounded-full mt-8 text-black font-medium">Shop</button>
            </div>
        </div>
        <div class="relative w-full md:hidden block">
            <a class=""><img class="w-full h-full object-cover " src="../../images/women/womenSM.png" alt=""></a>
            <div class="absolute left-11 bottom-11">
                <h1>Just In</h1>
                <h1 class="text-lg mt-1 tracking-wide">Air Max DN</h1>
                <button class="bg-white py-1.5 px-5 rounded-full mt-8 text-black font-medium">Shop</button>
            </div>
        </div>

        <!-- picture2 -->
        <div class="relative w-full md:block hidden">
            <a class=""><img class="w-full h-full" src="../../images/home/f-women-lg.png" alt=""></a>
            <div class="absolute left-11 bottom-11">
                <h1>Make Your Move</h1>
                <h1 class="text-lg mt-1 tracking-wide">New Fitness Essential</h1>
                <button class="bg-white py-1.5 px-5 rounded-full mt-8 text-black font-medium">Shop</button>
            </div>
        </div>
        <div class="relative w-full md:hidden block">
            <a class=""><img class="w-full h-full" src="../../images/women/girlsSM.png" alt=""></a>
            <div class="absolute left-11 bottom-11">
                <h1>Make Your Move</h1>
                <h1 class="text-lg mt-1 tracking-wide">New Fitness Essentials</h1>
                <button class="bg-white py-1.5 px-5 rounded-full mt-8 text-black font-medium">Shop</button>
            </div>
        </div>
    </div>
</div>

<!-- Classic Spotlight -->
<classic-spotlight-component data-source="womenImg"></classic-spotlight-component>

// popular Right Now
<div>
    <div class="max-w-[1920px] mx-auto flex items-center justify-between py-6 px-6">
        <h1 class="text-2xl lg:px-8">Popular Right now</h1>
        <div class="flex gap-3 items-center">
            <h1 class="font-medium">Shop All</h1>
            <button class="hidden bg-gray-100 w-12 h-12 rounded-full sm:flex items-center justify-center">
                <img src="../../images/home/nextleft.png" class="w-3">
            </button>
            <button class="hidden bg-[#e5e5e5] hover:bg-zinc-300 w-12 h-12 rounded-full sm:flex items-center justify-center">
                <img src="../../images/home/nextright.png" class="w-3">
            </button>
        </div>
    </div>
</div>
<div class="">
    <div class="max-w-[1920px] mx-auto flex gap-3 mb-6 overflow-x-scroll lg:px-14 px-6">
      <div class="w-full">
        <div class="w-[330px] 2xl:w-[600px]">
            <img class="w-full" src="../../images/women/popular-1.png">
            <div class="flex flex-col py-4 mb-8">
                <h1 class="text-sm font-semibold">Air Jordan 4 Retro "Industrial Blue"</h1>
                <h1 class="text-gray-500 text-sm">Big Kids' Shoes</h1>
                <h1 class="mt-2 text-sm font-medium">$160</h1>
            </div>
        </div>
      </div>
      <div class="w-full">
        <div class="w-[330px] 2xl:w-[600px]">
            <img class="w-full" src="../../images/women/popular-2.png">
            <div class="flex flex-col py-4 mb-8">
                <h1 class="text-sm font-semibold">Air Jordan 4 Retro "Industrial Blue"</h1>
                <h1 class="text-gray-500 text-sm">Big Kids' Shoes</h1>
                <h1 class="mt-2 text-sm font-medium">$160</h1>
            </div>
        </div>
      </div>
      <div class="w-full">
        <div class="w-[330px] 2xl:w-[600px]">
            <img class="w-full" src="../../images/women/popular-3.png">
            <div class="flex flex-col py-4 mb-8">
                <h1 class="text-sm font-semibold">Air Jordan 4 Retro "Industrial Blue"</h1>
                <h1 class="text-gray-500 text-sm">Big Kids' Shoes</h1>
                <h1 class="mt-2 text-sm font-medium">$160</h1>
            </div>
        </div>
      </div>
      <div class="w-full">
        <div class="w-[330px] 2xl:w-[600px]">
            <img class="w-full" src="../../images/women/popular-4.png">
            <div class="flex flex-col py-4 mb-8">
                <h1 class="text-sm font-semibold">Air Jordan 4 Retro "Industrial Blue"</h1>
                <h1 class="text-gray-500 text-sm">Big Kids' Shoes</h1>
                <h1 class="mt-2 text-sm font-medium">$160</h1>
            </div>
        </div>
      </div>
      <div class="w-full">
        <div class="w-[330px] 2xl:w-[600px]">
            <img class="w-full" src="../../images/women/popular-5.png">
            <div class="flex flex-col py-4 mb-8">
                <h1 class="text-sm font-semibold">Air Jordan 4 Retro "Industrial Blue"</h1>
                <h1 class="text-gray-500 text-sm">Big Kids' Shoes</h1>
                <h1 class="mt-2 text-sm font-medium">$160</h1>
            </div>
        </div>
      </div>
      <div class="w-full">
        <div class="w-[330px] 2xl:w-[600px]">
            <img class="w-full" src="../../images/women/popular-6.png">
            <div class="flex flex-col py-4 mb-8">
                <h1 class="text-sm font-semibold">Air Jordan 4 Retro "Industrial Blue"</h1>
                <h1 class="text-gray-500 text-sm">Big Kids' Shoes</h1>
                <h1 class="mt-2 text-sm font-medium">$160</h1>
            </div>
        </div>
      </div>
      <div class="w-full">
        <div class="w-[330px] 2xl:w-[600px]">
            <img class="w-full" src="../../images/women/popular-7.png">
            <div class="flex flex-col py-4 mb-8">
                <h1 class="text-sm font-semibold">Air Jordan 4 Retro "Industrial Blue"</h1>
                <h1 class="text-gray-500 text-sm">Big Kids' Shoes</h1>
                <h1 class="mt-2 text-sm font-medium">$160</h1>
            </div>
        </div>
      </div>
      <div class="w-full">
        <div class="w-[330px] 2xl:w-[600px]">
            <img class="w-full" src="../../images/women/popular-8.png">
            <div class="flex flex-col py-4 mb-8">
                <h1 class="text-sm font-semibold">Air Jordan 4 Retro "Industrial Blue"</h1>
                <h1 class="text-gray-500 text-sm">Big Kids' Shoes</h1>
                <h1 class="mt-2 text-sm font-medium">$160</h1>
            </div>
        </div>
      </div>
      <div class="w-full">
        <div class="w-[330px] 2xl:w-[600px]">
            <img class="w-full" src="../../images/women/popular-9.png">
            <div class="flex flex-col py-4 mb-8">
                <h1 class="text-sm font-semibold">Air Jordan 4 Retro "Industrial Blue"</h1>
                <h1 class="text-gray-500 text-sm">Big Kids' Shoes</h1>
                <h1 class="mt-2 text-sm font-medium">$160</h1>
            </div>
        </div>
      </div>
    </div>
</div>
    `
}

class WomenPage extends HTMLElement {
    constructor (){
        super()
    }
    connectedCallback(){
        this.innerHTML = createWomenPage();
    }
}

//naming a callback component for "Women page"
customElements.define("women-page-content", WomenPage)