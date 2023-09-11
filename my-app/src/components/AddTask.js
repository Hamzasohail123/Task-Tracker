import React, { useState } from 'react';


const AddTask = ({onAdd}) => {

    const [text, setText] = useState(['']);
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);    

    const onsubmit = (e)=>{
        e.preventDefault();  

        if(!text){
            alert('please add task');
            return
        }
        onAdd({text,day,reminder});
        setText('');
        setDay('');
        setReminder(false);
    }


  return (
    <>
    <form className='add-form' onSubmit={onsubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)} />
        </div>

        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='Add Day & Time' value={day} onChange={(e)=>setDay(e.target.value)} />
        </div>

        <div className='form-control-check'>
            <label>Reminder</label>
            <input checked={false} type='checkbox' placeholder='Set Reminder' value={reminder} onChange={(e)=>setReminder(e.target.value)} />
        </div>

        <input type='submit' value='save task' className='btn btn-block' />


    </form>
    
    
    </>
  )
}

export default AddTask