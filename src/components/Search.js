import { useEffect, useState } from "react";
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [deboundterm,setDeboundterm]=useState(term);
    const [results, setResult] = useState([]);
    

    useEffect(()=>{
        const timeoutid=setTimeout(()=>{
            setDeboundterm(term);
        },1000);
        return ()=>{
            clearTimeout(timeoutid);
        }
    },[term]);

    useEffect(()=>{
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: deboundterm,
                }
            });
            setResult(data.query.search);
        }
        search();

    },[deboundterm]);

    /*useEffect(() => {
       
        if (term && !results.length) {
            search();
        } else {
            const timeOutId = setTimeout(() => {
                if (term) {
                    search();
                    console.log("from settimeout");
                }

            }, 5000);

            return () => {
                clearTimeout(timeOutId);
            };
        }


    }, [term]);*/

    const renderedList = results.map(result => {
        return (

            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid= ${result.pageid}`}>
                        Go
                    </a>
                </div>
                <div className="cont`ent">
                    <div className="header">
                        {result.title}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: result.snippet }}></div>
                </div>
            </div>

        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search Term</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" />
                    {console.log(results)}
                </div>
            </div>
            <div className="ui celled list">{renderedList}</div>
        </div>
    );
}
export default Search;