import { Fragment, useContext } from "react"
import { MyContext } from "./mycontext";

const TaskItemes = () => {
  const {todoItem,settodoItem}=useContext(MyContext);
  
  return (
    <Fragment>
      <ul className="list-group m-0 p-0 mt-2">
    {
        todoItem.map(item =>{
          return(   <li className={`list-group-item d-flex justify-content-between ${item.active ?"list-group-item-success":""}`}>
          {item.task}
           <span>
             <i className="me-3 pointer fa fa-check text-success transition_200 text_hover_shadow"></i>
             <i className="me-3 pointer fa fa-times text-warning transition_200 text_hover_shadow"></i>
             <i className="me-3 pointer fa fa-trash text-danger transition_200 text_hover_shadow"></i>
           </span>
         </li>)
       
        })
    }
      </ul>
    </Fragment>
  )
}
export default TaskItemes;