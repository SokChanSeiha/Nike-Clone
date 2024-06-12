const createHomePage = () => {
    return`
    <!-- hero section -->
    <div>
      <img src="../../images/home/bigimage.jpg" class="w-full">
      <article class=" mx-auto max-w-[700px] text-center mt-12">
        <h1 class="text-lg">Brooks's Looks</h1>
        <h1 class="text-7xl font-black mb-5">GEAR-UP FOR<br> THE MAJORS</h1>
        <h1>How the golf sensation is gearing up for this season's Majors and beyond.</h1>
        <button class="mt-6 bg-black text-white py-1.5 px-5 rounded-full">Shop the Collection</button>
      </article>
    </div>

    <!-- chevron icons (left, right) -->
    <div>
      <div class="max-w-[1920px] mx-auto p-4 mt-12 flex items-center justify-between ">
        <h1 class="text-2xl">Trending</h1>
        <div class="flex gap-5">
          <button class="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center">
            <img src="../../images/home/nextleft.png" class="w-3">
          </button>
          <button class="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
            <img src="../../images/home/nextright.png" class="w-3">
          </button>
        </div>
      </div>
    </div>

    <!-- trending content -->
    <div>
      <div class="max-w-[1920px] mx-auto flex gap-6 mb-6 overflow-x-scroll px-12">
        <!-- 1st image card -->
        <div class="w-full">
          <div class="sm:w-[630px] w-[400px]">
            <img class="w-full h-auto" src="../../images/home/trending1.jpg" alt="">
            <h1 class="text-lg my-3 mb-9"> Rep Your Team In March And Beyond</h1>
          </div>
        </div>
        <!-- 2nd image card -->
        <div class="w-full">
          <div class="sm:w-[630px] w-[400px] ">
            <a href=""><img class="w-full" src="../../images/home/trending2.jpg" alt=""></a>
            <h1 class="text-lg my-3 mb-9"> Air Max Dn</h1>
          </div>
        </div>
        <!-- 3rd image card -->
        <div class="w-full">
          <div class="sm:w-[630px] w-[400px] ">
            <a href=""><img class="w-full" src="../../images/home/trending3.jpg" alt=""></a>
            <h1 class="text-lg my-3 mb-9"> Fast Foward. Rewind.</h1>
          </div>
        </div>
        <!-- 4th image card -->
        <div class="w-full">
          <div class="sm:w-[630px] w-[400px] ">
            <a href=""><img class="w-full" src="../../images/home/trending4.jpg" alt=""></a>
            <h1 class="text-lg my-3 mb-9"> Nike Motiva:For All Walks</h1>
          </div>
        </div>
        <!-- 5th image card -->
        <div class="w-full">
          <div class="sm:w-[630px] w-[400px] ">
            <a href=""><img class="w-full" src="../../images/home/trending5.png" alt=""></a>
            <h1 class="text-lg my-3 mb-9"> Expression In Mission</h1>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured content-->
    <div class="mt-10">
      <!-- content title "Feature" -->
      <div class="max-w-[1920px] mx-auto p-4 mt-12 flex items-start">
        <h1 class="text-2xl">Featured</h1>
      </div>
      <!-- content card images -->
      <div>
        <div class="max-w-[1920px] flex flex-col mx-auto text-white  sm:flex-row">
          <!-- 1st picture (desktop)-->
          <div class="relative w-full md:block hidden">
            <a class=""><img class="w-full h-full" src="../../images/home/f-run-lg.png" alt=""></a>
            <div class="absolute left-11 bottom-11">
              <h1>Nike Alphafly 3</h1>
              <h1 class="text-lg mt-1 tracking-wide">Nike Zegama 2</h1>
              <button class="bg-white py-1.5 px-5 rounded-full mt-8 text-black font-medium">Shop</button>
            </div>
          </div>
          <!-- 1st picture (mobile)-->
          <div class="relative w-full md:hidden block">
            <a class=""><img class="w-full h-full" src="../../images/home/f-run-sm.png" alt=""></a>
            <div class="absolute left-11 bottom-11">
              <h1>Nike Alphafly 3</h1>
              <h1 class="text-lg mt-1 tracking-wide">Nike Zegama 2</h1>
              <button class="bg-white py-1.5 px-5 rounded-full mt-8 text-black font-medium">Shop</button>
            </div>
          </div>
          <!-- 2nd picture (desktop)-->
          <div class="relative w-full md:block hidden">
            <a class=""><img class="w-full h-full object-cover " src="../../images/home/f-mom-lg.png" alt=""></a>
            <div class="absolute left-11 bottom-11">
              <h1>Mother's Day</h1>
              <h1 class="text-lg tracking-wide mt-1">Gifts for Together Time</h1>
              <button class="bg-white py-1.5 px-5 rounded-full mt-8 text-black font-medium">Shop</button>
            </div>
          </div>
          <!-- 2nd picture (mobile)-->
          <div class="relative w-full md:hidden block">
            <a class=""><img class="w-full h-full object-cover " src="../../images/home/f-mom-sm.png" alt=""></a>
            <div class="absolute left-11 bottom-11">
              <h1>Mother's Day</h1>
              <h1 class="text-lg mt-1 tracking-wide">Gifts for Together Time</h1>
              <button class="bg-white py-1.5 px-5 rounded-full mt-8 text-black font-medium">Shop</button>
            </div>
          </div>
        </div>

        <div class="max-w-[1920px] flex flex-col mx-auto text-white  sm:flex-row">
          <!-- 3rd picture (desktop)-->
          <div class="relative w-full md:block hidden">
            <a class=""><img class="w-full h-full" src="../../images/home/f-women-lg.png" alt=""></a>
            <div class="absolute left-11 bottom-11">
              <h1>Make Your Move</h1>
              <h1 class="text-lg mt-1 tracking-wide">New Fitness Essentials</h1>
              <button class="bg-white py-1.5 px-5 rounded-full mt-8 text-black font-medium">Shop</button>
            </div>
          </div>
          <!-- 3rd picture (mobile)-->
          <div class="relative w-full md:hidden block">
            <a class=""><img class="w-full h-full" src="../../images/home/f-women-sm.png" alt=""></a>
            <div class="absolute left-11 bottom-11">
              <h1>Make Your Move</h1>
              <h1 class="text-lg mt-1 tracking-wide">New Fitness Essentials</h1>
              <button class="bg-white py-1.5 px-5 rounded-full mt-8 text-black font-medium">Shop</button>
            </div>
          </div>
          <!-- 4th picture (desktop)-->
          <div class="relative w-full md:block hidden">
            <a class=""><img class="w-full h-full object-cover " src="../../images/home/f-man-lg.png" alt=""></a>
            <div class="absolute left-11 bottom-11">
              <h1>Jordan New Arrivals</h1>
              <h1 class="text-lg mt-1 tracking-wide">Workout Styles<span><br></span>for summer</h1>
              <button class="bg-white py-1.5 px-5 rounded-full mt-8 text-black font-medium">Shop</button>
            </div>
          </div>
          <!-- 4th picture (mobile)-->
          <div class="relative w-full md:hidden block">
            <a class=""><img class="w-full h-full object-cover " src="../../images/home/f-man-sm.png" alt=""></a>
            <div class="absolute left-11 bottom-11">
              <h1>Jordan New Arrivals</h1>
              <h1 class="text-lg mt-1 tracking-wide">Workout Styles<span><br></span>for summer</h1>
              <button class="bg-white py-1.5 px-5 rounded-full mt-8 text-black font-medium">Shop</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- New this week's content-->
    <div class="max-w-[1920px] mx-auto w-full lg:px-10 flex flex-col mt-6">
      <article class="sm:mx-auto max-w-7xl flex flex-col gap-6 py-8">
        <!-- content's title: NEW THIS WEEK -->
        <h1 class="mx-auto text-4xl lg:text-5xl font-black tracking-[-2px] oswald">NEW THIS WEEK</h1>
        <!-- button area : "Shop New Arrivals"-->
        <div class="mx-auto pb-6">
          <button class=" bg-black rounded-full px-[17px] py-[7px] flex mt-2 hover:bg-gray-500">
            <h1 class=" text-white">Shop New Arrivals</h1>
          </button>
        </div>
      </article>
      <!-- image of "New this week" -->
      <div class="w-full mx-auto">
        <img src="../../images/home/newSM.png" class="block sm:hidden w-full" alt="">
        <img src="../../images/home/newLG.png" class="hidden sm:block w-full" alt="">
      </div>
    </div>
    `
}

class HomePage extends HTMLElement {
    constructor (){
        super()
    }
    connectedCallback(){
        this.innerHTML = createHomePage();
    }
}

//naming a callback component for "Home page"
customElements.define("home-page-content", HomePage)