import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Card, Row, Button, Col, CardTitle, Icon} from 'react-materialize'
import Truncate from 'react-truncate';

const Movies = () => {
    const [movies, setData] = useState([]);


    const fetchData = () =>{
        axios.get('https://yts.mx/api/v2/list_movies.json')
        .then(response =>{
            let movies = response.data.data.movies
            console.log(movies)
            setData(movies)
        })
    }
   
    
    
    
  useEffect(() => {
    fetchData();
}, []);


function useInput({ type /*...*/ }) {
    const [value, setValue] = useState("");
    const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;

    return [value, input];
  }
  const [ userInput] = useInput({ type: "text" });

return (
    <div>
        <div className="container truncate">
                <h5 className="center white-text flow-text">Movies  Collections</h5>
                {userInput}
                <Row >
                    {
                        movies.map(item => {

                        return ( 
                           
                            <Col
                              m={3}
                              s={12}
                              key={item.id}
                            >
                              <Card
                                actions={[
                                 <a key="1" href={item.torrents[0].url}>Download</a> 
                                ]}
                                closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image={item.medium_cover_image}>{item.year}</CardTitle>}
                                revealIcon={<Icon>more_vert</Icon>}
                              >
                                 <Truncate lines={4} ellipsis={<span>... <a>{}</a></span>}>
                                    {item.summary}
                                </Truncate>
                              </Card>
                            </Col>
                      
                        )
                        })
                    }
                    </Row>
        </div>
    </div>
)

}

export default Movies