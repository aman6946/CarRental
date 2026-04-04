import React from "react";
import Title from "./Title";

const Testimonial = () => {

const testimonials = [
{
name: "Emma Rodriguez",
location: "Barcelona, Spain",
image: "https://randomuser.me/api/portraits/women/68.jpg",
rating: 4,
review:
"I've rented cars from various companies, but the experience with CarRental was exceptional."
},
{
name: "John Smith",
location: "New York, USA",
image: "https://randomuser.me/api/portraits/men/32.jpg",
rating: 4,
review:
"CarRental made my trip so much easier. The car was delivered right to my door."
},
{
name: "Ava Johnson",
location: "Sydney, Australia",
image: "https://randomuser.me/api/portraits/women/44.jpg",
rating: 5,
review:
"I highly recommend CarRental! Their fleet is amazing and customer service is excellent."
}
];

return (

<div className="py-24 px-6 md:px-16 lg:px-24 xl:px-32">

<Title
title="What Our Customers Say"
subTitle="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world."
/>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

{testimonials.map((item,index)=>(

<div
key={index}
className="bg-white border border-gray-200 rounded-xl p-6 shadow-md 
transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
>

{/* User Info */}
<div className="flex items-center gap-4 mb-4">

<img
src={item.image}
alt="user"
className="w-12 h-12 rounded-full object-cover"
/>

<div>
<h3 className="font-semibold text-gray-800">{item.name}</h3>
<p className="text-sm text-gray-500">{item.location}</p>
</div>

</div>

{/* Stars */}

<div className="flex text-blue-500 mb-3">
{[...Array(item.rating)].map((_,i)=>(
<span key={i}>★</span>
))}
</div>

{/* Review */}

<p className="text-gray-600 text-sm leading-relaxed">
{item.review}
</p>

</div>

))}

</div>

</div>

);
};

export default Testimonial;