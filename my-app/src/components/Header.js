import React from 'react';
import Button from './Button';
import { green } from '@material-ui/core/colors';

export const Header = ({title,onAdd,showTask}) => {

    const onclick = (e) =>{
        console.log(e);
    }



  return (
    <header className='header'>
        
        <h1>Task Tracker</h1>
        <Button color={showTask ? 'red' : 'green'} text={showTask ? 'Close' : 'Add'} onclick={onAdd}/>
        
        

    </header>
  )
}

