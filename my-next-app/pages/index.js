import React from 'react';
import GetLink from '../SharedComponents/DynamicRouter';

function MyComponent() {
    return (
        <div>
            <GetLink title='Page 1' Disp='page-1'></GetLink>
            <GetLink title='Page 2' Disp='page-2'></GetLink>
            <GetLink title='Page 3' Disp='page-3'></GetLink>
        </div>
    );
}

export default MyComponent;
