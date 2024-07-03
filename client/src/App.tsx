import { useEffect, useRef, useState } from "react";

function App() {
  const fetchComplete = useRef(false);
  const [data, setData] = useState("fetching greeting...");

  useEffect(() => {
    if (!fetchComplete.current) {
      fetch("http://localhost:3000/")
        .then((res) => res.json())
        .then((data) => setData(data.data))
        .then(() => (fetchComplete.current = true))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-700 grid place-items-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl text-white">{data}</h1>
      </div>
    </div>
  );
}

export default App;
