import { useMemo } from 'react';
import { Tooltip } from 'react-tippy';
import PageWrapper from './PageWrapper';

const BIRTH = new Date('2007-03-30T10:15:00Z');
const YEAR_MILLIS = 31556952000;

const Home = () => {
  const age = useMemo(() => Math.floor((Date.now() - BIRTH.getTime()) / YEAR_MILLIS), []);

  return (
    <PageWrapper forceReadableWidth>
      <h1>What I Do</h1>
      <p>
        Mikhail.{' '}
        <Tooltip arrow title={'30th March 2007'}>
          {age}
        </Tooltip>{' '}
        y/o software developer.
      </p>
      <p>
      I study Java and Spring.
      </p>
      <h3>A little about me</h3>

      <p>I design, create and publish my high-quality and reliable pet-projects. Currently I want to find a team for a small Java project
        In my free time, I development soft skills. My goal is to work in the Russian company Sberbank, my discord: neptunsk1y#7777</p>

    </PageWrapper>
  );
};

export default Home;
