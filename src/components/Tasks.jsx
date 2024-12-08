import NewTask from "./NewTask"

export default function Tasks({addTask, listTasks, delTask}) {
    return (
        <section>
            <h2 className="text-2xl text-stone-700 font-bold mb-4">Tasks</h2>
            <NewTask addTask={addTask}/>
            {listTasks.length === 0 && <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>}
            {listTasks.length > 0 &&
                <ul className="bg-stone-200 py-1 px-4 my-4 rounded-md">
                {listTasks.map((task) => <li key={task.id} className="flex justify-between my-4">
                    <span>{task.task}</span>
                    <button onClick={() => delTask(task.id)} className="text-stone-700 hover:text-red-500">Clear</button>
                </li>)}
                </ul>
            }
        </section>
    )
}