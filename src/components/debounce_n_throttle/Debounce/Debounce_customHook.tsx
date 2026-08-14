
// In Component
//  - HandleChange in component
//  - useEffect for API call - re-rendering on debounce value change
// - call debounce function outside effect - i) get the deboundecd value and ii) re-run useEffect, only if the deboundecd value changes.

import { useEffect, useState } from "react";

//  In customHook
//  - another state for search text in customHook
//  - another useEffect for timeout function
//  - update the passed search value in state after delay
//. - rerun useEffect whenever search text changes

// Custom Hook Start -----
const useDebounce = (searchTextPassed: string, delayPassed: number) => {

    const [delayedText, setDelayedText] = useState('');

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            // update the delayedText in state
            setDelayedText(searchTextPassed);
        }, delayPassed);

        return ()=> clearTimeout(timeOut);

    }, [searchTextPassed])

    return delayedText;
}
// Custom Hook End -----


const Debounce_customHook = () => {

    const [searchText, setSearchText] = useState('');
    const delay = 500;

    const delayedText = useDebounce(searchText, delay);

    useEffect( ()=>{ //Effects are synchronous. So put async function inside
        const fetchdata = async (url :string)=>{
            const res = await fetch(`${url}, ${searchText}`);
            const data = await res.json();
            console.log(data);
        }

        if(searchText) {
            fetchdata('https://jsonplaceholder.typicode.com/todos/');
        }
        
    }, [delayedText]);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }

    return (
        <div>
            <h1>Debounce using Custom Hook</h1>

            <input
                onChange={changeHandler}
                value={searchText}
            />
        </div>
    );
}
 
export default Debounce_customHook;