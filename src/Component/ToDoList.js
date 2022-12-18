 import { Grid, TextField,Button, withTheme } from "@mui/material"
import { useState } from "react"
import ToDoListCss from "./ToDOListCss"
import CancelIcon from '@mui/icons-material/Cancel';
import Swal from "sweetalert2";

export default function  ToDoList(props)
{ 

     const classes=ToDoListCss()
    
       const [input,setInput]=useState('')
       const [ListData,setListData]=useState([])

 function AddTask()
 {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Your task has been added',
    showConfirmButton: false,
    timer: 1500
  })
  // setListData([...ListData,input])      //create latency and works ansyncronously
  // console.log(ListData)
  setListData((ListData)=>{
     const updatedList=[...ListData,input]   // works synchrono usly
      return updatedList

  })
  setInput('')

 }
 function removeTask(i){
   
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
        
   const updatedListData=ListData.filter((elem,id)=>{
    return i!=id
  })
  setListData(updatedListData)
      Swal.fire(
        'Deleted!',
        'Your Task has been deleted.',
        'success'
      )
    }
  })

 }





 const AllClear=()=>{
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      setListData('')

      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
 }


 
       

    return(
        <form>
            <div className={classes.main}>
            

            
            <div className={classes.root}>
          
            <Grid container spacing={2}>
            <Grid item xs={12} style={{textAlign:'center',  textDecoration: 'underline' ,fontWeight:'bold',fontSize:25,color:'#000'}}>
                  TODO LIST
                </Grid>
                <Grid item xs={8} style={{margin:14}}>
                  <TextField value={input} onChange={(e)=>setInput(e.target.value)}  fullWidth spellCheck label="Add Task"  />
                </Grid>
                <Grid item xs={3} style={{marginTop:10}}>
                  <Button variant="contained" onClick={AddTask} fullWidth style={{background:'#fff',color:'black',fontWeight:'bold'}} >Add Todo</Button>
                </Grid>

                <Grid item xs={12}  >
                  {ListData!=[] ? ListData.map((data,i)=>{
                       return(
                        <> 
                        <div key={i} style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                          <div style={{color:'black',fontSize:20,fontWeight:600,background:'#E8BDB3',textAlign:'center',width:'50%',borderRadius:25,padding:10,marginLeft:10,marginBottom:10}}>
                            {data}
                          </div>
                          <div style={{marginLeft:10,marginTop:8}} >
                    <CancelIcon onClick={()=>removeTask(i)} cursor='pointer' />

                          </div>
                           

                        </div>
                     
                        
                        </>
                       )

                  }):<></>}
                     <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:12}}>
                      {ListData.length>=1?<Button variant="contained" style={{background:'red'}}  onClick={AllClear}>Remove All</Button>:<></>
                                                           }
                        </div>
                </Grid>

                 
             


               
            </Grid>
            </div>
            </div>

             </form>

    )
}