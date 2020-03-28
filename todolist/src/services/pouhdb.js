import PouchDB, { redrawTodosUI } from 'pouchdb-browser';
const todoDB = new PouchDB('todo_db');

const remoteCouch = false;

    const postTask = (task) =>{

        let taskToBeSaved = {
            _id: new Date().toISOString(),
            title: task.title,
            status: task.status,
            time: task.time
        }
    
        todoDB.put(taskToBeSaved, (err, result)=>{
            
            if(err) throw err;
            
            console.log('Task saved!',result)
        })
    }

    const showTodos = () =>{
        todoDB.allDocs({ include_docs: true, descending: true},(err,doc) =>{
            console.log('doc',doc)
            //redrawTodosUI(doc.rows);
        })
    }

export { postTask, showTodos};