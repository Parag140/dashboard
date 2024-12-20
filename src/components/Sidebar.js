import React from "react";
import dashboardImage from './images/dashboard.png';
import activitiesImage from './images/activities.png';
import calenderImage from './images/calender.png';
import openImage from './images/open-a-dispute.png';
import casesImage from './images/my-cases.png';
import filesImage from './images/files.png';
import bigImage from './images/big-photo.png';

const Sidebar = () => {
  const steps = [
    { id: 1, title: "Dashboard", image: dashboardImage },
    { id: 2, title: "My Cases", image: casesImage },
    { id: 3, title: "Activities", image: activitiesImage },
    { id: 4, title: "Calendar", image: calenderImage },
    { id: 5, title: "Files", image: filesImage },
    { id: 6, title: "Open a Dispute", image: openImage },
  ];

  return (
    <div className="bg-white w-64 h-full flex flex-col shadow-lg">
      {/* Logo Section */}
      

      {/* Menu Items */}
      <div className="flex flex-col space-y-6 mt-6 px-4">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center space-x-4 cursor-pointer">
            <img src={step.image} alt={step.title} className="w-6 h-6 object-contain" />
            <span className="text-gray-600 font-medium">{step.title}</span>
          </div>
        ))}
      </div>

      {/* Big Image at Bottom */}
      <div className="mt-auto p-4">
        <img
          src={bigImage}
          alt="Get Justice"
          className="w-full h-auto object-contain rounded-lg mb-200"
        />
      </div>
    </div>
  );
};

export default Sidebar;
