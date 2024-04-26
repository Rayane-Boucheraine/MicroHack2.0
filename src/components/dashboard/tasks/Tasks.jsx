import Column from "./Column"

const Tasks = () => {
  return (
    <div className="flex gap-4">
      <Column state="Ready" color="#D9D9D9" />
      <Column state="Ongoing" color="#FFBB38" />
      <Column state="Finished" color="#41D4A8" />
      <Column state="Problems" color="#FC1414" />
    </div>
  );
}

export default Tasks