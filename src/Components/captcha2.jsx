
import React, { useState} from 'react';
import '../Components/Pages/Tradeshowinnerpages/trade.css';


function Captcha2 () {
  const [user, setUser] = useState({
    username: ""
  });
  const characters = 'abc123';
  function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const captcha = generateString(6) // Function called here and save in captcha variable
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    user[name] = value;
    setUser(user);
  }
  const onSubmit = e => {
    var element = document.getElementById("succesBTN");
    var inputData = document.getElementById("inputType");
    element.style.cursor = "wait";
    element.innerHTML = "Checking...";
    inputData.disabled = true;
    element.disabled = true;
    var myFunctions = function () {
      if (captcha == user.username) {
        element.style.backgroundColor = "green";
        element.innerHTML = "Captcha Verified";
        element.disabled = true;
        element.style.cursor = "not-allowed";
        inputData.style.display = "none";

      }
      else {
        element.style.backgroundColor = "red";
        element.style.cursor = "not-allowed";
        element.innerHTML = "Not Matched";
        element.disabled = true;
        //  element.disabled = true;
        var myFunction = function () {
          element.style.backgroundColor = "#007bff";
          element.style.cursor = "pointer";
          element.innerHTML = "Verify Captcha";
          element.disabled = false;
          inputData.disabled = false;
          inputData.value = 'sssss';
        };
        setTimeout(myFunction, 5000);
      }
    }
    setTimeout(myFunctions, 5000);
  };

  return (





    <div >
   


      <div className='captcha_box'>
      <h4 id="captcha " className='Captcha2' style={{ marginTop: "0px", marginLeft: "178px", position: "absolute" ,padding:"7px",border:"1px solid #A8cf45",backgroundColor:"#fff"}}>{captcha}</h4>
        <input type="text" id="inputType" className="form-control" placeholder="Enter Captcha"
          name="username" onChange={handleChange} required style={{ width: "65%" , padding:"10px" ,border:"1px solid #A8cf45" }}
        />
        <button type="button" id="succesBTN" className='successb' onClick={onSubmit} style={{top: "0", left:"0"}}>Verify Captcha</button>
        
      </div>

    </div>

  );
}
export default Captcha2;