import React from 'react';
import Link from 'next/link';

function MyComponent() {
    return (
        <div>
            <p>Hello from Next.js!</p>
            <Link href={{ pathname: '/about' }}>
                <a>About Page</a>
            </Link>
        </div>
    );
}

export default MyComponent;
