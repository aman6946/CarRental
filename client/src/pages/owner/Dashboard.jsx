import React from "react";


const Dashboard = () => {
  return (
    <div>

      <h1 className="text-2xl font-semibold mb-6">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">

        <div className="p-5 shadow rounded-lg">
          <p className="text-gray-500">Total Cars</p>
          <h2 className="text-2xl font-bold">8</h2>
        </div>

        <div className="p-5 shadow rounded-lg">
          <p className="text-gray-500">Total Bookings</p>
          <h2 className="text-2xl font-bold">8</h2>
        </div>

        <div className="p-5 shadow rounded-lg">
          <p className="text-gray-500">Pending</p>
          <h2 className="text-2xl font-bold">8</h2>
        </div>

        <div className="p-5 shadow rounded-lg">
          <p className="text-gray-500">Completed</p>
          <h2 className="text-2xl font-bold">8</h2>
        </div>

      </div>

      {/* Recent Bookings */}
      <div className="shadow rounded-lg p-6">

        <h2 className="text-lg font-semibold mb-4">
          Recent Bookings
        </h2>

        <table className="w-full">

          <thead>
            <tr className="text-left border-b">
              <th className="pb-2">Car</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td>BMW 3 Series</td>
              <td>4/1/2025</td>
              <td>$475</td>
              <td>Confirmed</td>
            </tr>

            <tr className="border-b">
              <td>Ford Explorer</td>
              <td>3/1/2025</td>
              <td>$425</td>
              <td>Completed</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Dashboard;