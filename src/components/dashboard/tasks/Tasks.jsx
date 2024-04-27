import Column from "./Column"

const Tasks = () => {
  return (
    <div className="flex gap-4">
      {["ready", "en-cours-exucution", "finish", "probleme"].map((state, i) => {
        // filter tasks by state
        let tasks = data?.filter((task) => task.etat === state);
        console.log(tasks);
        return <Column state={state} data={tasks} key={i} />;
      })}
    </div>
  );
}

export default Tasks