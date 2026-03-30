import React from 'react';
import useInputField from '../../hooks/useinputfield';

const HookForm = () => {
    const [name,nameOnChange]=useInputField('')
    const[email,emailOnChange]=useInputField('');
    const handleSubmit=e=>{
        e.preventDefault();
        console.log('sumb',name,email)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnChange} />
                <br />
                <input type="email" defaultValue={email} onChange={emailOnChange} name="" id="" /> <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default HookForm;