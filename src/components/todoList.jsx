import React, { Component } from 'react';
import ProgressBar from './ProgressBar.jsx';
import FormDialog from './Form';
import moment from 'moment';
class todos extends Component{
    constructor(props){
        super(props)
       
      
        this.state = {'showdialog':false,'columnWrapper':{height:'100%',width:'16.5%', position: 'absolute'},
        'Progressbar':{position: 'absolute',left:'-10px',height:'200px' , width:"250px"}}
        
    
    }
    onDragStart = (ev, id,oldsection) => {
        // console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
        ev.dataTransfer.setData("oldsection", oldsection);
    }
    // componentDidMount(){
    //     setTimeout(() => {
    //         const todolists = this.props.todolist.todolist
    //         this.progressValue = [todolists['Backlog'],todolists['To Do'],todolists['In Progress'],todolists['Done']].map(section => {
    //             return section.items.length
    //         })

    //         console.log(this.progressValue)
    //     },.bind(this), 1000);
       
    // }
  
    
    
    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, section) => {
       let id = ev.dataTransfer.getData("id");
       let oldsection = ev.dataTransfer.getData("oldsection");
       var {todolist,setTodolist} = this.props.todolist
       let card =  todolist[oldsection].items[id]
       todolist[oldsection].items.splice(id, 1)
       todolist[section].items.push(card)
       setTodolist({...todolist})
    }

    handleDelete(e){
        var index = e.target.attributes.index.value
        var {todolist,setTodolist} = this.props.todolist
        // console.log(e.target.attributes.index.value)
        todolist[e.target.attributes.section.value].items.splice(index, 1)
        setTodolist({...todolist})
        
    }
    content(){
        const {todolist,setTodolist} = this.props.todolist
        const searchtext = this.props.searchtext
        const lists = 
        Object.entries(todolist).map((i)=>{
                const pulse = false ? 'pulse' : '' 
                return <div  onDragOver={(e)=>this.onDragOver(e)}
                onDrop={(e)=>{this.onDrop(e, i[0])}} key={Math.random()} className="col s3 m3">
                <div style={this.state.columnWrapper}>
                </div>
            
                <div className={`card-panel ${i[1]['color']} darken-1 z-depth-5  `} style={{justifyContent:'space-between',display:'flex'}} >
                <span className="card-title white-text">{i[0]}  </span>
                <FormDialog section={i[0]} Title={''} content={''} selectedDate={new Date()} todolist={{todolist,setTodolist}} className={`btn-floating btn-large waves-effect waves-light ${i[1]['color']} ${pulse} `}/>

                </div>
                {
                searchtext.length === 0 ?
                i[1]['items'].map((item,index)=>{
                    // console.log(item)
                    return (
                     <div onDragStart = {(e) => this.onDragStart(e, index,i[0])}
                     draggable key={Math.random()} className={`card ${i[1]['color']} lighten-1 z-depth-3`} style={{borderRadius:'8%',cursor:'grab'}}>
                     <div className="card-content white-text" >
                     <span className="card-title ">{item['title']} <h6 >{moment(item['selectedDate']).format('DD-MM HH : mm')} </h6></span>
                     <p>{item['context']}</p>
                     </div>
                     <div className="card-action" style={{justifyContent:'space-between',display:'flex',borderRadius:'50%'}}>
                     <a className={`btn-floating btn-large waves-effect waves-light ${i[1]['color']}`}><i  index={index} section={i[0]}  onClick={this.handleDelete.bind(this)} className="material-icons">delete_forever</i></a>
                     <FormDialog section={i[0]} Title={item['title']} content={item['context']} selectedDate={item['selectedDate']} todolist={{todolist,setTodolist}} className={`btn-floating btn-large waves-effect waves-light ${i[1]['color']} ${pulse} `}/>

                     {item['selectedDate'] <= new Date() &&<a className="btn-floating btn-large waves-effect waves-light black ligthen-1 pulse"><i className="material-icons">access_alarm</i></a>}
                     </div>
                 </div>
                    )
                })
                : 
                i[1]['items'].filter((item) =>  item.title.includes(searchtext)).map((item,index)=>{
                    // console.log(item)
                    return (
                     <div onDragStart = {(e) => this.onDragStart(e, index,i[0])}
                     draggable key={Math.random()} className={`card ${i[1]['color']} lighten-1 z-depth-3`} style={{borderRadius:'8%',cursor:'grab'}}>
                     <div className="card-content white-text" >
                     <span className="card-title">{item['title']} <h6 >{moment(item['selectedDate']).format('DD-MM HH : mm')} </h6></span>
                     <p>{item['context']}</p>
                     </div>
                     <div className="card-action" style={{justifyContent:'space-between',display:'flex',borderRadius:'50%'}}>
                     <a className={`btn-floating btn-large waves-effect waves-light ${i[1]['color']}`}><i  index={index} section={i[0]}  onClick={this.handleDelete.bind(this)} className="material-icons">delete_forever</i></a>
                     <FormDialog section={i[0]} Title={item['title']} content={item['context']} selectedDate={item['selectedDate']}  todolist={{todolist,setTodolist}} className={`btn-floating btn-large waves-effect waves-light ${i[1]['color']} ${pulse} `}/>

                     {item['selectedDate'] <= new Date() &&<a className="btn-floating btn-large waves-effect waves-light black ligthen-1 pulse tooltipped" data-position="bottom" data-tooltip="I am a tooltip" ><i className="material-icons">access_alarm</i></a>}
                     </div>
                 </div>
                    )
                })
                }
               
            
            </div>
            })
        return lists;
    }

    render(){
       return (
        <div className="row">
            <div style={this.state.Progressbar} className="col s3 m3">
            <ProgressBar value={this.props.todolist} />
            </div>
            {this.content()}
        </div>
       )
    }

}
export  {todos};