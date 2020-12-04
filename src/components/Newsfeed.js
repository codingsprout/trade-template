import React, { useState } from 'react';
import LineGraph from './LineGraph';
import TimeLine from './TimeLine';
import { Avatar } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import '../compcss/newsfeed.css';

const Newsfeed = () => {
  const [popularTopics, setPopularTopics] = useState([
    'Technology',
    'Top Movies',
    'Upcoming Earnings',
    'Crypto',
    'Cannabis',
    'Healthcare Supplies',
    'Index ETFs',
    'Technology',
    'China',
    'Pharma',
  ]);

  return (
    <div className='newsfeed'>
      <div className='newsfeed__container'>
        <div className='newsfeed__chartSection'>
          <div className='newsfeed__portfolio'>
            <h1>$9999999</h1>
            <p>+99.00 (+1.00%) Today</p>
          </div>
          <div className='newsfeed__chart'>
            <LineGraph />
            <TimeLine />
          </div>
        </div>
        <div className='newsfeed__buying__section'>
          <h2> Buying Power</h2>
          <h2>$4.11</h2>
        </div>
        <div className='newsfeed__market__section'>
          <div className='newsfeed__market__container'>
            <p>Markets Closed</p>
            <h1>Merry Christmas!</h1>
          </div>
        </div>
        <div className='newsfeed__popularlists__section'>
          <div className='newsfeed__popularlists__intro'>
            <h1>Popular lists</h1>
            <p>Show More</p>
          </div>
          <div className='newsfeed__popularlists__badges'>
            {popularTopics.map((topic) => (
              <Chip
                className='topic__badge'
                variant='outlined'
                label={topic}
                avatar={
                  <Avatar
                    src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
