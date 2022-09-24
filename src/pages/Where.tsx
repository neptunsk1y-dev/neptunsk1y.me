import PageWrapper from './PageWrapper';
import Co from '../components/Co';
import styled from 'styled-components';
import NightRadioIcon from '../assets/images/nightradio.png';
import Repo from '../components/Repo';
import { Helmet } from 'react-helmet';

const Where = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Where</title>
      </Helmet>
      <h1>Where I've Done It</h1>
      <h3>Companies</h3>
      <CoWrapper>
        <Co
          url="https://neptscript.me"
          name="NightRadio"
          iconReference={NightRadioIcon}
          tagline="own small company"
          role={'devloper & ceo'}
          what={"A small team to write a bot and a website"}
          acquired
        />
      </CoWrapper>

      <h3>Open-source Projects</h3>
      <Repo
        name={'neptunsk1y.me'}
        url={'https://github.com/Neptunsk1y/neptunsk1y.me'}
        primaryLanguage={'TypeScript'}
        description="my personal website"
      />
      <Repo
        name={'discord-fire-bot'}
        url={'https://github.com/Neptunsk1y/discord-fire-bot'}
        primaryLanguage={'Python'}
        description="FireBot is a Discord Moderation Bot"
      />
    </PageWrapper>
  );
};

const CoWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default Where;
