
import { makeStyles } from "@mui/styles";


 
const ToDoListCss=makeStyles({


    main:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
         width:'100wh',
        height:'100vh',
        backgroundImage: 'url(todo1.jpg)',
        backgroundSize: "cover"
    },
    root:{
        width:"auto",
        height:'auto',
        background:'#fff',
        borderRadius:20,
        boxShadow:'rgba(0, 0, 0, 0.35) 1px 5px 15px;'
     }


})

export default ToDoListCss