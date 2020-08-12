import React, { useState } from 'react';
import { useChangeAlert } from './Hooks/useChangeAlert';

function MyComponent(props) {
    const [outputValue, setOutputValue] = useState('Placeholder');

    function UpdateText() {
        setOutputValue(document.getElementById('inputTextbox').value);
    }

    useChangeAlert(`New Label Value: ${outputValue}`);

    return (
        <div>
            <input id='inputTextbox'></input>
            <button type='button' onClick={UpdateText}>
                Update
            </button>
            <br />
            <label>{outputValue}</label>
        </div>
    );
}

export default MyComponent;
