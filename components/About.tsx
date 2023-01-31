import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="about">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Bundle up, friend...
          </h3>
          <p className="leading-normal w-11/12 sm:w-7/12 lg:w-11/12 mx-auto my-2 text-center pt-2.5">
            ScarfDAO is more than just an organization - it's a movement dedicated to promoting education and opportunity for
            all within the Web3 ecosystem. Funded by its own community of like-minded individuals, ScarfDAO is on a mission to
            empower the next generation of blockchain and decentralized technology leaders.
          </p>
          <p className="leading-normal w-11/12 sm:w-7/12 lg:w-11/12 mx-auto my-2 text-center pt-2.5">
            Our focus is on partnerships that support good causes and drive positive change. By collaborating with projects that
            share our values and vision, ScarfDAO is working to create a better future for workers in the Web3 space. We believe
            that education is the key to unlocking unlimited potential, and we're committed to providing educational resources and
            opportunities to all who seek them.
          </p>
          <p className="leading-normal w-11/12 sm:w-7/12 lg:w-11/12 mx-auto my-2 text-center pt-2.5">
            At ScarfDAO, we understand that the Web3 ecosystem is a rapidly evolving space, and staying up-to-date on the latest
            developments can be a challenge. That's why we offer a wide range of educational resources and programs designed to
            help you deepen your understanding of decentralized technology and its impact on the world. Whether you're a seasoned
            pro or just starting out, ScarfDAO has something for everyone.
          </p>
          <p className="leading-normal w-11/12 sm:w-7/12 lg:w-11/12 mx-auto my-2 text-center pt-2.5">
            Join us in our mission to create a more equitable and education-driven Web3 ecosystem. Become a Scarf today and help
            us build a brighter future for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;