import React, { useRef, useState, Fragment, useEffect } from "react";
import { AppNavbar } from "../components/navbar/AppNav";
import { Dialog, Transition } from "@headlessui/react";
import Select from "react-select";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import asset1 from "../assets/images/Group82.png";
import asset2 from "../assets/images/double-right.png";
import asset3 from "../assets/images/Group81.png";
import asset4 from "../assets/images/Rectangle1.png";
import asset5 from "../assets/images/asset5.png";
import asset6 from "../assets/images/Group83.png";
import asset7 from "../assets/images/Group84.png";
import asset8 from "../assets/images/Group90.png";
import asset9 from "../assets/images/asset9.png";
import asset10 from "../assets/images/Group87.png";
import asset11 from "../assets/images/Group19.png";
import asset12 from "../assets/images/Group20.png";
import lightLogo from "../assets/images/LogoWhite.png";
import {
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsApple,
  BsFillPlayFill,
} from "react-icons/bs";
// import {CheckIcon} from "@heroicons/react/20"
import { CheckIcon } from "@heroicons/react/20/solid";

export const AppLanding = () => {
  const sectionsRef = useRef([]);
  const [open, setOpen] = useState(false);

  const servicesOffered = [
    { label: "Home Cleaning Service", value: "Home Cleaning Service" },
    { label: "Plumber", value: "Plumber" },
    { label: "Electrician", value: "Electrician" },
  ];

  const areasOfOperation = [
    { label: "City of London", value: "City of London" },
    { label: "Westminster", value: "Westminster" },
    { label: "Camden ", value: "Camden " },
    { label: "Kensington and Chelsea", value: "Kensington and Chelsea" },
    { label: "Hammersmith and Fulham", value: "Hammersmith and Fulham" },
    { label: "Islington", value: "Islington" },
    { label: "Hackney ", value: "Hackney " },
    { label: "Tower Hamlets", value: "Tower Hamlets" },
    { label: "Southwark", value: "Southwark" },
    { label: "Lambeth", value: "Lambeth" },
    { label: "Wandsworth ", value: "Wandsworth " },
    { label: "Lewisham ", value: "Lewisham " },
    { label: "Greenwich ", value: "Greenwich " },
    { label: "Bexley ", value: "Bexley " },
    { label: "Havering ", value: "Havering " },
    { label: "Barking and Dagenham ", value: "Barking and Dagenham " },
    { label: "Redbridge  ", value: "Redbridge  " },
    { label: "Newham  ", value: "Newham  " },
    { label: "Waltham Forest ", value: "Waltham Forest " },
    { label: "Haringey ", value: "Haringey " },
  ];
  const Joinus = () => {
    setOpen(true);
  };
  return (
    <div className="bg-white scroll-smooth scroller">
      <div className="bg-[#DFE7FF]  Appsection">
        <AppNavbar onClick={Joinus} />

        <div
          className="max-w-[1280px] mx-auto px-5 md:px-0"
          ref={(ref) => (sectionsRef.current[0] = ref)}
        >
          <div className="mt-20 text-center pb-32">
            <h4 className="text-primary_blue md:text-normal text-sm font-bold capitalize md:mb-8">
              LAUNCHING IN SEPTEMBER 2023
            </h4>
            <div className="flex flex-col items-center ">
              <h1 className="mb-4 md:mb-8 w-100 mt-4 text-black lg:text-8xl md:text-6xl xs:text-3xl text-2xl font-semibold inline-flex items-baseline ">
                Easy Living Starts Here
                {/* <img src={asset1} className="w-32 h-14 mx-4" /> */}
              </h1>
              <h1 className="text-black lg:text-8xl md:text-6xl xs:text-3xl text-2xl md:mt-5 mt-2 font-semibold inline-flex items-center ">
                {" "}
                {/* <img src={asset2} className="md:w-32 hidden md:block  mx-4" /> */}
                <button
                  onClick={Joinus}
                  type="button"
                  className="rounded-[50px] bg-primary_blue  md:px-8 md:py-5 px-4 py-2 mx-1 md:text-lg text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join Us
                </button>
              </h1>
            </div>
            <div className="flex items-center justify-center md:mt-20 mt-10">
              <img src={asset3} className="w-8/12 " />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark_blue  py-24 px-5 md:px-0 ">
        <div className="Appsection flex flex-col justify-center items-center py-4">
        <h1 className="md:text-6xl text-2xl text-center text-white"  ref={(ref) => (sectionsRef.current[1] = ref)}>
          Manage all your needs <br></br>from our{" "}
          <span className="text-primary_blue">App</span>.
        </h1>
        <img src={asset4} className="md:w-6/12 xs:w-10/12" />
        <p className="md:text-xl text-base lg:w-4/12 text-[#9C9EB1] text-center">
          Welcome to seamless home management. Our intuitive, user-friendly app
          is designed to simplify your life - schedule services, track arrivals,
          and manage all your needs at the touch of a button. Embrace a new
          standard of convenience, tailored to your lifestyle
        </p>
        <button
          onClick={Joinus}
          type="button"
          className="rounded-[50px] bg-primary_blue px-8 py-3 mt-10 mx-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Join Us Now
        </button>
        </div>
      </div>

      <div
        className="pb-32 mb-32 bg-white relative text-6xl max-w-[1280px] mx-auto md:flex justify-end z-1 px-5 md:px-0 Appsection"
        id="scrollAnimate"
        ref={(ref) => (sectionsRef.current[2] = ref)}
      >
        <div className="md:absolute md:left-0 md:w-6/12 md:translate-y-2/3">
          <div className="flex md:items-start items-end justify-center pt-10 md:flex-col flex-row ">
            <h1 className="mt-4 text-black lg:text-8xl md:text-7xl text-4xl font-semibold inline-flex items-end ">
              Why{" "}
              <img
                src={asset5}
                className="hidden md:block md:w-36 w-16 md:mx-4 mx-2"
              />
            </h1>
            <h1 className="md:ml-0 ml-2 mmt-4 text-black lg:text-8xl md:text-7xl text-4xl font-semibold inline-flex items-baseline ">
              Do it all?
            </h1>
          </div>
        </div>
        <div className="w-12/12 md:h-[750px]  flex flex-col items-center md:items-end overflow-y-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-none  z-10">
          <div className="md:w-5/12  rounded-[55px] bg-[#F6F5F8] p-12 md:mt-48 mt-14">
            <h1 className="text-5xl md:text-7xl text-primary_blue">*</h1>
            <p className="md:text-3xl text-xl font-semibold">
              Our services save your time and reduce stress, allowing you to
              focus on what’s important.
            </p>
          </div>

          {/* <div className=" md:w-5/12  rounded-[55px] bg-[#E0F3FF] px-12 py-16 mt-5">
            <img src={asset6} className="w-8/12 mx-auto" />
            <h2 className="md:text-3xl text-xl  mt-5 text-center font-semibold">
              Amazing earnings
            </h2>
            <p className="md:text-base text-sm  text-[#666] text-center mt-3 ">
              We pay £26+ per hour (excluding tips)
              <br className="md:block hidden"></br>Top partners earn more than
              <br></br> £1500 a week
            </p>
          </div> */}

          <div className="md:w-5/12  rounded-[55px] bg-[#F3EDFF] px-12 py-16 mt-5">
            <img src={asset7} className="w-8/12 mx-auto" />
            <h2 className="md:text-3xl text-xl   mt-5 text-center font-semibold">
              Be your own boss
            </h2>
            <p className="md:text-base text-sm text-[#666] text-center mt-3 ">
              You tell us where & when<br></br>We’ll fill up your time with
              bookings.
            </p>
          </div>
          <div className=" md:w-5/12  rounded-[55px] bg-[#FFF3E1] px-12 py-16 mt-5">
            <img src={asset8} className="w-8/12 mx-auto" />
            <h2 className="md:text-3xl text-xl   mt-5 text-center font-semibold">
              Best support
            </h2>
            <p className="md:text-base text-sm text-[#666] text-center mt-3 ">
              We will fix any problem within<br></br>24 hours or provide a
              refund.
            </p>
          </div>
          <div className="md:w-5/12   rounded-[55px] bg-[#1E1E2E] p-12 mt-5">
            <h1 className=" text-5xl text-primary_blue">*</h1>
            <p className="md:text-3xl text-xl text-white font-semibold">
              At Do It All we are focused on making home what it should be - a
              place you truly enjoy coming home
            </p>
          </div>
          {/* <div className=" md:w-5/12 rounded-[55px] bg-[#F6F5F8] px-12 py-16 mt-5 md:mb-24">
            <img src={asset9} className="w-8/12 mx-auto" />
            <h2 className="md:text-3xl text-xl  mt-5 text-center font-semibold">
              All-in-one
            </h2>
            <p className="md:text-base text-sm text-[#666] text-center mt-3 ">
              Everything you need - in one app. Visit
              <br className="md:block hidden"></br>the App Store or Google Play.
            </p>
          </div> */}
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-5 md:px-0 mt-32">
        <div
          className="md:flex justify-between items-center mt-16 Appsection"
          id="scrollAnimate"
          ref={(ref) => (sectionsRef.current[2] = ref)}
        >
          <div className="md:w-6/12">
            <img src={asset11} className="text-start " />
          </div>
          <div className="md:w-5/12 mt-10 md:mt-0">
            <span className=" text-sm bg-light_purple mb-4 font-semibold px-3 py-1 rounded-md">
              Trustworthy
            </span>
            <h2 className="text-3xl my-5">
              <span className="font-bold">Trustworthy </span> Service Providers:{" "}
              <br></br> Verified Process
            </h2>
            <p className="text-light_gray">
              At the heart of our platform, security is paramount. Every
              provider goes through an ID verification process. They provide
              personal information, capture images of a valid ID, and confirm
              their identity with a live selfie. Our system ensures these
              details align, providing a secure, trustworthy service for you. A
              simple process safeguarding your peace of mind
            </p>
          </div>
        </div>

        <div
          className="md:flex justify-between items-center my-32 Appsection"
          id="scrollAnimate"
          ref={(ref) => (sectionsRef.current[2] = ref)}
        >
          <div className="md:w-5/12 lg:pl-16">
            <span className=" text-sm bg-light_purple mb-4 font-semibold px-3 py-1 rounded-md">
              DO IT ALL
            </span>
            <h2 className="text-3xl my-5">
              Makes Life Easier for &nbsp;
              <span className="font-bold"> Companies</span> Too
            </h2>
            <p className="text-light_gray">
              Simplify property management with our seamless app ALSO designed for
              Airbnb hosts, landlords, and real estate agencies. From routine
              maintenance to complex repairs, our platform connects you with
              verified professionals, providing real-time updates, easy
              scheduling, and payments. Save time, reduce costs, and deliver
              top-notch service to your clients. Optimize your property
              management practices today with our Home Services App.
            </p>
          </div>
          <div className="md:w-6/12">
            <img src={asset12} className="text-start" />
          </div>
        </div>
      </div>
      <div className="bg-dark_blue md:pt-20 px-5 md:px-0 Appsection">
        <div className="max-w-[1280px] mx-auto ">
          <div className="md:flex justify-between items-start">
            <div className="md::w-4/12 mb-10 pt-10 md:pt-0">
              <img src={lightLogo} className="w-64 mx-auto md:mx-0" />
              {/* <div className="lg:w-5/12 flex justify-between text-white text-[24px] mt-10">
                <BsTwitter />
                <BsFacebook />
                <BsLinkedin />
              </div>
              <div className="lg:w-10/12 flex justify-between text-white text-[24px] mt-10">
                <button
                  type="button"
                  className="flex items-center rounded-[50px] bg-primary_blue px-5 py-4 text-lg  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <BsApple className="mr-3" />
                  App Store
                </button>
                <button
                  type="button"
                  className="flex items-center rounded-[50px] bg-primary_blue px-5 py-4 text-lg  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <BsFillPlayFill className="mr-3" />
                  Google Play
                </button>
              </div> */}
            </div>
            <div className="md::w-7/12 md:flex text-center justify-between items-start mb-5">
              <button
                onClick={Joinus}
                type="button"
                className="ml-auto text-xl rounded-[50px] bg-white px-5 py-4 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join us now
              </button>
              {/* <div className="w-3/12">
                <p className="font-semibold text-white">Company</p>
                <p className="font-semibold text-[#A0A1B1] mt-3">Company</p>
                <p className="font-semibold text-[#A0A1B1] mt-3">Company</p>
                <p className="font-semibold text-[#A0A1B1] mt-3">Company</p>
              </div>
              <div className="w-3/12">
                <p className="font-semibold text-white">Services</p>
                <p className="font-semibold text-[#A0A1B1] mt-3">Company</p>
                <p className="font-semibold text-[#A0A1B1] mt-3">Company</p>
                <p className="font-semibold text-[#A0A1B1] mt-3">Company</p>
              </div>
              <div className="w-4/12">
                <p className="font-semibold text-white">Newsletter</p>
                <div className="flex justify-between"></div>
                <div className="mt-5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-dark_blue block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-inner  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Your Email"
                    aria-describedby="email-optional"
                  />
                </div>
              </div> */}
            </div>
          </div>
          <hr className="border-[#262737]" />
          <div className="py-5 md:flex items-center justify-between text-white">
            <div>
              {" "}
              <p>© 2023, AA Technologies</p>
            </div>
            {/* <div className="inline-flex mt-2">
              {" "}
              <p className="mr-4">Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div> */}
          </div>
        </div>
      </div>

      {/* ------------------MODAL----------------------- */}

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="p-2">
                    <h2 className="text-primary_blue text-2xl font-semibold">
                      Join Us
                    </h2>
                    <p className="text-[#666666] text-sm">
                      Please fill in this form to apply at Do It All.
                    </p>
                    <hr className="mt-3"></hr>
                    <form className="mt-5">
                      <div class="mb-4">
                        <label
                          for="email"
                          class="block mb-2 text-sm font-medium text-[#344054] "
                          required
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          id="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                          placeholder=""
                          required
                        />
                      </div>
                      <div class="mb-4 ">
                        <label
                          for="email"
                          class="block mb-2 text-sm font-medium text-[#344054] "
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                          placeholder=""
                          required
                        />
                      </div>
                      <div class="mb-4">
                        <label
                          for="mob"
                          class="block mb-2 text-sm font-medium text-[#344054] "
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          id="mob"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          for="countries"
                          class="block mb-2 text-sm font-medium text-[#344054] "
                        >
                          Services offered
                        </label>
                        <Select
                          id="countries"
                          isSearchable
                          placeholder=" Services offered"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                          options={servicesOffered}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          for="countries"
                          class="block mb-2 text-sm font-medium text-[#344054] "
                        >
                          Current address
                        </label>
                        <textarea
                          id="address"
                          className="bg-white min-h-[70px] max-h-[100px] overflow-y-auto border w-full p-2"
                          required
                        />
                      </div>

                      <div className="mb-5">
                        <label
                          for="countries"
                          class="block mb-2 text-sm font-medium text-[#344054] "
                        >
                          Areas of operation
                        </label>
                        <Select
                          id="countries"
                          isSearchable
                          options={areasOfOperation}
                          required
                          placeholder="Areas Of Operation"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                        />
                      </div>

                      <label
                        for="website-admin"
                        class="block mb-2 text-sm font-medium text-[#344054] "
                      >
                        Hourly rate
                      </label>
                      <div class="flex">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md ">
                          £
                        </span>
                        <input
                          type="number"
                          id="cost"
                          min="20"
                          max="200"
                          class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 "
                          placeholder="Min 20"
                          required
                        />
                      </div>

                      <div className="md:flex justify-between items-center mt-8">
                        <button
                          onClick={() => {
                            setOpen(false);
                          }}
                          type="button"
                          className="md:w-5/12 rounded-3xl  border border-black bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm hover:bg-red-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="md:w-5/12 rounded-3xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
export default AppLanding;
