import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-6 md:px-16 lg:px-24 xl:px-32 pt-14 pb-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo Section */}

        <div>

          <div className="flex items-center gap-2">
            <img src={assets.logo} alt="logo" className="h-8" />
            
          </div>

          <p className="mt-4 text-gray-500 text-sm leading-relaxed">
            Premium car rental service with a wide selection of luxury
            and everyday vehicles for all your driving needs.
          </p>

          {/* Social Icons */}

          <div className="flex gap-4 mt-5">

            <img src={assets.facebook_logo} alt="facebook" className="w-5 cursor-pointer hover:opacity-70"/>
            <img src={assets.instagram_logo} alt="instagram" className="w-5 cursor-pointer hover:opacity-70"/>
            <img src={assets.twitter_logo} alt="twitter" className="w-5 cursor-pointer hover:opacity-70"/>
            <img src={assets.gmail_logo} alt="mail" className="w-5 cursor-pointer hover:opacity-70"/>

          </div>

        </div>


        {/* Quick Links */}

        <div>
          <h3 className="text-gray-800 font-semibold mb-4">QUICK LINKS</h3>

          <ul className="space-y-2 text-sm text-gray-500">

            <li className="hover:text-primary cursor-pointer">Home</li>
            <li className="hover:text-primary cursor-pointer">Browse Cars</li>
            <li className="hover:text-primary cursor-pointer">List Your Car</li>
            <li className="hover:text-primary cursor-pointer">About Us</li>

          </ul>
        </div>


        {/* Resources */}

        <div>
          <h3 className="text-gray-800 font-semibold mb-4">RESOURCES</h3>

          <ul className="space-y-2 text-sm text-gray-500">

            <li className="hover:text-primary cursor-pointer">Help Center</li>
            <li className="hover:text-primary cursor-pointer">Terms of Service</li>
            <li className="hover:text-primary cursor-pointer">Privacy Policy</li>
            <li className="hover:text-primary cursor-pointer">Insurance</li>

          </ul>
        </div>


        {/* Contact */}

        <div>
          <h3 className="text-gray-800 font-semibold mb-4">CONTACT</h3>

          <ul className="space-y-2 text-sm text-gray-500">

            <li>452001 ,Bholaram Ustad Marg</li>
            <li>Indore , MadhyaPradesh</li>
            <li>+91 8540940640</li>
            <li>amansingh6946@gmail.com</li>

          </ul>
        </div>

      </div>


      {/* Bottom Line */}

      <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
        © 2026 CarRental. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;