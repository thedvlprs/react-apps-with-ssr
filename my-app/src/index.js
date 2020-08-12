import React from 'react';
import ReactDOM from 'react-dom';
// import MyComponent from './MyComponent';
// import MyComponent2 from './MyComponent2';
// import MyComponent3 from './MyComponent3';
import MyComponent4 from './MyComponent4';
import './index.css';
// import './index.sass';

ReactDOM.render(
    // <React.Fragment>
    //     <MyComponent />
    //     <MyComponent2 />
    //     <MyComponent3 />
    // </React.Fragment>,
    <MyComponent4 />,
    document.getElementById('root')
);

// ReactDOM.unmountComponentAtNode(document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}
