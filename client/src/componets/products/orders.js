import React from "react";
import SmallCatagoryContainer from "../common/catagroycontainersmall";

const Order = () => {
    return (<>
        <SmallCatagoryContainer/>
        {/*<!-- main sections starts -->*/}
        <main className="w-full mt-16 sm:mt-0">

            {/*<!-- row -->*/}
            <div className="flex gap-3.5 mt-2 sm:mt-6 sm:mx-3 m-auto mb-7">

                {/*<!-- sidebar column  -->*/}
                <div className="hidden sm:flex flex-col w-1/5 px-1">

                    {/*<!-- nav tiles -->*/}
                    <div className="flex flex-col bg-white rounded-sm shadow">

                        {/*<!-- filters header -->*/}
                        <div className="flex items-center gap-5 px-4 py-2 border-b">
                            <p className="flex w-full justify-between text-lg font-medium">Filters</p>
                        </div>

                        {/*<!-- order status checkboxes -->*/}
                        <div className="flex flex-col py-3 text-sm">
                            <span className="font-medium px-4">ORDER STATUS</span>

                            {/*<!-- checkboxes -->*/}
                            <div className="flex flex-col gap-3 px-4 mt-3 pb-3 border-b">
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" name="" id="ontw" className="h-4 w-4"/>
                                        <label for="ontw">On the way</label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" name="" id="devlivered" className="h-4 w-4"/>
                                        <label for="devlivered">Delivered</label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" name="" id="cancelled" className="h-4 w-4"/>
                                        <label for="cancelled">Cancelled</label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" name="" id="returned" className="h-4 w-4"/>
                                        <label for="returned">Returned</label>
                                </div>
                            </div>
                            {/*<!-- checkboxes -->*/}

                        </div>
                        {/*<!-- order status checkboxes -->*/}

                        {/*<!-- order time checkboxes -->*/}
                        <div className="flex flex-col pb-2 text-sm">
                            <span className="font-medium px-4">ORDER TIME</span>

                            {/*<!-- checkboxes -->*/}
                            <div className="flex flex-col gap-3 px-4 mt-3 pb-3">
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" name="" id="last30" className="h-4 w-4"/>
                                        <label for="last30">Last 30 days</label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" name="" id="2020" className="h-4 w-4"/>
                                        <label for="2020">2020</label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" name="" id="2019" className="h-4 w-4"/>
                                        <label for="2019">2019</label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" name="" id="older" className="h-4 w-4"/>
                                        <label for="older">Older</label>
                                </div>
                            </div>
                            {/*<!-- checkboxes -->*/}

                        </div>
                        {/*<!-- order time checkboxes -->*/}


                    </div>
                    {/*<!-- nav tiles -->*/}

                </div>
                {/*<!-- sidebar column  -->*/}

                {/*<!-- orders column -->*/}
                <div className="flex-1">

                    {/*<!-- orders container -->*/}
                    <div className="flex flex-col gap-3 sm:mr-4 overflow-hidden">

                        {/*<!-- searchbar -->*/}
                        <div className="flex justify-between items-center mx-1 sm:mx-0 sm:w-10/12 bg-white border rounded">
                            <input type="text" name="search" id="" placeholder="Search your orders here" className="p-2 text-sm outline-none flex-1 rounded-l"/>
                                <button className="text-sm px-1 sm:px-4 py-2 text-white bg-primary-blue rounded-r flex items-center gap-0.5">
                                    <span className="material-icons md-22">search</span>
                                    Search Orders
                                </button>
                        </div>
                        {/*<!-- searchbar -->*/}

                        {/*<!-- ordered item -->*/}
                        <a className="flex flex-col sm:flex-row p-4 items-start bg-white border rounded gap-2 sm:gap-0 hover:shadow-lg" href="#">
                            {/*<!-- image container -->*/}
                            <div className="w-full sm:w-32 h-20">
                                <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/image/kekadu80/mobile/z/z/v/realme-7-pro-rmx2170-original-imafv73vwh36pscq.jpeg" alt=""/>
                            </div>
                            {/*<!-- image container -->*/}

                            {/*<!-- order desc container -->*/}
                            <div className="flex flex-col sm:flex-row justify-between w-full">

                                <div className="flex flex-col gap-1 overflow-hidden">
                                    <p className="text-sm">realme 7 pro (Mirror Silver, 128 GB)</p>
                                    <p className="text-xs text-gray-500 mt-2">Color: Silver</p>
                                    <p className="text-xs text-gray-500">Seller: PETILANTE Online</p>
                                </div>

                                <div className="flex flex-col sm:flex-row mt-1 sm:mt-0 gap-2 sm:gap-20 sm:w-1/2">
                                    <p className="text-sm">₹16,999</p>

                                    <div className="flex flex-col gap-1.5">
                                        <p className="text-sm font-medium flex items-center gap-2">
                                            <span className="material-icons text-primary-green md-14">circle</span>
                                            Ordered on Sep 11
                                        </p>
                                        <p className="text-xs ml-1">Your item  has been ordered</p>
                                    </div>
                                </div>

                            </div>
                            {/*<!-- order desc container -->*/}

                        </a>
                        {/*<!-- ordered item -->*/}

                        {/*<!-- ordered item -->*/}
                        <a className="flex flex-col sm:flex-row p-4 items-start bg-white border rounded gap-2 sm:gap-0 hover:shadow-lg" href="#">
                            {/*<!-- image container -->*/}
                            <div className="w-full sm:w-32 h-20">
                                <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/image/kekadu80/mobile/z/z/v/realme-7-pro-rmx2170-original-imafv73vwh36pscq.jpeg" alt=""/>
                            </div>
                            {/*<!-- image container -->*/}

                            {/*<!-- order desc container -->*/}
                            <div className="flex flex-col sm:flex-row justify-between w-full">

                                <div className="flex flex-col gap-1 overflow-hidden">
                                    <p className="text-sm">realme 7 pro (Mirror Silver, 128 GB)</p>
                                    <p className="text-xs text-gray-500 mt-2">Color: Silver</p>
                                    <p className="text-xs text-gray-500">Seller: PETILANTE Online</p>
                                </div>

                                <div className="flex flex-col sm:flex-row mt-1 sm:mt-0 gap-2 sm:gap-20 sm:w-1/2">
                                    <p className="text-sm">₹16,999</p>

                                    <div className="flex flex-col gap-1.5">
                                        <p className="text-sm font-medium flex items-center gap-2">
                                            <span className="material-icons text-primary-green md-14">circle</span>
                                            Ordered on Sep 11
                                        </p>
                                        <p className="text-xs ml-1">Your item  has been ordered</p>
                                    </div>
                                </div>

                            </div>
                            {/*<!-- order desc container -->*/}

                        </a>
                        {/*<!-- ordered item -->*/}

                        {/*<!-- ordered item -->*/}
                        <a className="flex flex-col sm:flex-row p-4 items-start bg-white border rounded gap-2 sm:gap-0 hover:shadow-lg" href="#">
                            {/*<!-- image container -->*/}
                            <div className="w-full sm:w-32 h-20">
                                <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/image/kekadu80/mobile/z/z/v/realme-7-pro-rmx2170-original-imafv73vwh36pscq.jpeg" alt=""/>
                            </div>
                            {/*<!-- image container -->*/}

                            {/*<!-- order desc container -->*/}
                            <div className="flex flex-col sm:flex-row justify-between w-full">

                                <div className="flex flex-col gap-1 overflow-hidden">
                                    <p className="text-sm">realme 7 pro (Mirror Silver, 128 GB)</p>
                                    <p className="text-xs text-gray-500 mt-2">Color: Silver</p>
                                    <p className="text-xs text-gray-500">Seller: PETILANTE Online</p>
                                </div>

                                <div className="flex flex-col sm:flex-row mt-1 sm:mt-0 gap-2 sm:gap-20 sm:w-1/2">
                                    <p className="text-sm">₹16,999</p>

                                    <div className="flex flex-col gap-1.5">
                                        <p className="text-sm font-medium flex items-center gap-2">
                                            <span className="material-icons text-primary-green md-14">circle</span>
                                            Ordered on Sep 11
                                        </p>
                                        <p className="text-xs ml-1">Your item  has been ordered</p>
                                    </div>
                                </div>

                            </div>
                            {/*<!-- order desc container -->*/}

                        </a>
                        {/*<!-- ordered item -->*/}

                        {/*<!-- ordered item -->*/}
                        <a className="flex flex-col sm:flex-row p-4 items-start bg-white border rounded gap-2 sm:gap-0 hover:shadow-lg" href="#">
                            {/*<!-- image container -->*/}
                            <div className="w-full sm:w-32 h-20">
                                <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/image/kekadu80/mobile/z/z/v/realme-7-pro-rmx2170-original-imafv73vwh36pscq.jpeg" alt=""/>
                            </div>
                            {/*<!-- image container -->*/}

                            {/*<!-- order desc container -->*/}
                            <div className="flex flex-col sm:flex-row justify-between w-full">

                                <div className="flex flex-col gap-1 overflow-hidden">
                                    <p className="text-sm">realme 7 pro (Mirror Silver, 128 GB)</p>
                                    <p className="text-xs text-gray-500 mt-2">Color: Silver</p>
                                    <p className="text-xs text-gray-500">Seller: PETILANTE Online</p>
                                </div>

                                <div className="flex flex-col sm:flex-row mt-1 sm:mt-0 gap-2 sm:gap-20 sm:w-1/2">
                                    <p className="text-sm">₹16,999</p>

                                    <div className="flex flex-col gap-1.5">
                                        <p className="text-sm font-medium flex items-center gap-2">
                                            <span className="material-icons text-primary-green md-14">circle</span>
                                            Ordered on Sep 11
                                        </p>
                                        <p className="text-xs ml-1">Your item  has been ordered</p>
                                    </div>
                                </div>

                            </div>
                            {/*<!-- order desc container -->*/}

                        </a>
                        {/*<!-- ordered item -->*/}

                    </div>
                    {/*<!-- orders container -->*/}

                </div>
                {/*<!-- orders column -->*/}
            </div>
            {/*<!-- row -->*/}

        </main>
        {/*<!-- main sections starts -->*/}



    </>)
}

export default Order;