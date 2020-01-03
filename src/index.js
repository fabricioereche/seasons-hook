import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {

    const [latitude, errorMessage] = useLocation()

    let content = <Spinner message="please accept location request" />;

    if (!errorMessage && latitude) {
        content = <SeasonDisplay lat={latitude} />;
    }

    if (errorMessage && !latitude) {
        content = <div>Error: {errorMessage}</div>;
    }

    return (
        <div className="border red">{content}</div>
    );

};

ReactDOM.render(<App />, document.getElementById("root"));