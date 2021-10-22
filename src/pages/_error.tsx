import { NextPage } from 'next';

const Error: NextPage<{ statusCode?: number }> = ({ statusCode }) => {
  const errorTitle =
    statusCode === 404
      ? '#404. Nie ma takiej strony'
      : 'Oopss... coś poszło nie tak';

  return (
    <div className="main-content page-error">
      <div className="page-error__wrapper">
        <div className="container">
          <div className="row no-gutters">
            <div className="offset-sm-1 col-sm-10">
              <h1 className="page-error__title h1">{errorTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
