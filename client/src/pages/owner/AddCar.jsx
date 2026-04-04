import React from "react";

const AddCar = () => {
  return (

    <div>

      <h1 className="text-2xl font-semibold mb-6">
        Add New Car
      </h1>

      <form className="space-y-4 max-w-lg">

        <input
          type="text"
          placeholder="Car Name"
          className="border p-2 w-full"
        />

        <input
          type="number"
          placeholder="Price Per Day"
          className="border p-2 w-full"
        />

        <input
          type="file"
          className="border p-2 w-full"
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Car
        </button>

      </form>

    </div>

  );
};

export default AddCar;