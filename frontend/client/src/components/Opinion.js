import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axios.js';
import {  useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom"



const Opinion = () => 
{
    const [searchParams] = useSearchParams();
    const [id] = useState(searchParams.get('id'));
    const [name] = useState(searchParams.get('name'));
    const [objectIsLecturer] = useState(searchParams.get('objectType') === "lecturer" ? true : false);

    const OPINION_GET_URL = 'reviews'

    const [comment, setComment] = useState([]);
    const navigate = useNavigate();

    useEffect(() => 
    {
        try {
            axiosInstance
            .get(OPINION_GET_URL, {})
            .then((res) => 
            {
                
                var arr = [];
                let copy = res.data.map((x) => x);
                for (var i = 0; i < copy.length; i++) 
                {
                    if(objectIsLecturer?(copy[i].lecturer):(copy[i].course) === parseInt(id))
                    {
                        let temp =
                        { 
                            "date": copy[i].upload_date.slice(0, 10),   
                            "author": copy[i].author_name + " " +  copy[i].author_surname,
                            "text": copy[i].description,
                            "usefulness": "65%",   
                            "votes": 20,
                            "value": "none"   
                        }
                        arr.push(temp);
                    }
                }
                setComment(JSON.parse(JSON.stringify(arr)));
            });
        } catch (err) {}
    }, []);

    return (
        (sessionStorage.getItem('access_token') != null)?
            <div className='Opinions'>
                    <div id="name">
                        {name?name:"undefined name"}
                    </div>
                    {
                    <Link style={{marginRight: '20vh'}} to={objectIsLecturer?
                        ('/addOpinionLecturer'+'?name='+name + '&id=' + id):
                        ('/addOpinionSubject'+'?name='+name + '&id=' + id) }>
                            Wystaw opinie</Link>
                    }
                        <div className='Comments'>
                            { comment.map(data => (  
                        <div key={data.usefulness}>
                            <div id="comment">
                                <div id="author">{data.date} {data.author}</div>
                                <br/>
                                <div id="content">
                                    <div id='contentColumn'>
                                        <div id='text'>{data.text}</div>
                                    </div>
                                    <br/>
                                </div>
                                <br/>
                            </div>
                            </div>))}
                        </div>
                        <div>
                            <button onClick={() => navigate(-1) }>Go back</button>
                        </div>
                </div>
                :
                ""
    )
}

export default Opinion