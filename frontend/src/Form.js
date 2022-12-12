import React,{useState} from 'react';
import Header from './Header';

const Form = () => {
    const [name,setName] = useState('')
    const handlename = (e) => {
        setName(e.target.value);
    }
    const [age,setAge] = useState('')
    const handleage = (e) => {
        setAge(e.target.value);
    }
    const [email,setEmail] = useState('')
    const handlemail = (e) => {
        setEmail(e.target.value);
    }
    const [password,setPassword] = useState('')
    const handlepassword = (e) => {
        setPassword(e.target.value);
    }
    return (
        <div className="header" >
            <h3 className='form-control'>
                User Registration~{"\n"}
        <form >
        <label className="label">Name</label>
        <input onChange={handlename} className="form-control" type="text" value={name} ></input>
        <label className="label">Age</label>
        <input onChange={handleage} className="form-control" type="number" value={age}></input>
        <label className="label">Email</label>
        <input onChange={handlemail} className="form-control" type="email" value={email}></input>
        <label className="label">Password</label>
        <input onChange={handlepassword} className="form-control" type="password" value={password}></input>
        </form>
        <label className="label">Batch</label>
        <br/>
        <select  className="form-control" name="batch" required>
		<option value="" disabled selected>Batch</option>
        <option>6-7 AM</option>
		<option>7-8 AM</option>
		<option>8-9 AM</option>
		<option>5-6 PM</option>
        <a href='/payment'> Payment</a>
	</select>
    
    <button type="submit" class="btn btn-primary">Register</button>
        </h3>
        </div>);
}
 
export default Form;