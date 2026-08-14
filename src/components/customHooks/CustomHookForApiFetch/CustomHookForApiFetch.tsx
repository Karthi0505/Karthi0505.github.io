// a custom hook for fetching API data.
import { useEffect, useState } from "react";
import axios from "axios";


type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


// Custom Hook Start -----
const useFetch = (url: string): {fetchedData: Todo[], isLoading: boolean, error: string | null } => {
    const [fetchedData, setFetchedData] = useState<Todo[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                setIsLoading(true);

                const res = await axios.get<Todo[]>(url);

                // console.log(res.data);

                setFetchedData(res.data);
            }
            catch (error) {
                setError((error as Error).message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();

    }, []);


    return {fetchedData, isLoading, error };
}
// Custom Hook End -----------------------------


const CustomHookForApiFetch = () => {

    const {fetchedData, isLoading, error} = useFetch('https://jsonplaceholder.typicode.com/todos/');

    console.log('fetchedData ', fetchedData[0]?.title);

    if(isLoading) { return (<div>Loading...</div>) }

    if(error) { return <div>{error}</div>}

    return (
        <ul>
            {fetchedData.length && fetchedData.map((el)=> (
                <li key={el.id}>{el?.title}</li>
            ))}
        </ul>
    )
}

export default CustomHookForApiFetch;