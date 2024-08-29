import React,{useState} from 'react'

const Form = () => {
 const [email, setEmail]= useState('');
 const [password, setPassword]= useState('');
 const [cpassword, setCpassword]= useState('');
 const [error, setError] = useState({errorEmail:"", errorPass:"", errorCpass:""});


 const handleEmail = (e) => {
  setEmail(e.target.value);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(e.target.value)) {
    setError((prev) => ({ ...prev, errorEmail: 'Enter a valid email' }));
  } else {
    setError((prev) => ({ ...prev, errorEmail: '' }));
  }
};
    console.log(error)
    const handlePassword=(e)=>{
        setPassword(e.target.value);

        if(password.length<8){
          setError((prev)=>({...prev,errorPass:"Password must be at least 8 characters"}));
        }
        else{
          setError((prev)=>({...prev,errorPass:""}));
        }
        
        
    }
    
    const handleConpass=(e)=>{
        setCpassword(e.target.value);
        if(cpassword !== password){
          setError((prev)=>({...prev,errorCpass:"Password do not match"}))
        }
        else{
          setError((prev)=>({...prev,errorCpass:""}))
        }
    }

    const handleSubmit=()=>{
      if(email==='' || password==='' || cpassword===''){
        alert("Can't submit the form");
      }
      else{
        alert("Form submitted successfully");
      }
    }
  return (
    <form>
        <label htmlFor='email'>Email</label>
        <input type='email' id="email" value={email} onChange={handleEmail} required/>
        {<p style={{color:"red"}}>{error.errorEmail}</p>}

        <label htmlFor='password'>Password</label>
        <input type='password' id="password" value={password} onChange={handlePassword} required/>
        {<p style={{color:"red"}}>{error.errorPass}</p>}

        <label htmlFor='cpassword'>Confirm Password:</label>
        <input type='password' id="cpassword" value={cpassword} onChange={handleConpass} required/>
        {<p style={{color:"red"}}>{error.errorCpass}</p>}

        <button type='submit' onClick={handleSubmit}>Sign Up</button>
    </form>
  )
}

export default Form