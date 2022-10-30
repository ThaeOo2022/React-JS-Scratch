import { useEffect, useState } from "react";
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results,setResult]=useState([]);

    useEffect(()=>{
       const search=async ()=>{
        const {data}=await axios.get('https://en.wikipedia.org/w/api.php',{
            params:{
                action:'query',
                list:'search',
                origin:'*',
                format:'json',
                srsearch:term,
            }
        });
        setResult(data.query.search);
       }
       search();
    },[term]);

    const renderedList=results.map(result=>{
        return(
            
                <div key={result.pageid} className="item">
                    <div className="content">
                        <div className="header">
                            {result.title}
                        </div>
                        <div dangerouslySetInnerHTML={{__html:result.snippet}}></div>
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