import React from "react";

const ManageCars = () => {
  return (

    <div>

      <h1 className="text-2xl font-semibold mb-6">
        Manage Cars
      </h1>

      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th>Car</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          <tr className="border-b">
            <td>Tesla Model 3</td>
            <td>$360</td>
            <td>
              <button className="text-red-500">
                Delete
              </button>
            </td>
          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default ManageCars;