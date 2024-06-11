const createKidsPage = () => {
    return`
    <!-- New this week's content-->
    <div class="max-w-[1920px] mx-auto w-full lg:px-10 px-5 flex flex-col justify-center">
        <!-- image of "New this week" -->
        <div class="w-full">
          <img src="../../images/kids/kids-sm.png" class="block md:hidden " alt="">
          <img src="../../images/kids/kids-lg.png" class="hidden md:block " alt="">
        </div>
        <!-- content's title: NEW THIS WEEK -->
        <div class="sm:mx-auto max-w-7xl flex flex-col gap-6 py-8">
          <h1 class="sm:mx-auto text-5xl lg:text-7xl font-black tracking-[-3px] oswald">NIKE AQUA SWOOSH</h1>
          <h1 class="sm:mx-auto">Made for all your water-based adventures.</h1>
          <!-- button area : "shop"-->
          <div class="sm:mx-auto">
            <button class=" bg-black rounded-full px-[17px] py-[7px] flex mt-2 hover:bg-gray-500">
              <h1 class=" text-white">Shop</h1>
            </button>
          </div>
        </div>
    </div>
    
    <!-- Popular Right now's content -->
    <div class="max-w-[1920px] mx-auto">
        <div class="p-6 flex items-center justify-between pl-14">
            <!-- content's title "Popular Right Now" -->
            <h1 class="text-2xl">Popular Right now</h1>
            <!-- chevron icons (left, right) -->
            <div class="flex gap-5">
                <button class="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center">
                    <img src="../../images/home/nextleft.png" class="w-3">
                </button>
                <button class="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <img src="../../images/home/nextright.png" class="w-3">
                </button>
            </div>
        </div>
        <!-- scroll image cards -->
        <div class="flex gap-6 mb-6 overflow-x-scroll lg:px-14 px-6">
            <!-- 1st card image -->
            <div class="w-full">
                <div class="w-[430px]">
                    <img class="w-full" src="../../images/kids/popular-1.png" alt="">
                    <div class="flex flex-col gap-2 py-4">
                        <h1 class="text-md font-semibold">Air Jordan 4 Retro "Taxi Flip"</h1>
                        <h1 class="text-gray-500 text-md">Big Kids' Shoes</h1>
                        <h1 class="mt-2 text-md font-medium">$150</h1>
                    </div>
                </div>
            </div>
            <!-- 2nd card image -->            
            <div class="w-full">
                <div class="w-[430px]">
                    <img class="w-full" src="../../images/kids/popular-2.png" alt="">
                    <div class="flex flex-col gap-2 py-4">
                        <h1 class="text-md font-semibold">Jordan 12 Retro "Taxi Flip"</h1>
                        <h1 class="text-gray-500 text-md">Big Kids' Shoes</h1>
                        <h1 class="mt-2 text-md font-medium">$90</h1>
                    </div>
                </div>
            </div>
            <!-- 3rd card image -->             
            <div class="w-full">
                <div class="w-[430px]">
                    <img class="w-full" src="../../images/kids/popular-3.png" alt="">
                    <div class="flex flex-col gap-2 py-4">
                        <h1 class="text-md font-semibold">Jordan 12 Retro "Taxi Flip"</h1>
                        <h1 class="text-gray-500 text-md">Big Kids' Shoes</h1>
                        <h1 class="mt-2 text-md font-medium">$75</h1>
                    </div>
                </div>
            </div>
            <!-- 4th card image -->
            <div class="w-full">
                <div class="w-[430px]">
                    <img class="w-full" src="../../images/kids/popular-4.png" alt="">
                    <div class="flex flex-col gap-2 py-4">
                        <h1 class="text-md font-semibold">Air Jordan 4 Retro "Industrial Blue"</h1>
                        <h1 class="text-gray-500 text-md">Big Kids' Shoes</h1>
                        <h1 class="mt-2 text-md font-medium">$90</h1>
                    </div>
                </div>
            </div>
            <!-- 5th card image -->
            <div class="w-full">
                <div class="w-[430px]">
                    <img class="w-full" src="../../images/kids/popular-5.png" alt="">
                    <div class="flex flex-col gap-2 py-4">
                        <h1 class="text-md font-semibold">Air Jordan 4 Retro "Industrial Blue"</h1>
                        <h1 class="text-gray-500 text-md">Big Kids' Shoes</h1>
                        <h1 class="mt-2 text-md font-medium">$70</h1>
                    </div>
                </div>
            </div>
            <!-- 6th card image -->
            <div class="w-full">
                <div class="w-[430px]">
                    <img class="w-full" src="../../images/kids/popular-6.png" alt="">
                    <div class="flex flex-col gap-2 py-4">
                        <h1 class="text-md font-semibold">Air Jordan 4 Retro "Industrial Blue"</h1>
                        <h1 class="text-gray-500 text-md">Big Kids' Shoes</h1>
                        <h1 class="mt-2 text-md font-medium">$55</h1>
                    </div>
                </div>
            </div>
            <!-- 7th card image -->
            <div class="w-full">
                <div class="w-[430px]">
                    <img class="w-full" src="../../images/kids/popular-7.png" alt="">
                    <div class="flex flex-col gap-2 py-4">
                        <h1 class="text-md font-semibold">Air Jordan 4 Retro "Industrial Blue"</h1>
                        <h1 class="text-gray-500 text-md">Big Kids' Shoes</h1>
                        <h1 class="mt-2 text-md font-medium">$150</h1>
                    </div>
                </div>
            </div>
            <!-- 8th card image -->
            <div class="w-full">
                <div class="w-[430px]">
                    <img class="w-full" src="../../images/kids/popular-8.png" alt="">
                    <div class="flex flex-col gap-2 py-4">
                        <h1 class="text-md font-semibold">Air Jordan 4 Retro "Industrial Blue"</h1>
                        <h1 class="text-gray-500 text-md">Big Kids' Shoes</h1>
                        <h1 class="mt-2 text-md font-medium">$160</h1>
                    </div>
                </div>
            </div>
            <!-- 9th card image -->
            <div class="w-full">
                <div class="w-[430px]">
                    <img class="w-full" src="../../images/kids/popular-9.png" alt="">
                    <div class="flex flex-col gap-2 py-4">
                        <h1 class="text-md font-semibold">Air Jordan 4 Retro "Industrial Blue"</h1>
                        <h1 class="text-gray-500 text-md">Big Kids' Shoes</h1>
                        <h1 class="mt-2 text-md font-medium">$100</h1>
                    </div>
                </div>
            </div>
            <!-- 10th card image -->
            <div class="w-full">
                <div class="w-[430px]">
                    <img class="w-full" src="../../images/kids/popular-10.png" alt="">
                    <div class="flex flex-col gap-2 py-4">
                        <h1 class="text-md font-semibold">Air Jordan 4 Retro "Industrial Blue"</h1>
                        <h1 class="text-gray-500 text-md">Big Kids' Shoes</h1>
                        <h1 class="mt-2 text-md font-medium">$85</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Trending's content -->
    <div class="lg:px-14 px-6">
        <!-- content's title "Trending" -->
        <div class="py-4 max-w-[1920px] mx-auto">
            <h1 class="text-2xl font-medium tracking-[0.5px]">Trending</h1>
        </div>
        <!-- card images -->
        <div class="max-w-[1920px] flex flex-col mx-auto text-white gap-4 sm:flex-row">
            <!-- 1st card image (desktop)-->
            <div class="relative w-full lg:block hidden">
            <a class=""><img class="w-full h-full" src="../../images/kids/t-mom-big.png" alt=""></a>
            <div class="absolute left-11 bottom-11">
                <h1>Nike Alphafly 3</h1>
                <h1 class="text-lg mt-1 tracking-wide">Nike Zegama 2</h1>
                <button class="bg-white py-1.5 px-5 rounded-full mt-8 text-black font-medium">Shop</button>
            </div>
            </div>
            <!-- 1st card image (mobile)-->
            <div class="relative w-full lg:hidden block">
            <a class=""><img class="w-full h-full" src="../../images/kids/t-mom-small.png" alt=""></a>
            <div class="absolute left-11 bottom-11">
                <h1>Nike Alphafly 3</h1>
                <h1 class="text-lg mt-1 tracking-wide">Nike Zegama 2</h1>
                <button class="bg-white py-1.5 px-5 rounded-full mt-8 text-black font-medium">Shop</button>
            </div>
            </div>

            <!-- 2nd card image (desktop)-->
            <div class="relative w-full sm:block hidden">
            <a class=""><img class="w-full h-full object-cover " src="../../images/kids/t-skate-big.png" alt=""></a>
            <div class="absolute left-11 bottom-11">
                <h1>Mother's Day</h1>
                <h1 class="text-lg tracking-wide mt-1">Gifts for Together Time</h1>
                <button class="bg-white py-1.5 px-5 rounded-full mt-8 text-black font-medium">Shop</button>
            </div>
            </div>
            <!-- 2nd card image (mobile)-->
            <div class="relative w-full sm:hidden block">
            <a class=""><img class="w-full h-full object-cover " src="../../images/kids/t-skate-small.png" alt=""></a>
            <div class="absolute left-11 bottom-11">
                <h1>Mother's Day</h1>
                <h1 class="text-lg mt-1 tracking-wide">Gifts for Together Time</h1>
                <button class="bg-white py-1.5 px-5 rounded-full mt-8 text-black font-medium">Shop</button>
            </div>
            </div>
        </div>
    </div>
    
    <!-- More to Explore's content -->
    <div class="max-w-[1920px] mx-auto">
        <div class=" p-6 flex items-center justify-between ">
            <h1 class="text-2xl">More to Explore</h1>
        </div>
        <div class="flex gap-6 mb-6 overflow-x-scroll xl:overflow-hidden px-6">
            <div class="w-full">
                <div class="w-[500px] lg:w-[585px]">
                <a href=""><img class="w-full" src="../../images/kids/m-1.png" alt=""></a>
                <h1 class="text-lg my-3">Shoes $70 & Under</h1>
                <a class="pt-12 text-sm font-medium underline">Shop</a>
                </div>
            </div>
            <div class="w-full">
                <div class="w-[500px] lg:w-[585px] ">
                <a href=""><img class="w-full" src="../../images/kids/m-2.png" alt=""></a>
                <h1 class="text-lg my-3">Graphic Tees & Shorts</h1>
                <a class="pt-12 text-sm font-medium underline">Shop</a>
                </div>
            </div>
            <div class="w-full">
                <div class="w-[500px] lg:w-[585px] ">
                <a href=""><img class="w-full" src="../../images/kids/m-3.png" alt=""></a>
                <h1 class="text-lg my-3">Easy On & Off Shoes</h1>
                <a class="pt-12 text-sm font-medium underline">Shop</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Classic Spotlight -->
    <div class="max-w-[1920px] mx-auto p-6 items-center justify-between mt-20">
        <!-- content's title -->
        <h1 class="text-2xl">Classic Spotlight</h1>
        <!-- card images scroll -->
        <div class="mx-auto">
            <div class="flex gap-6 mb-6 overflow-x-scroll">
                <!-- 1st image card -->
                <div class="w-full">
                    <div class="w-[330px] md:w-[385px]">
                        <a href=""><img class="w-full" src="../../images/kids/c-1.png" alt=""></a>
                    </div>
                </div>
                <!-- 2nd image card -->
                <div class="w-full">
                    <div class="w-[330px] md:w-[385px]">
                        <a href=""><img class="w-full" src="../../images/kids/c-2.png" alt=""></a>
                    </div>
                </div>
                <!-- 3rd image card -->
                <div class="w-full">
                    <div class="w-[330px] md:w-[385px]">
                        <a href=""><img class="w-full" src="../../images/kids/c-3.png" alt=""></a>
                    </div>
                </div>
                <!-- 4th image card -->
                <div class="w-full">
                    <div class="w-[330px] md:w-[385px]">
                        <a href=""><img class="w-full" src="../../images/kids/c-4.png" alt=""></a>
                    </div>
                </div>
                <!-- 5th image card -->
                <div class="w-full">
                    <div class="w-[330px] md:w-[385px]">
                        <a href=""><img class="w-full" src="../../images/kids/c-5.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

class KidsPage extends HTMLElement {
    constructor (){
        super()
    }
    connectedCallback(){
        this.innerHTML = createKidsPage();
    }
}

//naming a callback component for "Kids page"
customElements.define("kids-page-content", KidsPage)