import React from "react";

function Services() {
  return (
    <div className="bg-current from-white-300 to-white-500 w-full py-4" id="services">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 text-center leading-relaxed">
            Scarf Advisory
          </h3>
          <p className="leading-normal w-11/12 sm:w-7/12 lg:w-11/12 mx-auto my-2 text-center pt-2.5">
            Scarf Advisory is your one-stop-shop for comprehensive advising, content creation & marketing services
            for your project. With a team that boasts over 9 years of combined experience in the Web3 & NFT industries,
            we have the expertise and knowledge to help you achieve success. We understand that every project is unique
            and that's why we offer customized packages to fit your specific needs. Whether you're looking for assistance
            in a specific area or a complete end-to-end solution, our team will work closely with you to deliver the results you need.
          </p>
          <p className="leading-normal w-11/12 sm:w-7/12 lg:w-11/12 mx-auto my-2 text-center pt-2.5">
            At ScarfDAO, we recognize that navigating the often-challenging Web3 market can be a daunting task.
            We're here to offer you a warm, supportive hand to guide you through the ups and downs of the bear
            market. Our team of experts is here to provide you with the knowledge and resources you need to succeed,
            so you can focus on what matters most - your project. So don't brave the cold alone, bundle up with
            Scarf Advisory and enjoy a tiring but rewarding journey with warm community-focused assistance.
          </p>
          <br></br>
          <div className="wrapper">
            <p className="text-center font-bold text-xl">Offered Services</p>
            <ul>
              <li>Marketing Services</li>
              <li>Graphic Design &amp; Art</li>
              <li>Discord Design &amp; Security</li>
              <li>Project Advisory</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;