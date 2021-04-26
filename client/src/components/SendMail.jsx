
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function SendMail(props) {
  const {id} = useParams()
  // console.log(id);
  const [message,setMessage] = useState('')
  const handleClick =async (e)=>{
    e.preventDefault();
    try {
        const res = await axios.post(`http://localhost:5000/reply/${id}`,{message});
        if(res) props.history.push('/client');
      } catch (error) {
        if(error) console.log(error.response);
      }
  }
  const handleChange = (e)=>{
    console.log(e.target.value);
    setMessage(e.target.value)
  }

   const [contact,setContact]= useState([])

  const getContact =async ()=>{
   try {
      const {data} = await axios.post(`http://localhost:5000/singlecontact/${id}`);
    if(data) setContact(data)
    // if(data) console.log(data);
   } catch (error) {
     if(error) console.log(error.response);
   }
  }
  useEffect(()=>{
    getContact()
  },[])

  

  return (

    <div className="container">
    {
      contact && (
        <>
             <h1> Repondre </h1>
         <p>
           <span>A : {contact.fname} {contact.lname}</span> 
         </p>
         <p>
           <span>Email :  {contact.email}</span> 
         </p>
         <p>
           <span>Message :{contact.message} </span> 
         </p>
        </>
      )
    }

    {/* <div className="container mt-5"> */}
      <form id="main-contact-form" name="contact-form" >
        <div class="form-group">
          <input
           
            type="text"
            name="subject"
            className="form-control"
            placeholder="Subject"
            onChange={handleChange}
            // value={input.subject}
            required="required"
          ></input>
        </div>

        <div class="form-group">
          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="Email Address"
            onChange={handleChange}
            // value={input.email}
            required="required"
          ></input>
        </div>

        <div class="form-group">
          <textarea
            name="message"
            id="message"
            class="form-control"
            rows="4"
            placeholder="Enter your message"
            onChange={handleChange}
            // value={input.message}
            required="required"
          ></textarea>
        </div>
        <div class="form-group">
          <button 
          onClick={handleClick}
          type="submit" 
          className="btn-submit">
            Send Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
