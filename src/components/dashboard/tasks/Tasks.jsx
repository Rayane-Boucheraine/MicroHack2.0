import Column from "./Column";

const Tasks = () => {
  const { isLoading, error, data } = useQuery("tasks", async () => {
    const response = await fetch(`${BACKEND_URL}/users/get_all_taches/`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return await response.json();
  });

  if (isLoading) return <p>Loading data...</p>;
  if (data)
    return (
      <div className="flex gap-4">
        {["ready", "en-cours-exucution", "finish", "probleme"].map(
          (state, i) => {
            // filter tasks by state
            let tasks = data.filter((task) => task.etat === state);
            return <Column state={state} data={tasks} key={i} />;
          }
        )}
      </div>
    );
};

export default Tasks;
