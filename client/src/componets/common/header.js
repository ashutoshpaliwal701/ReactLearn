import React from "react";



const Header = () =>{
    return(<>
    <header className="bg-primary-blue fixed top-0 py-2.5 w-full z-10">

{/* <!-- navbar container --> */}
<div className="w-full sm:w-9/12 px-4 m-auto flex justify-between items-center relative">

    {/* <!-- logo & search container --> */}
    <div className="flex items-center flex-1">
    <a className="h-7 mr-4" href="/Flipkart/public/index.html">
        <img className="h-full w-full object-contain" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png" alt=""/>
    </a>

    {/* <!-- search container --> */}
    <div className="w-9/12 px-4 py-1.5 hidden sm:flex justify-between items-center shadow-md bg-white rounded-sm">
        <input className="text-sm flex-1 outline-none border-none placeholder-gray-500" type="text" placeholder="Search for products, brands and more"/>
        <span className="material-icons text-primary-blue">search</span>
    </div>
    {/* <!-- search container --> */}
    </div>
    {/* <!-- logo & search container --> */}

    {/* <!-- right navs --> */}
    <div className="flex items-center justify-between gap-7 relative">
        <span className="userDropDown flex items-center text-white font-medium gap-1 cursor-pointer">Jhon
            <span className="material-icons text-sm transition-transform duration-100">expand_more</span>
        </span>

       {/* <!-- dropdown navbar hover tabs --> */}
       <div className="userDropDownMenu hidden absolute w-60 -left-24 ml-2 top-9 bg-white shadow-2xl rounded flex-col text-sm">
           <a className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t" href="profile.html">
                <span className="material-icons md-18 text-primary-blue">account_circle</span>
                My Profile
           </a>
           <a className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50" href="#">
                <span className="material-icons md-18 text-primary-blue">offline_bolt</span>
                Supercoin Zone
           </a>
           <a className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50" href="https://www.flipkart.com/plus/all-offers">
                <span className="material-icons md-18 text-primary-blue">add_circle</span>
                Flipkart Plus Zone
           </a>
           <a className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50" href="orders.html">
                <span className="material-icons md-18 text-primary-blue">shopping_bag</span>
                Orders
           </a>
           <a className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50" href="wishlist.html">
                <span className="material-icons md-18 text-primary-blue">favorite</span>
                Wishlist
           </a>
           <a className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50" href="#">
                <span className="material-icons md-18 text-primary-blue">chat</span>
                My Chats
           </a>
           <a className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50" href="https://www.flipkart.com/account/rewards">
                <span className="material-icons md-18 text-primary-blue">redeem</span>
                Coupons
           </a>
           <a className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50" href="#">
                <span className="material-icons md-18 text-primary-blue">account_balance_wallet</span>
                Gift Cards
           </a>
           <a className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50" href="#">
                <span className="material-icons md-18 text-primary-blue">notifications</span>
                Notifications
           </a>
           <a className="pl-3 py-3.5 flex gap-3 items-center hover:bg-gray-50 rounded-b" href="#">
                <span className="material-icons md-18 text-primary-blue">power_settings_new</span>
                Logout
           </a>
           <div className="absolute right-1/2 -top-2.5">
                <div className="arrow_down"></div>
           </div>
       </div>
       {/* <!-- dropdown navbar hover tabs --> */}

        <span className="moreDropDown hidden sm:flex items-center text-white font-medium gap-1 cursor-pointer">More
            <span className="material-icons text-sm transition-transform duration-100">expand_more</span>
        </span>

        {/* <!-- dropdown navbar hover tabs --> */}
        <div className="moreDropDownMenu hidden absolute w-60 -right-2 top-9 bg-white shadow-2xl rounded flex-col text-sm">
        <a className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t" href="https://www.flipkart.com/communication-preferences/push">
             <span className="material-icons md-18 text-primary-blue">notifications</span>
             Notification Preferences
        </a>
        <a className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50" href="https://seller.flipkart.com/sell-online">
             <span className="material-icons md-18 text-primary-blue">business_center</span>
             Sell on Flipkart
        </a>
        <a className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50" href="https://www.flipkart.com/helpcentre">
             <span className="material-icons md-18 text-primary-blue">live_help</span>
             24x7 Customer Care
        </a>
        <a className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50" href="https://advertising.flipkart.com">
             <span className="material-icons md-18 text-primary-blue">trending_up</span>
             Advertise
        </a>
        <a className="pl-3 py-3.5 flex gap-3 items-center hover:bg-gray-50 rounded-b" href="https://www.flipkart.com/mobile-apps">
             <span className="material-icons md-18 text-primary-blue">download</span>
             Download App
        </a>
        <div className="absolute right-1/2 -top-2.5">
             <div className="arrow_down"></div>
        </div>
        </div>
        {/* <!-- dropdown navbar hover tabs --> */}

        <a href="cart.html" className="flex items-center text-white font-medium gap-2 relative">
            <span className="material-icons">shopping_cart</span>
            {/* <!-- badge count --> */}
            <div className="w-5 h-5 p-2 bg-red-500 text-xs rounded-full absolute -top-2 left-3 flex justify-center items-center border">
                1
            </div>
            {/* <!-- badge count --> */}
            Cart
        </a>
    </div>
    {/* <!-- right navs --> */}

</div>
{/* <!-- navbar container --> */}
</header>
{/* <!-- header ends --> */}
    
    
    </>)
}

export default Header;