import React, { useState, useEffect } from 'react';
import { Card, CardBody, Table, Spinner } from 'reactstrap';

import { apiAuth } from '../../basara-api';

/* class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          questions: []
        };
      }
    
}
 */
export default ({ id }) => {
    const [questions, setQuestions] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = () => {
            apiAuth
                .get(`/comments/details/${id}`)
                .then(res => {
                    if (res.data === null) setQuestions(prevQuestions => []);
                    else setQuestions(prevQuestions => res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        };
        fetchDetails();
    }, [id]);

    if(questions === null){
        return  <p>  {loading ? <Spinner color="primary" type="grow" /> : null}</p>
    }
    return(
        <>
        <ul>
        <h1>{ questions.username}</h1>
        </ul>
        
       </>
    );
};


 /*  if (questions !== null){
        return (<>
        <Card>
            <CardBody>
           
           {questions.date}
           {questions.length}
          
            </CardBody>
        </Card>
        </>);
    }

    return (
    
            <p>  {loading ? <Spinner color="primary" type="grow" /> : null}</p>
    ); */

{/* {questions.length>0 && questions.map(book => (
          book.date
      ))}
          */}  