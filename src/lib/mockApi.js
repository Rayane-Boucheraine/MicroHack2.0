// Simple client-side mock API with localStorage persistence

const TASKS_KEY = "buildflow_mock_tasks";
const EMPLOYERS_KEY = "buildflow_mock_employers";

function seedTasks() {
  return [
    {
      id: 1,
      description: "Install drywall panels in rooms on level 3",
      speciality: "Plumber",
      importance: "Urgent",
      etat: "ready",
      employes: [],
    },
    {
      id: 2,
      description: "Paint the walls on C2",
      speciality: "Mason",
      importance: "Moderate",
      etat: "en-cours-exucution",
      employes: [2],
    },
    {
      id: 3,
      description: "Analyze project requirements and create a budget",
      speciality: "General",
      importance: "Not Urgent",
      etat: "finish",
      employes: [1],
    },
    {
      id: 4,
      description: "Fix leak in building A, floor 1",
      speciality: "Plumber",
      importance: "Urgent",
      etat: "probleme",
      employes: [],
    },
    {
      id: 5,
      description: "Lay tiles in lobby",
      speciality: "Mason",
      importance: "Moderate",
      etat: "ready",
      employes: [],
    },
    {
      id: 6,
      description: "Repair door frames",
      speciality: "Carpenter",
      importance: "Urgent",
      etat: "ready",
      employes: [3],
    },
  ];
}

function seedEmployers() {
  return {
    employes: [
      {
        id: 1,
        first_name: "Samy",
        last_name: "Rahim",
        speciality: "Plumber",
        status: "Free",
        rank: 4.5,
        img: "/Header/human.svg",
      },
      {
        id: 2,
        first_name: "Amir",
        last_name: "Nadir",
        speciality: "Mason",
        status: "Working",
        rank: 4.2,
        img: "/Header/human1.svg",
      },
      {
        id: 3,
        first_name: "Karim",
        last_name: "Ali",
        speciality: "Carpenter",
        status: "Soon to be free",
        rank: 4.7,
        img: "/Header/human2.svg",
      },
      {
        id: 4,
        first_name: "Nina",
        last_name: "Said",
        speciality: "General",
        status: "Free",
        rank: 4.1,
        img: "/Header/human.svg",
      },
    ],
  };
}

function read(key, seedFn) {
  if (typeof window === "undefined") return seedFn();
  const raw = localStorage.getItem(key);
  if (!raw) {
    const init = seedFn();
    localStorage.setItem(key, JSON.stringify(init));
    return init;
  }
  try {
    return JSON.parse(raw);
  } catch {
    const init = seedFn();
    localStorage.setItem(key, JSON.stringify(init));
    return init;
  }
}

function write(key, value) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

export async function getTasks() {
  return read(TASKS_KEY, seedTasks);
}

export async function addTask({ description, importance, speciality, employe_id }) {
  const tasks = read(TASKS_KEY, seedTasks);
  const nextId = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
  const newTask = {
    id: nextId,
    description,
    importance,
    speciality,
    etat: "ready",
    employes: employe_id ? [employe_id] : [],
  };
  const updated = [newTask, ...tasks];
  write(TASKS_KEY, updated);
  return newTask;
}

export async function getEmployers() {
  return read(EMPLOYERS_KEY, seedEmployers);
}

export async function addEmployer(employe) {
  const employers = read(EMPLOYERS_KEY, seedEmployers);
  const nextId = employers.employes.length
    ? Math.max(...employers.employes.map((e) => e.id)) + 1
    : 1;
  const newEmp = { id: nextId, ...employe };
  const updated = { employes: [newEmp, ...employers.employes] };
  write(EMPLOYERS_KEY, updated);
  return newEmp;
}

