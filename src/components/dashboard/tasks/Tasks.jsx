"use client";
import Column from "./Column";
import { useQuery } from "react-query";
import { getTasks } from "@/lib/mockApi";
const Tasks = () => {
  const { isLoading, error, data } = useQuery("tasks", getTasks);

  if (isLoading) return <p className="text-white/70">Loading tasks…</p>;
  if (error)
    return (
      <p className="text-red-400">Failed to load tasks: {`${error}`}</p>
    );

  const states = [
    { key: "ready", color: "#D9D9D9" },
    { key: "en-cours-exucution", color: "#FFBB38" },
    { key: "finish", color: "#41D4A8" },
    { key: "probleme", color: "#FC1414" },
  ];

  const list = Array.isArray(data) ? data : [];

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {states.map(({ key, color }, i) => {
        const colTasks = list.filter((task) => task.etat === key);
        return <Column state={key} color={color} data={colTasks} key={i} />;
      })}
    </div>
  );
};

export default Tasks;
