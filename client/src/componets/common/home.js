import React from 'react';
// import RunBanner from './script';
// import {Helmet} from "react-helmet";
import CatagoryContainer from "./catagroycontainer";

const Home = () => {
    return (<>
        <h1>Home</h1>
        <CatagoryContainer/>
        {/*<!-- main sections starts -->*/}
        <main className="flex flex-col gap-3 px-2 mt-2">

            {/*<!-- banner section -->*/}
            <section className="h-44 sm:h-72 w-full rounded-sm shadow owl-carousel owl-theme relative overflow-hidden" id="banner">
                <img className="h-44 sm:h-72 w-full object-cover" src="https://rukminim1.flixcart.com/flap/1688/280/image/9d50c7626a973408.jpg" alt="" />
                <img className="h-44 sm:h-72 w-full object-cover" src="https://rukminim1.flixcart.com/flap/1688/280/image/9d50c7626a973408.jpg" alt="" />
                <img className="h-44 sm:h-72 w-full object-cover" src="https://rukminim1.flixcart.com/flap/1688/280/image/9d50c7626a973408.jpg" alt="" />
                <img className="h-44 sm:h-72 w-full object-cover" src="https://rukminim1.flixcart.com/flap/1688/280/image/9d50c7626a973408.jpg" alt="" />
                <img className="h-44 sm:h-72 w-full object-cover" src="https://rukminim1.flixcart.com/flap/1688/280/image/9d50c7626a973408.jpg" alt="" />
            </section>
            {/*<!-- banner section -->*/}
            {/*<!-- top selection section -->*/}
            <section id="topSelection" className="bg-white w-full shadow overflow-hidden">
                {/*<!-- header -->*/}
                <div className="flex px-6 py-3 justify-between items-center">
                    <h1 className="text-xl font-medium">Top Selection</h1>
                    <a href="#" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">VIEW ALL</a>
                </div>
                <hr />
                {/*<!-- header -->*/}

                {/*<!-- products container -->*/}
                <div className="flex items-center justify-between owl-carousel owl-theme relative">

                    {/*<!-- one product -->*/}
                    <a className="flex flex-col items-center gap-2 p-6" href="#">
                        <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg" alt="" />
                        </div>
                        <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                        <span className="text-primary-green text-sm">Grab Now</span>
                    </a>

                    {/*<!-- one product -->*/}
                    <a className="flex flex-col items-center gap-2 p-6" href="#">
                        <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg" alt="" />
                        </div>
                        <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                        <span className="text-primary-green text-sm">Grab Now</span>
                    </a>
                    {/*<!-- one product -->*/}
                    <a className="flex flex-col items-center gap-2 p-6" href="#">
                        <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg" alt="" />
                        </div>
                        <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                        <span className="text-primary-green text-sm">Grab Now</span>
                    </a>
                    {/*<!-- one product -->*/}
                    <a className="flex flex-col items-center gap-2 p-6" href="#">
                        <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg" alt="" />
                        </div>
                        <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                        <span className="text-primary-green text-sm">Grab Now</span>
                    </a>
                    {/*<!-- one product -->*/}
                    <a className="flex flex-col items-center gap-2 p-6" href="#">
                        <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg" alt="" />
                        </div>
                        <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                        <span className="text-primary-green text-sm">Grab Now</span>
                    </a>
                    {/*<!-- one product -->*/}
                    <a className="flex flex-col items-center gap-2 p-6" href="#">
                        <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg" alt="" />
                        </div>
                        <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                        <span className="text-primary-green text-sm">Grab Now</span>
                    </a>
                    {/*<!-- one product -->*/}
                    <a className="flex flex-col items-center gap-2 p-6" href="#">
                        <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg" alt="" />
                        </div>
                        <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                        <span className="text-primary-green text-sm">Grab Now</span>
                    </a>
                    {/*<!-- one product -->*/}
                    <a className="flex flex-col items-center gap-2 p-6" href="#">
                        <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg" alt="" />
                        </div>
                        <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                        <span className="text-primary-green text-sm">Grab Now</span>
                    </a>
                    {/*<!-- one product -->*/}
                    <a className="flex flex-col items-center gap-2 p-6" href="#">
                        <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg" alt="" />
                        </div>
                        <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                        <span className="text-primary-green text-sm">Grab Now</span>
                    </a>
                </div>
                {/*<!-- products container -->*/}
            </section>
            {/*<!-- top selection section -->*/}
        </main>

        {/*<!-- recommended items section -->*/}
        <section id="recommended" className="bg-white w-full shadow overflow-hidden">
            {/*<!-- header -->*/}
            <div className="flex px-6 py-4 justify-between items-center">
                <div className="title flex flex-col gap-0.5">
                    <h1 className="text-xl font-medium">Recommended Items</h1>
                    <p className="text-sm text-gray-400">Inspired by Your Interest</p>
                </div>
                <a href="#" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">VIEW ALL</a>
            </div>
            <hr />
            {/*<!-- header -->*/}

            {/*<!-- products container -->*/}
            <div className="flex items-center justify-between owl-carousel owl-theme p-1 relative">

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kk1h5e80/refrigerator-new/g/y/y/rt28a3021s8-hl-1-2021-samsung-original-imafzhedkazavggn.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kk1h5e80/refrigerator-new/g/y/y/rt28a3021s8-hl-1-2021-samsung-original-imafzhedkazavggn.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kk1h5e80/refrigerator-new/g/y/y/rt28a3021s8-hl-1-2021-samsung-original-imafzhedkazavggn.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kk1h5e80/refrigerator-new/g/y/y/rt28a3021s8-hl-1-2021-samsung-original-imafzhedkazavggn.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kk1h5e80/refrigerator-new/g/y/y/rt28a3021s8-hl-1-2021-samsung-original-imafzhedkazavggn.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kk1h5e80/refrigerator-new/g/y/y/rt28a3021s8-hl-1-2021-samsung-original-imafzhedkazavggn.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kk1h5e80/refrigerator-new/g/y/y/rt28a3021s8-hl-1-2021-samsung-original-imafzhedkazavggn.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kk1h5e80/refrigerator-new/g/y/y/rt28a3021s8-hl-1-2021-samsung-original-imafzhedkazavggn.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

            </div>
            {/*<!-- products container -->*/}
        </section>
        {/*<!-- recommended items section -->*/}

        {/*<!-- discounts for you section -->*/}
        <section id="topSelection" className="bg-white w-full shadow overflow-hidden">
            {/*<!-- header -->*/}
            <div className="flex px-6 py-3 justify-between items-center">
                <h1 className="text-xl font-medium">Discounts for You</h1>
                <a href="#" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">VIEW ALL</a>
            </div>
            <hr />
            {/*<!-- header -->*/}

            {/*<!-- products container -->*/}
            <div className="flex items-center justify-between owl-carousel owl-theme relative">

                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-1.5 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/k0wqwsw0/electric-kettle/g/t/d/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkfy7zaekbubs.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                    <span className="text-primary-green text-sm">Min 40% Off</span>
                    <span className="text-gray-500 text-sm">Buy Now!</span>
                </a>

                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-1.5 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/k0wqwsw0/electric-kettle/g/t/d/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkfy7zaekbubs.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                    <span className="text-primary-green text-sm">Min 40% Off</span>
                    <span className="text-gray-500 text-sm">Buy Now!</span>
                </a>

                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-1.5 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/k0wqwsw0/electric-kettle/g/t/d/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkfy7zaekbubs.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                    <span className="text-primary-green text-sm">Min 40% Off</span>
                    <span className="text-gray-500 text-sm">Buy Now!</span>
                </a>

                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-1.5 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/k0wqwsw0/electric-kettle/g/t/d/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkfy7zaekbubs.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                    <span className="text-primary-green text-sm">Min 40% Off</span>
                    <span className="text-gray-500 text-sm">Buy Now!</span>
                </a>

                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-1.5 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/k0wqwsw0/electric-kettle/g/t/d/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkfy7zaekbubs.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                    <span className="text-primary-green text-sm">Min 40% Off</span>
                    <span className="text-gray-500 text-sm">Buy Now!</span>
                </a>

                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-1.5 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/k0wqwsw0/electric-kettle/g/t/d/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkfy7zaekbubs.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                    <span className="text-primary-green text-sm">Min 40% Off</span>
                    <span className="text-gray-500 text-sm">Buy Now!</span>
                </a>

                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-1.5 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/k0wqwsw0/electric-kettle/g/t/d/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkfy7zaekbubs.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                    <span className="text-primary-green text-sm">Min 40% Off</span>
                    <span className="text-gray-500 text-sm">Buy Now!</span>
                </a>

                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-1.5 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/k0wqwsw0/electric-kettle/g/t/d/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkfy7zaekbubs.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                    <span className="text-primary-green text-sm">Min 40% Off</span>
                    <span className="text-gray-500 text-sm">Buy Now!</span>
                </a>

                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-1.5 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/k0wqwsw0/electric-kettle/g/t/d/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkfy7zaekbubs.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                    <span className="text-primary-green text-sm">Min 40% Off</span>
                    <span className="text-gray-500 text-sm">Buy Now!</span>
                </a>

                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-1.5 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/k0wqwsw0/electric-kettle/g/t/d/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkfy7zaekbubs.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Kitchen Appliances</h2>
                    <span className="text-primary-green text-sm">Min 40% Off</span>
                    <span className="text-gray-500 text-sm">Buy Now!</span>
                </a>

            </div>
            {/*<!-- products container -->*/}
        </section>
        {/*<!-- discounts for you section -->*/}


        {/*<!-- you may like section -->*/}
        <section id="recommended" className="bg-white w-full shadow overflow-hidden">
            {/*<!-- header -->*/}
            <div className="flex px-6 py-4 justify-between items-center">
                <div className="title flex flex-col gap-0.5">
                    <h1 className="text-xl font-medium">You May Like...</h1>
                    <p className="text-sm text-gray-400">Based on Your Interest</p>
                </div>
                <a href="#" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">VIEW ALL</a>
            </div>
            <hr />
            {/*<!-- header -->*/}

            {/*<!-- products container -->*/}
            <div className="flex items-center justify-between owl-carousel owl-theme p-1 relative">

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kh0vonk0/sauce-ketchup/h/b/z/450-tomato-pouch-ketchup-surabhi-original-imafx4qktzguhhwy.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kh0vonk0/sauce-ketchup/h/b/z/450-tomato-pouch-ketchup-surabhi-original-imafx4qktzguhhwy.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kh0vonk0/sauce-ketchup/h/b/z/450-tomato-pouch-ketchup-surabhi-original-imafx4qktzguhhwy.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kh0vonk0/sauce-ketchup/h/b/z/450-tomato-pouch-ketchup-surabhi-original-imafx4qktzguhhwy.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kh0vonk0/sauce-ketchup/h/b/z/450-tomato-pouch-ketchup-surabhi-original-imafx4qktzguhhwy.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kh0vonk0/sauce-ketchup/h/b/z/450-tomato-pouch-ketchup-surabhi-original-imafx4qktzguhhwy.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kh0vonk0/sauce-ketchup/h/b/z/450-tomato-pouch-ketchup-surabhi-original-imafx4qktzguhhwy.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kh0vonk0/sauce-ketchup/h/b/z/450-tomato-pouch-ketchup-surabhi-original-imafx4qktzguhhwy.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

            </div>
            {/*<!-- products container -->*/}
        </section>
        {/*<!-- you may like section -->*/}

        {/*<!-- top rated section -->*/}
        <section id="topSelection" className="bg-white w-full shadow overflow-hidden">
            {/*<!-- header -->*/}
            <div className="flex px-6 py-3 justify-between items-center">
                <h1 className="text-xl font-medium">Top Rated</h1>
                <a href="#" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">VIEW ALL</a>
            </div>
            <hr />
            {/*<!-- header -->*/}

            {/*<!-- products container -->*/}
            <div className="flex items-center justify-between owl-carousel owl-theme relative">

                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-2 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ksdjma80/headphone/a/u/p/airdopes-131-airdopes-138-boat-original-imag5yz9sfz9bzq8.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Audio & Video</h2>
                    <span className="text-primary-green text-sm">New Collection</span>
                </a>
                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-2 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ksdjma80/headphone/a/u/p/airdopes-131-airdopes-138-boat-original-imag5yz9sfz9bzq8.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Audio & Video</h2>
                    <span className="text-primary-green text-sm">New Collection</span>
                </a>
                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-2 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ksdjma80/headphone/a/u/p/airdopes-131-airdopes-138-boat-original-imag5yz9sfz9bzq8.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Audio & Video</h2>
                    <span className="text-primary-green text-sm">New Collection</span>
                </a>
                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-2 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ksdjma80/headphone/a/u/p/airdopes-131-airdopes-138-boat-original-imag5yz9sfz9bzq8.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Audio & Video</h2>
                    <span className="text-primary-green text-sm">New Collection</span>
                </a>
                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-2 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ksdjma80/headphone/a/u/p/airdopes-131-airdopes-138-boat-original-imag5yz9sfz9bzq8.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Audio & Video</h2>
                    <span className="text-primary-green text-sm">New Collection</span>
                </a>
                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-2 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ksdjma80/headphone/a/u/p/airdopes-131-airdopes-138-boat-original-imag5yz9sfz9bzq8.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Audio & Video</h2>
                    <span className="text-primary-green text-sm">New Collection</span>
                </a>
                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-2 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ksdjma80/headphone/a/u/p/airdopes-131-airdopes-138-boat-original-imag5yz9sfz9bzq8.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Audio & Video</h2>
                    <span className="text-primary-green text-sm">New Collection</span>
                </a>
                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-2 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ksdjma80/headphone/a/u/p/airdopes-131-airdopes-138-boat-original-imag5yz9sfz9bzq8.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Audio & Video</h2>
                    <span className="text-primary-green text-sm">New Collection</span>
                </a>
                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-2 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ksdjma80/headphone/a/u/p/airdopes-131-airdopes-138-boat-original-imag5yz9sfz9bzq8.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Audio & Video</h2>
                    <span className="text-primary-green text-sm">New Collection</span>
                </a>
                {/*<!-- one product -->*/}
                <a className="flex flex-col items-center gap-2 p-6" href="#">
                    <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                        <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/150/150/ksdjma80/headphone/a/u/p/airdopes-131-airdopes-138-boat-original-imag5yz9sfz9bzq8.jpeg" alt="" />
                    </div>
                    <h2 className="font-medium text-sm mt-2">Audio & Video</h2>
                    <span className="text-primary-green text-sm">New Collection</span>
                </a>

            </div>
            {/*<!-- products container -->*/}
        </section>
        {/*<!-- top rated section -->*/}


        {/*<!-- suggested for you section -->*/}
        <section id="recommended" className="bg-white w-full shadow overflow-hidden">
            {/*<!-- header -->*/}
            <div className="flex px-6 py-4 justify-between items-center">
                <div className="title flex flex-col gap-0.5">
                    <h1 className="text-xl font-medium">Suggested for You</h1>
                    <p className="text-sm text-gray-400">Based on Your Interest</p>
                </div>
                <a href="#" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">VIEW ALL</a>
            </div>
            <hr />
            {/*<!-- header -->*/}

            {/*<!-- products container -->*/}
            <div className="flex items-center justify-between owl-carousel owl-theme p-1 relative">

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

            </div>
            {/*<!-- products container -->*/}
        </section>
        {/*<!-- suggested for you section -->*/}





        {/* <Helmet>
				<script src="/script.js" type="text/javascript"/>
			</Helmet> */}

    </>)
}

export default Home;