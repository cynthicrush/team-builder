import React, { useState } from 'react';
// import { render } from 'react-dom';
import TeamForm from './TeamForm';
import Team from './Team';
import './App.css';

const teamMembers = [
  {name: 'John', email: 'john@lsmail.com', role: 'Back-end Engineer'},
  {name: 'Debbie', email: 'debbie@lsmail.com', role: 'Front-end Engineer'},
  {name: 'Lisa', email: 'lisa@lsmail.com', role: 'Designer'}
];

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {

  const [team, setTeam] = useState(teamMembers);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]:inputValue
    })
  }

  const submitForm = () => {
    const newMember ={
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }
    if(!newMember.name || !newMember.email || !newMember.role) {
      return;
    }

    setTeam([...team, newMember]);
    setFormValues(initialFormValues);
    
  }
  return (
    <div className="App">
      <div className="header">
        <h1>Team Members</h1>
      </div>
      
      <TeamForm values={formValues} update={updateForm} submit={submitForm} />

      {team.map(member => {
        return(
          <Team key={member.email} info={member}/>
        )
      })}
    </div>
  );
}

export default App;
