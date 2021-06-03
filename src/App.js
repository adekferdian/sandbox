import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [studentNumber, setStudentNumber] = React.useState("")
  const [errorStudentNumber, setErrorStudentNumber] = React.useState(false)
  const [errorStudentNumberMessage, setErrorStudentNumberMessage] = React.useState("")
  const [studentName, setStudentName] = React.useState("")
  const [errorStudentName, setErrorStudentName] = React.useState(false)
  const [errorStudentNameMessage, setErrorStudentNameMessage] = React.useState("")
  const [birthPlace, setBirthPlace] = React.useState("")
  const [errorBirthPlace, setErrorBirthPlace] = React.useState(false)
  const [errorBirthPlaceMessage, setErrorBirthPlaceMessage] = React.useState("")
  const [birthDate, setBirthDate] = React.useState("")
  const [errorBirthDate, setErrorBirthDate] = React.useState(false)
  const [errorBirthDateMessage, setErrorBirthDateMessage] = React.useState("")
  const [homeAddress, setHomeAddress] = React.useState("")
  const [errorHomeAddress, setErrorHomeAddress] = React.useState(false)
  const [errorHomeAddressMessage, setErrorHomeAddressMessage] = React.useState("")
  const [homePhoneNumber, setHomePhoneNumber] = React.useState("")
  const [errorHomePhoneNumber, setErrorHomePhoneNumber] = React.useState(false)
  const [errorHomePhoneNumberMessage, setErrorHomePhoneNumberMessage] = React.useState("")
  const [mobileNumber, setMobileNumber] = React.useState("")
  const [errorMobileNumber, setErrorMobileNumber] = React.useState(false)
  const [errorMobileNumberMessage, setErrorMobileNumberMessage] = React.useState("")

  const handleSave = () => {
    if (!studentNumber) {
      setErrorStudentNumber(true)
      setErrorStudentNumberMessage("Student Number is required")
    } if (!studentName) {
      setErrorStudentName(true)
      setErrorStudentNameMessage("Student Name is required")
    } if (!birthPlace) {
      setErrorBirthPlace(true)
      setErrorBirthPlaceMessage("Birth Place is required")
    } if (!birthDate) {
      setErrorBirthDate(true)
      setErrorBirthDateMessage("Birth Date is required")
    } if (!homeAddress) {
      setErrorHomeAddress("true")
      setErrorHomeAddressMessage("Home Address is required")
    } if (!homePhoneNumber) {
      setErrorHomePhoneNumber("true")
      setErrorHomePhoneNumberMessage("Home Phone Number is required")
    } if (!mobileNumber) {
      setErrorMobileNumber(true)
      setErrorMobileNumberMessage("Mobile Number is required")
    }
  }

  const handleReset = () => {
    setStudentNumber("")
    setStudentName("")
    setBirthPlace("")
    setBirthDate("")
    setHomeAddress("")
    setHomePhoneNumber("")
    setMobileNumber("")
  }
  return (
    <div className="App">
      <div style={{border: '1px solid rgb(214, 207, 207)', borderRadius: '3px', width: '90%', margin: 'auto', marginTop: '1rem'}}>
        <h1 style={{textAlign: 'start'}}>Student Add</h1>
        <div style={{display: 'flex'}} className="grid grid-2x grid-mobile-none gap-15px" >
          <div className="column-1" style={{width: '30%', paddingLeft: 10, textAlign: 'start'}}>
            <h5 style={{fontWeight: 'normal', height: 30, marginBottom: 2}}>Student Number</h5>
            <h5 style={{fontWeight: 'normal', height: 30, marginBottom: 2}}>Student Name</h5>
            <h5 style={{fontWeight: 'normal', height: 30, marginBottom: 2}}>Birth Place</h5>
            <h5 style={{fontWeight: 'normal', height: 30, marginBottom: 2}}>Birth Date</h5>
            <h5 style={{fontWeight: 'normal', height: 30, marginBottom: 22, paddingTop: 2}}>Home Address</h5>
            <h5 style={{fontWeight: 'normal', height: 30, marginBottom: 2}}>Home Phone Number</h5>
            <h5 style={{fontWeight: 'normal', height: 30, marginBottom: 2}}>Mobile Number</h5>
          </div>
          <div className="column-2" style={{textAlign: 'start'}}>
            <div>
              <input style={{height: 30, width: '20vw', marginBottom: '2px'}}
              onChange={(e) => {
                setStudentNumber(e.target.value)
                setErrorStudentNumber(false)
              }}
              value={studentNumber}
              />
            </div>
            {
              errorStudentNumber ? 
              <p style={{color: 'red', fontSize: 12, marginBottom: -1}}>{errorStudentNumberMessage}</p> : null
            }
            <div>
              <input style={{height: 30, width: '20vw', marginBottom: '2px'}}
                onChange={(e) => {
                  setStudentName(e.target.value)
                  setErrorStudentName(false)
                }}
                value={studentName}
              />
            </div>
            {
              errorStudentName ? 
              <p style={{color: 'red', fontSize: 12, marginBottom: -1}}>{errorStudentNameMessage}</p> : null
            }
            <div>
              <input style={{height: 30, width: '20vw', marginBottom: '2px'}}
                onChange={(e) => {
                  setBirthPlace(e.target.value)
                  setErrorBirthPlace(false)
                }}
                value={birthPlace}
              />
            </div>
            {
              errorBirthPlace ? 
              <p style={{color: 'red', fontSize: 12, marginBottom: -1}}>{errorBirthPlaceMessage}</p> : null
            }
            <div style={{display: 'flex'}}>
              <input style={{height: 30, width: '20vw', marginBottom: '2px'}}
                onChange={(e) => {
                  setBirthDate(e.target.value)
                  setErrorBirthDate(false)
                }}
                value={birthDate}
              /> 
              <p style={{paddingLeft: 10}}>(dd-MM-yyyy)</p>
            </div>
            {
              errorBirthDate ? 
              <p style={{color: 'red', fontSize: 12, marginBottom: 3, marginTop: -9}}>{errorBirthDateMessage}</p> : null
            }
            <div>
              <textarea style={{height: 45, width: '27.5vw', marginBottom: 2, marginTop: -5}}
                onChange={(e) => {
                  setHomeAddress(e.target.value)
                  setErrorHomeAddress(false)
                }}
                value={homeAddress}
              >
              </textarea>
              {
                errorHomeAddress ? 
                <p style={{color: 'red', fontSize: 12, marginBottom: -1, marginTop: -7}}>{errorHomeAddressMessage}</p> : null
              }
            </div>
            <div>
              <input style={{height: 30, width: '20vw', marginBottom: '2px'}}
                onChange={(e) => {
                  setHomePhoneNumber(e.target.value)
                  setErrorHomePhoneNumber(false)
                }}
                value={homePhoneNumber}
              /> 
            </div>
            {
              errorHomePhoneNumber ? 
              <p style={{color: 'red', fontSize: 12, marginBottom: -1}}>{errorHomePhoneNumberMessage}</p> : null
            }
            <div>
              <input style={{height: 30, width: '20vw', marginBottom: '2px'}}
                onChange={(e) => {
                  setMobileNumber(e.target.value)
                  setErrorMobileNumber(false)
                }}
                value={mobileNumber}
              /> 
            </div>
            {
              errorMobileNumber ? 
              <p style={{color: 'red', fontSize: 12, marginBottom: -1}}>{errorMobileNumberMessage}</p> : null
            }
          </div>
        </div>
        <div style={{paddingLeft: 10, marginBottom: 10, textAlign: 'start', display: 'flex', justifyContent: 'space-between', width: '10.5vw'}}>
          <button style={{width: 70, borderRadius: 5}} onClick={() => handleSave()}>Save</button>
          <button style={{width: 70, borderRadius: 5}} onClick={() => handleReset()}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
