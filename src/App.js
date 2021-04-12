import React from 'react';
import './App.css';
import NavBar from './Component/NavBar';
import Projects from './Component/Projects';
import Profile from './profile/Profile';

function App() {
  const handleName = (fullName) => alert(`Hi! I am ${fullName}`);

  return (
    <div className="App" >
      <NavBar/>
      <Profile
        fullName="Maher KHORCHFI"  bio="A full stack Developer is a “do it all” developer." profession=" IT Ingenieur"

        handleName={handleName}
        
      >



        {/* Image as child_props of Profile_Component */}
        <div>
          <img src="./avatar.jpg" alt="" width={250} height={250} />
        </div>

      </Profile>
      <Projects/>
    </div>
  );
}


export default App;
