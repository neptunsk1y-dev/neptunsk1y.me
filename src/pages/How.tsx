import PageWrapper from './PageWrapper';
import Technology from '../components/Technology';
import {
  JavaLogo,
  ReactLogo,
  SpringLogo,
  GitLogo,
  TypescriptLogo,
} from '../components/Icons';
import { Helmet } from 'react-helmet';

const How = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>How</title>
      </Helmet>
      <h1>How I Do It</h1>
      <p>
        I highly leverage new bleeding-edge technologies and languages like Java to stay on top of
        the game. You can find a list of my most-used technologies below.
      </p>


      <Technology
        color="#18171b"
        icon={<JavaLogo />}
        name="Java"
        type="Backend, Study"
        useCase={
          "Build simple, reliable, and efficient software."
        }
      />


      <Technology
        color="#232340"
        icon={<ReactLogo />}
        name="React"
        type="Frontend framework"
        useCase={'A popular framework for working with templates'}
      />


      <Technology
        color="#007acc"
        icon={<TypescriptLogo />}
        name="TypeScript"
        type="JS Framework"
        useCase={'To work with the frontend for backend development'}
      />

      <Technology
        color="#f34f29"
        icon={<GitLogo />}
        name="Git"
        type="Version Control"
        useCase={'Version control to track changes in files'}
      />
    </PageWrapper>
  );
};

export default How;
