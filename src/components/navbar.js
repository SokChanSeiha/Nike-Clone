const navDesign = () => {
  return `
    <!--header-->
    <div class="bg-gray-100 lg:block hidden">
      <div class="flex justify-between max-w-[1920px] mx-auto items-center pl-9 px-2 py-1">
        <!-- left part-->
        <div class="flex gap-1.5 items-center">
          <a href=""><img src="../../images/layout/manshadow.png" alt="" class="w-8"></a>
          <a href=""><img src="../../images/layout/Converse_(shoe_company)-Icon-Logo.wine.svg" alt="" class="w-11"></a>
        </div>
        <!-- right part-->
        <div class="flex divide-x divide-black text-xs font-semibold">
          <a class="px-3.5" href="">Find a Store</a>
          <a class="px-3.5" href="">Help</a>
          <a class="px-3.5" href="">Join Us</a>
          <a class="px-3.5" href="">Sign In</a>
        </div>
      </div>
    </div>
    
    <!-- NavBar -->
    <div class="lg:block hidden border border-b duration-1000 ease-out">
      <div class=" flex justify-between items-center max-w-[1920px] mx-auto  px-5 ">
        <!-- nike logo -->
        <a href="../../pages/home/home.html" class="pl-5"><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"
            class="w-12 object-contain" alt=""></a>
        <!-- list -->
        <ul class="flex text-md  font-medium gap-7 py-4 mx-auto pl-36 lg:ml-52 xl:ml-80">
          <li class="cursor-pointer group hover:underline text-nowrap">New & Featured
            <div
              class="w-full max-h-[0px] group-hover:max-h-[1300px] duration-700 left-0 fixed bg-white  flex gap-10 pointer-events-none group-hover:pointer-events-auto">
              <div class="flex w-full max-w-[1200px] px-10 mx-auto justify-between group overflow-hidden ">
                <div class="my-8 flex gap-20">
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Limited Time</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Sale: Up to 50% Off</li>
                  </ul>
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">New & Featured</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">New Arrivals</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Best Sellers</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">New & Upcoming Drops</li>
                  </ul>
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Trending</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">ACG</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Lifestyle Running</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">The Color Shop</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Shop Sport</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">New in Jordan Shoes</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Mother's Day Shop</li>
                  </ul>
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Shop Classics</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Dunk</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Air Jordan 1</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Air Force</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Air Max</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Blazer</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Vomero</li>
                  </ul>
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Explore</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Running Shoe Finder</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">SNKRS Launch Calendar</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Bra Finder</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Product Care</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Member Rewards</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Buying Guides</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="cursor-pointer group hover:underline">Men
            <div
              class="w-full max-h-[0px] group-hover:max-h-[1300px] duration-100 left-0 fixed bg-white ease-in flex gap-10 pointer-events-none group-hover:pointer-events-auto ">
              <div class="flex w-full max-w-[1200px] px-10 mx-auto justify-between group overflow-hidden">
                <div class="my-8 flex gap-20">
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Limited Time</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Sale: Up to 50% Off</li>
                  </ul>
                  <div class="flex flex-col gap-14">
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">New & Featured</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">New Arrivals</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Best Sellers</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">New & Upcoming Drops</li>
                    </ul>
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">Collections</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Trail Running Essentials
                      </li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">New in Basketball</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">ACG Essentials</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Nike Life</li>
                    </ul>
                  </div>
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Shoes</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">All Shoes</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Lifestyle</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Jordan</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Dunk</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Lifestyle Running</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Air Max</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Air Force 1</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Training & Gym</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Basketball</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Running</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Nike SB</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Sandals & Slides</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Nike by You</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Shoes $100 & Under</li>
                  </ul>
                  <div class="flex flex-col gap-14">
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">Clothing</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">All Clothing</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Hoodies & Sweatshirts</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Pants & Tights</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Jackets & Vests</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Tops & T-Shirts</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Shorts</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Matching Sets</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Big & Tall</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Jordan</li>
                    </ul>
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">Accessories</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">All Accessories</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Bags & Backpacks</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Hats & Headwear</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Socks</li>
                    </ul>
                  </div>
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Shop by Sport</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Basketball</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Running</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Golf</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Soccer</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Training & Gym</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Tennis</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Baseball</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Football</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Trail Running</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Swimming</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Pickleball</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Fan Gear</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="cursor-pointer group hover:underline">
          <a href="../../pages/women/women.html">women</a>
            <div
              class="w-full max-h-[0px] group-hover:max-h-[1300px] duration-700 left-0 fixed bg-white ease-in-out flex gap-10 pointer-events-none group-hover:pointer-events-auto ">
              <div class="flex w-full max-w-[1200px] px-10 mx-auto justify-between group overflow-hidden">
                <div class="my-8 flex gap-20">
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Limited Time</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Sale: Up to 50% Off</li>
                  </ul>
                  <div class="flex flex-col gap-14">
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">New & Featured</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">New Arrivals</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Best Sellers</li>
                    </ul>
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">Collections</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">The Color Shop</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Zenvy Collection</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Loungewear</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Trail Running</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Essentials</li>
                    </ul>
                  </div>
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Shoes</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">All Shoes</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Lifestyle</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Jordan</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Dunk</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Lifestyle Running</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Air Max</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Air Force 1</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Training & Gym</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Basketball</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Running</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Nike SB</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Sandals & Slides</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Nike by You</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Shoes $100 & Under</li>
                  </ul>
                  <div class="flex flex-col gap-14">
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">Clothing</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">All Clothing</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Hoodies & Sweatshirts</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Shorts</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Pants</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Leggings</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Jackets & Vests</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Tops & T-Shirts</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Skirts & Dresses</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Bras</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Matching Sets</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Plus size</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Jordan</li>
                    </ul>
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">Accessories</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">All Accessories</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Bags & Backpacks</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Hats & Headwear</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Socks</li>
                    </ul>
                  </div>
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Shop by Sport</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Basketball</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Running</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Golf</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Soccer</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Fitness</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Tennis</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Yoga</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Trail Running</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Softball</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Swimming</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Pickleball</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Fan Gear</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="hidden xl:block cursor-pointer group hover:underline"><a href="../../pages/kids/kids.html">kids</a>
            <div
              class="w-full max-h-[0px] group-hover:max-h-[1300px] duration-700 left-0 fixed bg-white ease-in-out flex gap-10 pointer-events-none group-hover:pointer-events-auto ">
              <div class="flex w-full max-w-[1200px] px-10 mx-auto justify-between group overflow-hidden">
                <div class="my-8 flex gap-20">
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Limited Time</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Sale: Up to 50% Off</li>
                  </ul>
                  <div class="flex flex-col gap-14">
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">New & Featured</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">New Arrivals</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Best Sellers</li>
                    </ul>
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">Collections</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">EasyOn</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Teen Essentials</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Graphic Tees & Shorts</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Skate x Lifestyle</li>
                    </ul>
                  </div>
                  <div class="flex flex-col gap-14">
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">Shoes by Size</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Big Kids (1Y - 7Y)</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Little Kids (8C - 3Y)</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Baby & Toddler (1C - 10C)
                      </li>
                    </ul>
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">All Shoes</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Lifestyle</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Jordan</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Dunk</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Air Max</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Air Force 1</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Basketball</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Running</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Sandals & Slides</li>
                    </ul>
                  </div>
                  <div class="flex flex-col gap-14">
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">Clothing by Size</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Big Kids (XS - XL)</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Little Kids (4 - 7)</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Baby & Toddler (OM - 4T)
                      </li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Extended Sizing</li>
                    </ul>
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">All Clothing</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Hoodies & Sweatshirts</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Shorts</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Pants & Tights</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Jackets & Vests</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Tops & T-Shirts</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Skirts & Dresses</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Bras</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Matching Sets</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Jordan</li>
                    </ul>
                  </div>
                  <div class="flex flex-col gap-14">
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">Accessories</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">All Accessories</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Bags & Backpacks</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Hats & Headwear</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Socks</li>
                    </ul>
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">Shop by Sport</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Basketball</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Running</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Golf</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Soccer</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Baseball</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Football</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Softball</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Tennis</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Dance</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Swimming</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Skateboarding</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Fan Gear</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="hidden xl:block cursor-pointer group hover:underline">Jordan
            <div
              class="w-full max-h-[0px] group-hover:max-h-[1300px] duration-700 left-0 fixed bg-white ease-in-out flex gap-10 pointer-events-none group-hover:pointer-events-auto ">
              <div class="flex w-full max-w-[1200px] px-10 mx-auto justify-between group overflow-hidden">
                <div class="my-8 flex gap-20">
                  <div class="flex flex-col gap-10">
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">Limited Time</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Sale: Up to 50% Off</li>
                    </ul>
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">New & Featured</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">New Arrivals</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Best Sellers</li>
                    </ul>
                    <ul class="flex flex-col gap-1">
                      <li class="text-[15.5px] mb-2">Collections</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Heat Check</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Trending Colors</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Golf Essentials</li>
                      <li class="text-[14.5px] text-gray-500  hover:text-black">Girls Lemonade Stand</li>
                    </ul>
                  </div>
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Men</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Shop All</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Shoes</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">AJ1</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Clothing</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Basketball</li>
                  </ul>
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Women</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Shop All</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Shoes</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">AJ1</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Clothing</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Basketball</li>
                  </ul>
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Kids</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Shop All</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Shoes</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">AJ1</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Clothing</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Basketball</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Big Kids</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Little Kids</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Baby & Toddler</li>
                  </ul>
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Accessories</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Shop All</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Bags & Backpacks</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Hats & Headwear</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="hidden xl:block cursor-pointer group hover:underline">Sale
            <div
              class="w-full max-h-[0px] group-hover:max-h-[1300px] duration-700 left-0 fixed bg-white ease-in-out flex gap-10 pointer-events-none group-hover:pointer-events-auto ">
              <div class="flex w-full max-w-[1200px] px-10 mx-auto justify-between group overflow-hidden">
                <div class="my-8 flex gap-40">
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Sale: Up to 50% Off</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Sale Shoes</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Sale Clothing</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Sale Accessories</li>
                  </ul>
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Men</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Shoes</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Clothing</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Accessories</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Shop All</li>
                  </ul>
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Women</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Shoes</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Clothing</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Accessories</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Shop All</li>
                  </ul>
                  <ul class="flex flex-col gap-1">
                    <li class="text-[15.5px] mb-2">Kids</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Shoes</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Clothing</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Accessories</li>
                    <li class="text-[14.5px] text-gray-500  hover:text-black">Shop All</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="flex items-center gap-8">
          <!-- search -->
          <div class="flex relative items-center gap-8 mx-auto">
            <input class="bg-gray-100 w-44 py-2 pl-12 rounded-full hover:bg-gray-200" placeholder="search">
            <a href="" class="absolute left-2 hover:bg-gray-300 p-[9px] rounded-full">
              <img src="../../images/layout/glass.png" alt="" class="w-6">
            </a>
          </div>
          <!-- logo -->
          <div class="flex gap-5  ">
            <a href=""><img src="../../images/layout/heart.png" class="w-6" alt=""></a>
            <a href=""><img src="../../images/layout/market.png" class="w-6" alt=""></a>
          </div>
        </div>
      </div>
    </div>
    <!-- small header -->
    <div class="lg:hidden">
      <div class=" flex justify-between items-center max-w-[1920px] mx-auto h-16  px-5">
        <!-- nike logo -->
        <a class="pl-5" href="../../pages/home/home.html"><img src="../../images/layout/nikelogo.png" class="w-[70px]" alt=""></a>
  
        <!-- search -->
        <div class="flex">
          <div class="flex gap-5 mx-4">
            <a class="hover:bg-gray-200 size-9 rounded-full flex justify-center items-center" href="">
              <img src="../../images/layout/glass.png" class="size-7">
            </a>
            <a class="hover:bg-gray-200 size-9 rounded-full flex justify-center items-center" href="">
              <img src="../../images/layout/market.png" class="size-6">
            </a>
            <a class="hover:bg-gray-200 size-9 rounded-full flex justify-center items-center" href="">
              <img src="../../images/layout/user.png" class="size-6">
            </a>
          </div>
          <button id="hamburger"><img class="size-[20px]" src="../../images/layout/hambuger.png">
    </button>
        </div>
      </div>
    </div>
  
  <div id="hamburger-content" class="block lg:hidden top-0 bg-white z-20 w-[400px] h-screen p-12 fixed left-[100%] duration-500">
  <button id="hamburger-close" class=" my-6 rounded-full text-2xl">X</button>  
  <div class="flex flex-col gap-3">
        <a class="text-2xl" href="#">New Featured</a>
        <a class="text-2xl" href="#">Men</a>
        <a class="text-2xl" href="../../pages/women/women.html">Women</a>
        <a class="text-2xl" href="../../pages/kids/kids.html">Kids</a>
        <a class="text-2xl" href="#">Jordan</a>
        <a class="text-2xl" href="#">Sale</a>
    </div>

    <div class="flex flex-col py-12 gap-4">
      <div class="flex">
        <img src=".../../../../images/layout/manshadow.png" class="w-[45px]">
        <span>Jordan</span>
      </div>
      <div class="flex items-center">
        <img src=".../../../../images/layout/Converse_(shoe_company)-Icon-Logo.wine.svg" class="w-[45px]">
        <span>Converse</span>
      </div>
    </div>

    <div class="max-w-[250px] py-6">
        <p class="text-gray-500 text-xl">Become a nike Member for the best products, inspiration and stories in sport. <span class="text-black">Learn more</span></p>
    </div>

    <div class="flex gap-4">
        <button class="rounded-full text-lg bg-black text-white px-4 py-1">Join Us</button>
        <button class="rounded-full text-lg bg-white text-black px-4 py-1 border border-gray">Sign In</button>
    </div>

</div>
  
<div id="overlayBG" class="hidden blur-lg top-0 fixed  w-full h-screen z-10"></div>
    `
}

export class NavDesign extends HTMLElement {
  connectedCallback() {
    this.innerHTML = navDesign();
    const hamburgerBTN = document.querySelector("#hamburger");
    const hambugerContent = document.querySelector("#hamburger-content");
    const hamburgerClose = document.querySelector("#hamburger-close");
    const overlay = document.querySelector(".blurPage");

    hamburgerBTN.addEventListener("click", () => {
      hambugerContent.classList.toggle("left-[100%]");
      hambugerContent.classList.toggle("left-[60%]");
      overlay.classList.toggle("blur-sm");


    })
    hamburgerClose.addEventListener("click", () => {
      hambugerContent.classList.toggle("left-[100%]");
      hambugerContent.classList.toggle("left-[60%]");
      overlay.classList.toggle("blur-sm");
    })

  }
}
customElements.define("navbar-component", NavDesign);