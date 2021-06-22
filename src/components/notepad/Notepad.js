import React, {useState} from 'react';
import './Notepad.css';
import RightSide from '../rightside/RightSide';

const Notepad = () => {

    const [notes, setNotes] = useState("");

    const handleChange = (e) => {
        setNotes(e.target.value)
    }

    return (
        <div>
            <textarea className="notepad" rows={35} value={notes} onChange={handleChange} />
            <RightSide notes={notes}/> 
        </div>
    )
}

export default Notepad