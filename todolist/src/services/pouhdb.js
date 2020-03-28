import PouchDB from 'pouchdb-browser';
const todoDB = new PouchDB('todo_db');

    const postTask = (task) =>{

        let taskToBeSaved = {
            _id: new Date().toISOString(),
            title: task.title,
            status: task.status,
        }
    
        todoDB.put(taskToBeSaved, (err, result)=>{
            
            if(err) throw err;
            
            console.log('Task saved!',result)
        })
    }

    const showTodos = async () =>{
        let data;

        await todoDB.allDocs({ include_docs: true, descending: true},(err,doc) =>{
            data = doc
        })
        return data;
    }


export { postTask, showTodos };