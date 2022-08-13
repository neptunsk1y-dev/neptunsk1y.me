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
        I develop, build and publish products of quality and reliability. Currently, I'm a CEO
        and developer at{' '}
        <a href="https://neptscript.me" target="norel noopen">
          NeptScript
        </a>
        .
      </p>
      <h3>A little about me</h3>

      <p>I'm a beginner Software developer and high school student, currently learning C# and TypeScript. My Discord profile: nept#3127.</p>

    </PageWrapper>
  );
};

export default Home;
