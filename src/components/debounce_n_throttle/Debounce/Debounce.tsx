import React, { useState, useEffect } from 'react';

// SIMPLEST DEBOUNCE

const Debounce = () => {
    const [value, setValue] = useState('');

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            if(value) {
                //Make API call
                console.log('API CALL ', value);
            }
        }, 500);

        return ()=> clearTimeout(timeout);
    }, [value])

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return ( 
        <div>
            <h1>Debounce</h1>
            <input
                onChange={changeHandler}
                value={value}
            />
        </div>
    );
}
 
export default Debounce;