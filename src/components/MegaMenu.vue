
<template>
    <div
        class="menu-init"
        :class="{ 'js-open': isOpen }"
        id="navigation1"
        @click="toggleMenu"
    >

        <button
            class="btn btn--icon toggle-mega-text toggle-button"
            :class="{ 'js-open': isMegaTextOpen }" @click="toggleMegaText"
            type="button">M</button>

        <!--====== Menu ======-->
        <div class="ah-lg-mode">

            <span class="ah-close" @click="closeMenu">✕ Close</span>

            <!--====== List ======-->
            <ul class="ah-list">
                <li class="has-dropdown">

                    <span class="mega-text" :class="{ 'js-open': isMegaTextOpen }" @click="toggleMegaText">M</span>

                    <!--====== Mega Menu ======-->

                    <span
                        class="js-menu-toggle"
                        :class="{ 'js-toggle-mark': isDropdownOpen }"
                        @click.prevent="toggleDropdown"
                    ></span>
                    <div
                        class="mega-menu"
                        :style="{ display: isMegaTextOpen ? 'block' : 'none' }"
                    >
                        <div class="mega-menu-wrap">
                            <div class="mega-menu-list">
                                <ul>
                                    <li class="js-active">

                                        <a href="shop-side-version-2.html"><i class="fas fa-tv u-s-m-r-6"></i>

                                            <span>Electronics</span></a>

                                        <span class="js-menu-toggle js-toggle-mark"></span></li>
                                    <li
                                        v-for="(item, index) in megaMenuItems"
                                        :key="index"
                                        @touchstart="toggleMegaMenuItem(index)"
                                        :class="{ 'js-active': activeMegaMenuItemIndex === index }"
                                    >

                                        <a href="shop-side-version-2.html">
                                            <i class="fas fa-female u-s-m-r-6"></i>

                                            <span>{{ item }}</span></a>

                                        <span class="js-menu-toggle"  @click="toggleDropdown"></span></li>
                                    <li>

                                        <a href="shop-side-version-2.html"><i class="fas fa-male u-s-m-r-6"></i>

                                            <span>Men's Clothing</span></a>

                                        <span class="js-menu-toggle"  @click="toggleDropdown"></span></li>
                                    <li>

                                        <a href="index-2.html"><i class="fas fa-utensils u-s-m-r-6"></i>

                                            <span>Food & Supplies</span></a>

                                        <span class="js-menu-toggle" @click="toggleDropdown"></span></li>
                                    <li>

                                        <a href="index-2.html"><i class="fas fa-couch u-s-m-r-6"></i>

                                            <span>Furniture & Decor</span></a>

                                        <span class="js-menu-toggle" @click="toggleDropdown"></span></li>
                                    <li>

                                        <a href="index-2.html"><i class="fas fa-football-ball u-s-m-r-6"></i>

                                            <span>Sports & Game</span></a>

                                        <span class="js-menu-toggle" @click="toggleDropdown"></span></li>
                                    <li>

                                        <a href="index-2.html"><i class="fas fa-heartbeat u-s-m-r-6"></i>

                                            <span>Beauty & Health</span></a>

                                        <span class="js-menu-toggle" @click="toggleDropdown"></span></li>
                                </ul>
                            </div>

                            <!--====== Electronics ======-->
                            <div class="mega-menu-content js-active">

                                <!--====== Mega Menu Row ======-->
                                <div class="row">
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">3D PRINTER & SUPPLIES</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">3d Printer</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">3d Printing Pen</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">3d Printing Accessories</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">3d Printer Module Board</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">HOME AUDIO & VIDEO</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">TV Boxes</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">TC Receiver & Accessories</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Display Dongle</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Home Theater System</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">MEDIA PLAYERS</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Earphones</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Mp3 Players</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Speakers & Radios</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Microphones</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">VIDEO GAME ACCESSORIES</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Nintendo Video Games Accessories</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Sony Video Games Accessories</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Xbox Video Games Accessories</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <!--====== End - Mega Menu Row ======-->
                                <br>

                                <!--====== Mega Menu Row ======-->
                                <div class="row">
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">SECURITY & PROTECTION</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Security Cameras</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Alarm System</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Security Gadgets</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">CCTV Security & Accessories</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">PHOTOGRAPHY & CAMERA</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Digital Cameras</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Sport Camera & Accessories</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Camera Accessories</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Lenses & Accessories</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">ARDUINO COMPATIBLE</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Raspberry Pi & Orange Pi</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Module Board</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Smart Robot</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Board Kits</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">DSLR Camera</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Nikon Cameras</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Canon Camera</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Sony Camera</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">DSLR Lenses</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <!--====== End - Mega Menu Row ======-->
                                <br>

                                <!--====== Mega Menu Row ======-->
                                <div class="row">
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">NECESSARY ACCESSORIES</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Flash Cards</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Memory Cards</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Flash Pins</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Compact Discs</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-9 mega-image">
                                        <div class="mega-banner">

                                            <a class="u-d-block" href="shop-side-version-2.html">

                                                <img class="u-img-fluid u-d-block" src="" alt=""></a></div>
                                    </div>
                                </div>
                                <!--====== End - Mega Menu Row ======-->
                            </div>
                            <!--====== End - Electronics ======-->


                            <!--====== Women ======-->
                            <div class="mega-menu-content">

                                <!--====== Mega Menu Row ======-->
                                <div class="row">
                                    <div class="col-lg-6 mega-image">
                                        <div class="mega-banner">

                                            <a class="u-d-block" href="shop-side-version-2.html">

                                                <img class="u-img-fluid u-d-block" src="" alt=""></a></div>
                                    </div>
                                    <div class="col-lg-6 mega-image">
                                        <div class="mega-banner">

                                            <a class="u-d-block" href="shop-side-version-2.html">

                                                <img class="u-img-fluid u-d-block" src="" alt=""></a></div>
                                    </div>
                                </div>
                                <!--====== End - Mega Menu Row ======-->
                                <br>

                                <!--====== Mega Menu Row ======-->
                                <div class="row">
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">HOT CATEGORIES</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Dresses</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Blouses & Shirts</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">T-shirts</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Rompers</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">INTIMATES</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Bras</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Brief Sets</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Bustiers & Corsets</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Panties</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">WEDDING & EVENTS</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Wedding Dresses</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Evening Dresses</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Prom Dresses</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Flower Dresses</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">BOTTOMS</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Skirts</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Shorts</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Leggings</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Jeans</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <!--====== End - Mega Menu Row ======-->
                                <br>

                                <!--====== Mega Menu Row ======-->
                                <div class="row">
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">OUTWEAR</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Blazers</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Basics Jackets</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Trench</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Leather & Suede</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">JACKETS</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Denim Jackets</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Trucker Jackets</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Windbreaker Jackets</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Leather Jackets</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">ACCESSORIES</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Tech Accessories</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Headwear</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Baseball Caps</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Belts</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">OTHER ACCESSORIES</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Bags</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Wallets</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Watches</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Sunglasses</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <!--====== End - Mega Menu Row ======-->
                                <br>

                                <!--====== Mega Menu Row ======-->
                                <div class="row">
                                    <div class="col-lg-9 mega-image">
                                        <div class="mega-banner">

                                            <a class="u-d-block" href="shop-side-version-2.html">

                                                <img class="u-img-fluid u-d-block" src="" alt=""></a></div>
                                    </div>
                                    <div class="col-lg-3 mega-image">
                                        <div class="mega-banner">

                                            <a class="u-d-block" href="shop-side-version-2.html">

                                                <img class="u-img-fluid u-d-block" src="" alt=""></a></div>
                                    </div>
                                </div>
                                <!--====== End - Mega Menu Row ======-->
                            </div>
                            <!--====== End - Women ======-->


                            <!--====== Men ======-->
                            <div class="mega-menu-content">

                                <!--====== Mega Menu Row ======-->
                                <div class="row">
                                    <div class="col-lg-4 mega-image">
                                        <div class="mega-banner">

                                            <a class="u-d-block" href="shop-side-version-2.html">

                                                <img class="u-img-fluid u-d-block" src="" alt=""></a></div>
                                    </div>
                                    <div class="col-lg-4 mega-image">
                                        <div class="mega-banner">

                                            <a class="u-d-block" href="shop-side-version-2.html">

                                                <img class="u-img-fluid u-d-block" src="" alt=""></a></div>
                                    </div>
                                    <div class="col-lg-4 mega-image">
                                        <div class="mega-banner">

                                            <a class="u-d-block" href="shop-side-version-2.html">

                                                <img class="u-img-fluid u-d-block" src="" alt=""></a></div>
                                    </div>
                                </div>
                                <!--====== End - Mega Menu Row ======-->
                                <br>

                                <!--====== Mega Menu Row ======-->
                                <div class="row">
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">HOT SALE</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">T-Shirts</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Tank Tops</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Polo</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Shirts</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">OUTWEAR</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Hoodies</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Trench</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Parkas</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Sweaters</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">BOTTOMS</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Casual Pants</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Cargo Pants</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Jeans</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Shorts</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">UNDERWEAR</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Boxers</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Briefs</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Robes</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Socks</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <!--====== End - Mega Menu Row ======-->
                                <br>

                                <!--====== Mega Menu Row ======-->
                                <div class="row">
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">JACKETS</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Denim Jackets</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Trucker Jackets</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Windbreaker Jackets</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Leather Jackets</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">SUNGLASSES</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Pilot</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Wayfarer</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Square</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Round</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">ACCESSORIES</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Eyewear Frames</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Scarves</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Hats</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Belts</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul>
                                            <li class="mega-list-title">

                                                <a href="shop-side-version-2.html">OTHER ACCESSORIES</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Bags</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Wallets</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Watches</a></li>
                                            <li>

                                                <a href="shop-side-version-2.html">Tech Accessories</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <!--====== End - Mega Menu Row ======-->
                                <br>

                                <!--====== Mega Menu Row ======-->
                                <div class="row">
                                    <div class="col-lg-6 mega-image">
                                        <div class="mega-banner">

                                            <a class="u-d-block" href="shop-side-version-2.html">

                                                <img class="u-img-fluid u-d-block" src="" alt=""></a></div>
                                    </div>
                                    <div class="col-lg-6 mega-image">
                                        <div class="mega-banner">

                                            <a class="u-d-block" href="shop-side-version-2.html">

                                                <img class="u-img-fluid u-d-block" src="" alt=""></a></div>
                                    </div>
                                </div>
                                <!--====== End - Mega Menu Row ======-->
                            </div>
                            <!--====== End - Men ======-->


                            <!--====== No Sub Categories ======-->
                            <div class="mega-menu-content">
                                <h5>No Categories</h5>
                            </div>
                            <!--====== End - No Sub Categories ======-->


                            <!--====== No Sub Categories ======-->
                            <div class="mega-menu-content">
                                <h5>No Categories</h5>
                            </div>
                            <!--====== End - No Sub Categories ======-->


                            <!--====== No Sub Categories ======-->
                            <div class="mega-menu-content">
                                <h5>No Categories</h5>
                            </div>
                            <!--====== End - No Sub Categories ======-->


                            <!--====== No Sub Categories ======-->
                            <div class="mega-menu-content">
                                <h5>No Categories</h5>
                            </div>
                            <!--====== End - No Sub Categories ======-->
                        </div>
                    </div>
                    <!--====== End - Mega Menu ======-->
                </li>
            </ul>
            <!--====== End - List ======-->
        </div>
        <!--====== End - Menu ======-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            isDropdownOpen: false,
            isMegaTextOpen: false,
            isMegaMenuOpen: false,

            megaMenuItems: ['Women\'s Clothing', 'Men\'s Clothing', 'Accessories'],
            activeMegaMenuItemIndex: null
        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        closeMenu() {
            this.isOpen = false;
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        selectMegaMenuItem(index) {
            this.isMegaMenuOpen = true;
            this.activeMegaMenuItemIndex = index;
        },
        toggleMegaMenuItem(index) {
            console.log(index)
            if (this.activeMegaMenuItemIndex === index) {
                this.activeMegaMenuItemIndex = null;
            } else {
                this.activeMegaMenuItemIndex = index;
            }
        },
        toggleMegaText() {
            this.isMegaTextOpen = !this.isMegaTextOpen;
        },
    }
}
</script>
