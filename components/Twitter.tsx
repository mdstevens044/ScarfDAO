import React from "react";
import { Timeline } from 'react-twitter-widgets';
import { isMobile } from 'react-device-detect';

function Twitter() {
  let width = 600;

  if(isMobile)
  {
    width = 350;
  }

  return (
    <div className="bg-current from-white-300 to-white-500 w-full py-14" id="tweets">
      <div className="px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-fit text-center justify-center">
        <div className="flex justify-center">
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'ScarfDAO'
            }}
            options={{
              height: '700',
              width: `${width}`,
              tweetLimit: '8',
              chrome: 'noscrollbar, nofooter',
              ariaPolite: 'assertive'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Twitter;