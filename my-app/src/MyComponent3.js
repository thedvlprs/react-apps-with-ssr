import React from 'react';

const data = [
    {
        web_page: 'http://www.davietjal.org/',
        state_province: 'Punjab',
        name: 'DAV Institute of Technology',
        country: 'India',
    },
    {
        web_page: 'http://www.lpu.in/',
        state_province: 'Punjab',
        name: 'Lovely Professional University',
        country: 'India',
    },
    {
        web_page: 'http://www.ddu.ac.in/',
        state_province: 'Gujarat',
        name: 'Dharamsinh Desai University',
        country: 'India',
    },
];

function MyComponent3(props) {
    return (
        <div>
            <h1>Universities in India</h1>
            <br />
            {data.map((item, index) => (
                <div key={index}>
                    {' '}
                    <h2>{item.name}</h2>{' '}
                    <p>
                        {item.state_province},{item.country}{' '}
                    </p>
                    <a href={item.web_page}>Website</a>
                </div>
            ))}
        </div>
    );
}

export default MyComponent3;
