import PouchDB from 'pouchdb-browser';

const todoDB = new PouchDB('todo_db', [
  {
    auto_compaction: false,
  },
]);

const showTodos = async () => {
  let data;

  await todoDB.allDocs({ include_docs: true, descending: true }, (err, doc) => {
    data = doc;
  });
  return data;
};

const postTask = (task) => {
  const taskToBeSaved = {
    _id: new Date().toISOString(),
    title: task.title,
    status: task.status,
  };

  todoDB.post(taskToBeSaved, (err, result) => {
    if (err) throw err;
    console.log('Task saved!', result);
  });
};

const updateTask = (task) => {
  todoDB.put(task, (err, result) => {
    if (err) throw err;

    console.log('Task updated', result);
  });
};

export { postTask, showTodos, updateTask };
