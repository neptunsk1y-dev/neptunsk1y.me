import PageWrapper from './PageWrapper';
import Technology from '../components/Technology';
import {
  PythonLogo,
  ReactLogo,
  NestLogo,
  TypescriptLogo,
  PrismaLogo
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
        I highly leverage new bleeding-edge technologies and languages like Python and TypeScript to stay on top of
        the game. You can find a list of my most-used technologies below.
      </p>


      <Technology
        color="#18171b"
        icon={<PythonLogo />}
        name="Python"
        type="Data, Backend"
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
        color="#151515"
        icon={<NestLogo />}
        name="Nest.js"
        type="Backend, Requests"
        useCase={'Building efficient, reliable and scalable server-side applications.'}
      />

      <Technology
        color="#677eeb"
        icon={<PrismaLogo />}
        name="Prisma"
        type="TypeScript ORM"
        useCase={'Makes working with databases easy'}
      />

    </PageWrapper>
  );
};

export default How;
