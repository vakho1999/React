import React from 'react';
const ProgressBar = (props) => {
    const {todolist} = props.value
    const progressValue = [todolist['Backlog'],todolist['To Do'],todolist['In Progress'],todolist['Done']].map(section => {
                    return section.items.length
                })
    const sum = progressValue.reduce(function(acc, val) { return acc + val; }, 0)
    const reds = Math.round((progressValue[0] * 100) / sum,1)  
    const pinks =  Math.round((progressValue[1] * 100) / sum,1)
    const greens =  Math.round((progressValue[2] * 100) / sum,1)  
    const yellows =  Math.round((progressValue[3] * 100) / sum,1)  
    // console.log('vased',(progressValue[0] * 100) / sum)

    return ( 
        <div class="w3-container">
        <div class="w3-section w3-light-grey w3-round-xlarge w3-center vas" style={{marginTop:'10px'}}>
        <div class="w3-container w3-red w3-round-xlarge w3-padding-small lighten-3 w3-center " style={{width:`${reds}%`}}>{reds}%</div>
        </div>
        <div class="w3-section w3-light-grey w3-round-xlarge w3-center darken-1 vas" style={{marginTop:'10px'}}>
        <div class="w3-container w3-pink  w3-round-xlarge w3-padding-small w3-center " style={{width:`${pinks}%`,backgroundColor: '#d81b60 !important;'}}>{pinks}%</div>
        </div>
        <div class="w3-section w3-light-grey w3-round-xlarge w3-center vas" style={{marginTop:'10px'}}>
        <div class="w3-container w3-green  w3-round-xlarge w3-padding-small w3-center " style={{width:`${greens}%`,backgroundColor: '#43a047 !important;'}}>{greens}%</div>
        </div>
        <div class="w3-section w3-light-grey w3-round-xlarge w3-center   vas" style={{marginTop:'10px'}}>
        <div class="w3-container w3-yellow  w3-round-xlarge w3-padding-small  darken-3 w3-center " style={{width:`${yellows}%`,backgroundColor: '#c0ca33 !important;'}}>{yellows}%</div>
        </div>
    
        </div>
        // <div class="w3-border" style={{
        //     backgroundColor: 'red',
        //     width:'100%',
        //     borderRadius: '50px'
        // }}>
        // <div class="w3-grey" style={{height:'24px',width:'20%',  backgroundColor: 'red'}}></div>
        

    // </div>
    )
}
export default ProgressBar;