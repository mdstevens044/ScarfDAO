import React, { useState, useEffect } from "react";

function Twitter() {

  const [tweets, setTweets] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.twitter.com/2/users/1501701387117379599/tweets?max_results=8", {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setTweets(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="bg-current from-white-300 to-white-500 w-full py-14" id="tweets">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Latest Tweets
          </h3>
          {tweets.map((tweet) => {
            return (
              <div key={tweet.id} className="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article className="overflow-hidden rounded-lg shadow-lg">
                  <header className="flex flex-col items-center justify-between leading-none p-2">
                    <h1 className="text-md pt-4">
                      {tweet.text}
                    </h1>
                  </header>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Twitter;