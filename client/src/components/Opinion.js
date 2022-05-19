import thumbUpempty from '../images/thumbUp_empty.png';
import thumbUpcolored from '../images/thumbUp_colored.png';
import thumbDownempty from '../images/thumbDown_empty.png';
import thumbDowncolored from '../images/thumbDown_colored.png';

import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { opinionData } from './OpinionSampleData';
import {  useNavigate, useLocation } from 'react-router-dom';

const OPINION_URL = '/Opinion'
const OPINION_RATE_URL = '/OpinionRate'


const Opinion = ({ name }) => 
{
    const [comment, setComment] = useState(JSON.parse(JSON.stringify(opinionData)));
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [addOpinionFlag, setAddOpinionFlag] = useState(0);
    const [commentValue, setCommentValue] = useState('');
    const [auth] = useState('$123');
    const [errMsg, setErrMsg] = useState();

    useEffect(() => 
    {
        const fetchData = async () => 
        {
            try 
            {
                const response = await axios.get(OPINION_URL,
                    {auth: auth, subject_name: name},
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );
                setComment(JSON.stringify(response?.data));
            } catch (err) 
            {
                if (!err?.response) 
                {
                    console.log('No Server Response');
                } 
                else 
                {
                    console.log('Error occured');
                }
            }
        }
      
        fetchData().catch(console.error);
      }, [])



    const handleRateOpinion = (data) =>
    {
        let copy = comment.map((x) => x);

        for (var i = 0; i < copy.length; i++) 
        {
            if (copy[i].author === data.author && copy[i].date === data.date) 
            {
                if(copy[i].value !== data.value)
                {
                    try 
                    {
                        axios.put(OPINION_RATE_URL,
                            {auth: auth, subject_name: name, author: data.author, date: auth.date, value: data.value},
                            {
                                headers: { 'Content-Type': 'application/json' },
                                withCredentials: true
                            }
                        );
                    }
                    catch (err) 
                    {
                        if (!err?.response) 
                        {
                            console.log('No Server Response');
                        } 
                        else 
                        {
                            console.log('Error occured');
                        }
                    }
                }

                
                if(copy[i].value !== data.value)
                {
                    if(copy[i].value === 'none')
                    {
                        copy[i].value = data.value;
                        let d = data.value ==='positive' ? 1 : -1;
                        if(data.value === 'positive' || data.value === 'negative')
                        {
                            let usefull = copy[i].votes * copy[i].usefulness.slice(0, -1)/100;
                            usefull = usefull+d;
                            copy[i].votes = parseInt(copy[i].votes)+1;
                            copy[i].usefulness = Math.round((usefull)/copy[i].votes*100) + "%";
                            copy[i].value = data.value
                            setComment(copy);
                        }
                    }
                    else if(copy[i].value === 'positive' || copy[i].value === 'negative' )
                    {
                        copy[i].value = data.value;
                        let d = data.value ==='positive' ? 2 : -2;
                        if(data.value === 'positive' || data.value === 'negative')
                        {
                            let usefull = copy[i].votes * copy[i].usefulness.slice(0, -1) / 100;
                            usefull = usefull+d;
                            copy[i].usefulness = Math.round((usefull)/copy[i].votes*100) + "%";
                            copy[i].value = data.value
                            setComment(copy);
                        }
                    }

                    return;
                } 
            }
        }
    }

    const handleCommentSend = () =>
    {
        if(commentValue.length < 16)
        {
            setErrMsg('Comment must be longer than 15 letters!');
        }
        else
        {
            setErrMsg('');
            try 
            {
                axios.put(OPINION_URL,
                    {auth: auth, subject_name: name, author: auth, date: auth.date, content: commentValue},
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );
                setAddOpinionFlag(0);
            } catch (err) 
            {
                if (!err?.response) 
                {
                    console.log('No Server Response');
                } 
                else 
                {
                    console.log('Error occured');
                }
            }
        }
       
    }

    return (
        <>
            {addOpinionFlag === 0 ? 
                (<div className='Opinions'>
                    <div id="name">
                        {name?name.name:"undefined name"}
                    </div>
                        <button onClick={function() { setAddOpinionFlag(1) } }>Add opinion</button>
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
                                    <div id='contentColumn'>
                                        <div id="grade">
                                            The rating was useful on {data.usefulness} positive with {data.votes} votes.
                                            <br/>
                                            <div id='thumb'>
                                                <img src={data.value==='positive'?thumbUpcolored:thumbUpempty} 
                                                alt="thumbUp" width="64" height="64" 
                                                onClick={ function(){handleRateOpinion({author: data.author, date: data.date, value: 'positive'})}}/>
                                            </div>
                                            <div id='thumb'>
                                                <img src={data.value==='negative'?thumbDowncolored: thumbDownempty} 
                                                alt="thumbDown" width="64" height="64" 
                                                onClick={ function(){handleRateOpinion({author: data.author, date: data.date, value: 'negative'})}}/>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                </div>
                                <br/>
                            </div>
                            </div>))}
                        </div>
                        <div>
                            <button onClick={function(){navigate(from, { replace: true })} }>Go back</button>
                        </div>
                </div>)
                :
                (
                    <div className='Opinions'>
                        <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <div id="name">
                            {name?name.name:"undefined name"}
                        </div>
                        <div className="sendComment">
                            <textarea placeholder="Enter your opinion here!" rows="4" cols="50" 
                            value={commentValue} onChange={function(event){ setCommentValue(event.target.value) }} ></textarea>
                            <button id="buttonCentered" onClick={handleCommentSend} >Send</button>
                        </div>
                        <div>
                            <button onClick={function(){setAddOpinionFlag(0)} }>Go back</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Opinion