import React from 'react';

    export default function TeamForm(props) {
        const { values, update, submit} = props;

    const onChange = evt => {
        const {name, value} = evt.target;
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="inputs">
                <div className="info">
                    <label className="labels">Name
                        <input name='name' type='text' value={values.name} onChange={onChange} placeholder='Enter your name...'  />
                    </label>
                </div>
                
                <div className="info">
                    <label className="labels">Email
                        <input name='email' type='email' value={values.email} onChange={onChange} placeholder='Enter your email...' />
                    </label>
                </div>
                
                <div className="info"> 
                    <label className="labels">Role
                        <select name='role' value={values.role} onChange={onChange}>
                            <option>Select your role</option>
                            <option value='Front-end Engineer'>Front-end Engineer</option>
                            <option value='Back-end Engineer'>Back-end Engineer</option>
                            <option value='Designer'>Designer</option>
                        </select>
                    </label>
                </div>
               
                <div className='submit'>
                    <button className="button">Submit</button>
                </div> 
            </div>
        </form>
    )

}