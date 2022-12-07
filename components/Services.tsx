import React from "react";

function Services() {
  return (
    <div className="bg-current from-white-300 to-white-500 w-full py-14" id="services">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Consulting &amp; Services
          </h3>
          <p className="leading-normal w-11/12 sm:w-7/12 lg:w-11/12 mx-auto my-2 text-center pt-2.5">
            ScarfDAO can offer you and your team high level advisory and services in all areas of a project.
            With 8.5+ combined years in crypto experience, we have the expertise to help you be successful.
            We offer different packages so you can pick and choose which services you'd like to use. This way
            you can tailor us to help only where you need us too.
            The bear market can be cold, make sure you bundle up 🧣
          </p>
          <br></br>
          <ul>
            <li>Project advisory</li>
            <li>Marketing (spaces, graphics, giveaways, etc.)</li>
            <li>Community management</li>
            <li>Collab management</li>
            <li>Discord set up</li>
            <li>Discord moderation</li>
            <li>Art &amp; graphics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;