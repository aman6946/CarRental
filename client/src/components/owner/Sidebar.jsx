import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { dummyUserData, assets } from "../../assets/assets";

const ownerMenuLinks = [
  {
    name: "Dashboard",
    path: "/owner",
    icon: assets.dashboard_icon,
    coloredIcon: assets.dashboard_icon_colored
  },
  {
    name: "Add Car",
    path: "/owner/add-car",
    icon: assets.add_icon,
    coloredIcon: assets.add_icon_colored
  },
  {
    name: "Manage Cars",
    path: "/owner/manage-cars",
    icon: assets.car_icon,
    coloredIcon: assets.car_icon_colored
  },
  {
    name: "Manage Bookings",
    path: "/owner/manage-bookings",
    icon: assets.booking_icon,
    coloredIcon: assets.booking_icon_colored
  }
];

const Sidebar = () => {

  const user = dummyUserData;
  const location = useLocation();
  const [image, setImage] = useState("");

  const updateImage = async () => {
    user.image = URL.createObjectURL(image);
    setImage("");
  };

  return (
    <div className="relative min-h-screen md:flex flex-col items-center pt-8
    max-w-13 md:max-w-60 w-full border-r border-borderColor text-sm">

      {/* Profile Image */}
      <div className="group relative">
        <label htmlFor="image">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image ||
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300"
            }
            alt=""
          />

          <input
            type="file"
            id="image"
            hidden
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <div className="absolute hidden top-0 right-0 left-0 bottom-0
          bg-black/10 rounded-full group-hover:flex items-center justify-center">

            <img src={assets.edit_icon} alt="" />
          </div>
        </label>
      </div>

      {image && (
        <button
          onClick={updateImage}
          className="absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary"
        >
          Save
          <img src={assets.check_icon} width={13} alt="" />
        </button>
      )}

      <p className="mt-2 text-base max-md:hidden">{user?.name}</p>

      {/* Sidebar Links */}
      <div className="w-full">
        {ownerMenuLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className="flex items-center gap-3 p-2 relative"
          >

            <img
              src={link.path === location.pathname ? link.coloredIcon : link.icon}
              alt=""
            />

            <span className="max-md:hidden">{link.name}</span>

            {link.path === location.pathname && (
              <div className="bg-primary w-1.5 h-8 rounded-r absolute right-0"></div>
            )}

          </NavLink>
        ))}
      </div>

    </div>
  );
};

export default Sidebar;