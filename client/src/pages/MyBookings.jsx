import React from "react";
import Title from "../components/Title";
import { dummyCarData } from "../assets/assets";

const MyBookings = () => {

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-16">

      {/* Page Title */}

      <Title
        title="My Bookings"
        subTitle="View and manage your car bookings"
      />

      {/* Booking List */}

      <div className="mt-10 space-y-6">

        {dummyCarData.slice(0,2).map((car) => (

          <div
            key={car._id}
            className="flex flex-col md:flex-row justify-between border rounded-xl p-6 shadow-sm"
          >

            {/* Left Section */}

            <div className="flex gap-6">

              <img
                src={car.image}
                alt=""
                className="w-40 h-28 object-cover rounded-lg"
              />

              <div>

                <h2 className="text-lg font-semibold">
                  {car.brand} {car.model}
                </h2>

                <p className="text-gray-500 text-sm">
                  {car.year} • {car.category}
                </p>

                <div className="mt-3 text-sm text-gray-500 space-y-1">

                  <p>
                    📅 Rental Period  
                    <br />
                    4/10/2025 - 4/15/2025
                  </p>

                  <p>
                    📍 Pick-up Location  
                    <br />
                    Airport Terminal
                  </p>

                  <p>
                    📍 Return Location  
                    <br />
                    Downtown Office
                  </p>

                </div>

              </div>

            </div>

            {/* Right Section */}

            <div className="flex flex-col justify-between mt-4 md:mt-0">

              <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full w-fit">
                Confirmed
              </span>

              <div className="text-right mt-6">

                <p className="text-gray-400 text-sm">
                  Total Price
                </p>

                <h2 className="text-2xl font-bold text-primary">
                  $475
                </h2>

                <p className="text-gray-400 text-xs">
                  Booked on 4/1/2025
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default MyBookings;