"use client";
import { BACKEND_URL } from "@/data/data";
import Column from "./Column";
import { useQuery } from "react-query";

const Tasks = () => {
  const { isLoading, error, data } = useQuery("employers", async () => {
    const response = await fetch(`${BACKEND_URL}/users/get_all_taches/`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return await response.json();
  });
  console.log(data);
  if (isLoading) return <p>Loading data...</p>;
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
};

export default Tasks;
