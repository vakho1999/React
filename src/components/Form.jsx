import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DateFnsUtils from '@date-io/date-fns';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DialogTitle from '@material-ui/core/DialogTitle';

import {

  KeyboardTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider 

} from '@material-ui/pickers';

export default function FormDialog(props) { 
  const [open, setOpen] = React.useState(false);
  const [title,setTitle] = React.useState(props.Title);
  const [selectedDate, setSelectedDate] = React.useState(new Date(props.selectedDate));
  const [content,setContent] = React.useState(props.content);
  const {todolist,setTodolist} = props.todolist
  const [update,setUpdate] = React.useState(title.length > 0 || content.length > 0 );
  const section = props.section
  // console.log({title})
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  Array.prototype.insert = function ( index, item ) {
    this.splice( index, 1, item );
  };
  const Handleupdate = () => {
    const index = todolist[section]['items'].findIndex(item =>  item.title === title)
    todolist[section]['items'].insert(index,{'title':title,'context':content,'selectedDate':selectedDate})
    setTodolist({...todolist})
    
    // console.log({...todolist})
  
    
  }
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const Handlepush = () => {
    todolist[section]['items'].push({'title':title,'context':content,'selectedDate':selectedDate})
    setTodolist({...todolist})
    setUpdate(true)
    // console.log({...todolist})
    
    
  }

  return (
    <div>
      <a  className={props.className} onClick={handleClickOpen}>
      <i className="material-icons">add</i>
      </a>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Section: {props.section}</DialogTitle>
        <DialogContent>
         
          <TextField
            autoFocus
            value={title}
            onChange={e => setTitle(e.target.value) }
            id="text"
            required
            label="Title"
            type="text"
            fullWidth
          />
          <br></br>
          <br></br>
          <br></br>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          required 
          rows={8}
          value={content}
          onChange={e => setContent(e.target.value) }
          variant="outlined"
          fullWidth
        />
        <div style={{display:'flex'}}>
      
        <div >
       <MuiPickersUtilsProvider utils={DateFnsUtils}>
       <KeyboardDatePicker
          id="date-picker-dialog"
          label="Date"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
         <KeyboardTimePicker
          
           id="time-picker"
           label="Time"
           value={selectedDate}
           onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </MuiPickersUtilsProvider>
      </div>
        </div>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {update
          ?
          <Button onClick={Handleupdate} color="secondary">
          update
        </Button>
        :
        <Button onClick={Handlepush} color="secondary">
        submit
      </Button>
          
        }
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
