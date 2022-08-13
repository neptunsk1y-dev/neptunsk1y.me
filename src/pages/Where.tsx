import PageWrapper from './PageWrapper';
import Co from '../components/Co';
import styled from 'styled-components';
import HivenAppIcon from '../assets/images/hiven-app-icon.png';
import GigglAppIcon from '../assets/images/giggl-app-icon.jpg';
import HonkAppIcon from '../assets/images/honk-app-icon.jpg';
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
          name="NeptScript"
          iconReference={HivenAppIcon}
          tagline="only C#"
          role={'Founder & Developer'}
          what={'Company of C# developers.'}
          acquired
        />
      </CoWrapper>

      <h3>Open-source Projects</h3>
      <Repo
        name={'nestjs-bookmarks-api'}
        url={'https://github.com/Neptunsk1y/nestjs-bookmarks-api'}
        primaryLanguage={'TypeScript'}
        description="a CRUD REST API with end-to-end tests using modern web development techniques"
      />
      <Repo
        name={'discord-fire-bot'}
        url={'https://github.com/Neptunsk1y/discord-fire-bot'}
        primaryLanguage={'Python'}
        description="FireBot is a Discord Moderation Bot"
      />
      <Repo
        name={'registration-verification-app-csharp'}
        url={'https://github.com/Neptunsk1y/registration-verification-app-csharp'}
        primaryLanguage={'С#'}
        description="The registration and authorization form has a Captcha with automatic updating."
      />
      <Repo
        name={'neptunsk1y.me'}
        url={'https://github.com/Neptunsk1y/neptunsk1y.me'}
        primaryLanguage={'TypeScript'}
        description="my personal website"
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
