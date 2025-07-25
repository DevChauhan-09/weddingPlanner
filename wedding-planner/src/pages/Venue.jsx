import React from "react";
import { useNavigate } from "react-router-dom";
import venues from "../data/venues";

function VenuesPage() {
  const navigate = useNavigate();

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {venues.map((venue) => (
        <div
          key={venue.id}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition cursor-pointer"
          onClick={() => navigate(`/venue/${venue.id}`)}
        >
          <img
            src={venue.image}
            alt={venue.name}
            className="w-full h-52 object-cover rounded-md"
          />
          <h2 className="text-lg font-semibold mt-2">{venue.name}</h2>
          <p className="text-sm text-gray-600">{venue.location}</p>
        </div>
      ))}
    </div>
  );
}

export default VenuesPage;
