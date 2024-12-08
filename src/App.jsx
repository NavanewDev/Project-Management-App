import {useState} from 'react';

import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectState, setProjectState] = useState({
    selectProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(task) {
    setProjectState((previousProjectState) => {
      const taskId = Math.random()
      const newTask = {
        task:task,
        projectId: previousProjectState.selectProjectId,
        id: taskId
      }

      return {
        ...previousProjectState,
        tasks: [newTask, ...previousProjectState.tasks]
      }
  })}

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    })
  }

  function handleDelete() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectProjectId)
      }
    })
  }

  function handleSelectProject(id) {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectProjectId: id,
      }
    });
  }

  function handleStartAddProjects() {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectProjectId: null,
      }
    });
  }

  function handleClose() {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectProjectId: undefined,
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectState((previousProjectState) => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }

      return {
        ...previousProjectState,
        selectProjectId: undefined,
        projects: [...previousProjectState.projects, newProject]
      }
    })
  }

  const selectedProject = projectState.projects.find((project) => project.id === projectState.selectProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDelete} addTask={handleAddTask} listTasks={projectState.tasks} delTask={handleDeleteTask}/>;

  if(projectState.selectProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleStartAddProjects}/>
  } else if(projectState.selectProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onClose={handleClose}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleStartAddProjects} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectProjectId}/>
      {content}
    </main>
  );
}

export default App;
