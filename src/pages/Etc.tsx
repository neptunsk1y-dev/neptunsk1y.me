import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const Etc = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>/etc</title>
    </Helmet>
    <h1>/etc</h1>
    <h2>Thanks</h2>
    <p>
    {"I did a complete rework of the basic "}
      <a href={"https://github.com/phineas/phineas.io"}>
        {"phineas/phineas.io"}
      </a>
      {
        " site from Phineas, thank you to him for this wonderful design and example which saved me a lot of time."
      }
    </p>
    <p>
      {"The source code for this website is available at "}
      <a href={"https://github.com/Neptunsk1y/neptunsk1y.me"}>
        {"neptunsk1y/neptunsk1y.me"}
      </a>
      {"."}
    </p>
    <h2>Contact</h2>
    <p>
      {"You can write to me in private messages discord: neptunsk1y#7777"}
    </p>
    <h2>Other</h2>
    <ul>
      <li>
        <Link to={'/presence'}>/presence</Link>
      </li>
    </ul>
  </PageWrapper>
);

export default Etc;