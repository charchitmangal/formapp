import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const[firstName, setFirstName] = useState('');
  // const[lastName, setLastName] = useState('');

  // function changeFirstNameHandler(event){
  //   // console.log("Printing First Name")
  //   // console.log(event.target.value)
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event){
  //   // console.log("Printing Last Name")
  //   // console.log(event.target.value)
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", comments:"", isVisible:false, mode:"", favCar:""});

  console.log(formData);

  function changeHandler(event){
    const {name, value, checked, type } = event.target;

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type==="checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    
    //print
    console.log("Finally printing the entire form data .....")
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type='text' 
        placeholder='first name' 
        onChange={changeHandler} 
        name="firstName"
        value={formData.firstName}></input>
        
        <br></br>
        <br></br>

        <input type='text' 
        placeholder='last name' 
        onChange={changeHandler} 
        name="lastName"
        value={formData.lastName}></input>

        <br></br>
        <br></br>

        <input type='email' 
        placeholder='Enter Your Email here' 
        onChange={changeHandler} 
        name="email"
        value={formData.email}></input>

        <br></br>
        <br></br>

        <textarea 
        placeholder='Enter your message here' 
        onChange={changeHandler} 
        name='comments'
        value={formData.comments}>
        </textarea>

        <br></br>
        <br></br>

        <input type='checkbox'
        onChange={changeHandler}
        name='isVisible'
        id='isVisible'
        checked={formData.isVisible}
        >
        </input>

        <label htmlFor='isVisible'>Am I Visible</label>

        <br></br>
        <br></br>

        <fieldset>
          <legend>Mode:</legend>
              <input type='radio'
            onChange={changeHandler}
            name='mode'
            value="Online Mode"
            id="Online Mode"
            checked={formData.mode === "Online Mode"}
            >
            </input>
            <label htmlFor="Online Mode">Online Mode</label>

            <input type='radio'
            onChange={changeHandler}
            name='mode'
            value="Offline Mode"
            id="Offline Mode"
            checked={formData.mode ==="Offline Mode"}
            >
            </input>
            <label htmlFor="Offline Mode">Offline Mode</label>
        </fieldset>
        
        <label htmlFor='favCar'>Tell me your favourite Car</label>

        <select 
          onChange={changeHandler}
          name="favCar"
          id="favCar"
          value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Wagnor">Wagnor</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Ferrari">Ferrari</option>

        </select>

        <br></br>
        <br></br>
        {/* <input value="Submit Now" type="submit"></input> */}
        <button>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;





