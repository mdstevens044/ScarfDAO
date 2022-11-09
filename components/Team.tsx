import React from "react";
import Image from "next/image";

function Team() {
  return (
    <div className="bg-current from-white-300 to-white-500 w-full py-14" id="team">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Team Members
          </h3>
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/assets/asknoot.jpg"
                  alt="asknoot"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
                <header className="leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="https://twitter.com/asknoot" target="_blank" rel="noopener noreferrer">
                      @asknoot
                    </a>
                  </h1>
                  <p className="text-lg">
                    Caleb#6080
                  </p>
                </header>
                <p className="p-2">
                  Founder of ScarfDAO, Advisor & Host of GhostKidDAO, and contributing to YORD WIKI as an Analyst
                </p>
              </article>
            </div>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/assets/morningstvr_.png"
                  alt="morningstvr_"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
                <header className="leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="https://twitter.com/morningstvr_" target="_blank" rel="noopener noreferrer">
                      @morningstvr_
                    </a>
                  </h1>
                  <p className="text-lg">
                    ✨morningstvr✨#0666
                  </p>
                </header>
                <p className="p-2">
                  Experienced Collab Manager & Moderator with connections in +43 DAOs and projects! <br></br><br></br>
                </p>
              </article>
            </div>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/assets/Abomennagettin1.png"
                  alt="Abomennagettin1"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
                <header className="leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="https://twitter.com/Abomennagettin1" target="_blank" rel="noopener noreferrer">
                      @Abomennagettin1
                    </a>
                  </h1>
                  <p className="text-lg">
                    Papa Abomenna#9824
                  </p>
                </header>
                <p className="p-2">
                  1- kid makin money <br></br>
                  2- Experienced Collab Manager & Moderator with connections in +43 DAOs and projects!
                </p>
              </article>
            </div>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/assets/dexLexFT.png"
                  alt="dexLexFT"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
                <header className="leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="https://twitter.com/dexLexFT" target="_blank" rel="noopener noreferrer">
                      @dexLexFT
                    </a>
                  </h1>
                  <p className="text-lg">
                    dexLexFT#1016
                  </p>
                </header>
                <p className="p-2">
                  Full-time Filipino builder and part-time student. Experienced Community Builder, Manager, and Collaborator
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;