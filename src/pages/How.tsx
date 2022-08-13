import PageWrapper from './PageWrapper';
import Technology from '../components/Technology';
import {
  CSLogo,
  NestJSLogo,
  NetLogo,
  RabbitMQLogo,
  ReactLogo,
  RustLogo,
  SolidityLogo,
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
        I highly leverage new bleeding-edge technologies and languages like Elixir to stay on top of
        the game. You can find a list of my most-used technologies below.
      </p>

      <Technology
        color="#390090"
        icon={<CSLogo />}
        name="C#"
        type="Software, Backend"
        useCase={'to replace Java and develop cool soft'}
      />

      <Technology
        color="#232340"
        icon={<ReactLogo />}
        name="React"
        type="Frontend framework"
        useCase={'Constructing stateful and durable frontends for large and interactive web apps'}
      />

      <Technology
        color="#512bd4"
        icon={<NetLogo />}
        name=".NET"
        type="C# Frameworks"
        useCase={
          'Cross-platform platform for creating multiple applications'
        }
      />

      <Technology
        color="#007acc"
        icon={<TypescriptLogo />}
        name="TypeScript"
        type="JS Framework"
        useCase={'Types for JS - will save your life when projects expand'}
      />

      <Technology
        color="#e0234e"
        icon={<NestJSLogo />}
        name="Nest.js"
        type="Backend, Node.js Framework"
        useCase={'Accelerates and simplifies the development of scalable server applications'}
      />
    </PageWrapper>
  );
};

export default How;
