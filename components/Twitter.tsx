import React from "react";
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';
import { Timeline } from 'react-twitter-widgets';

function Twitter() {
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
              height: '650',
              width: '600',
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