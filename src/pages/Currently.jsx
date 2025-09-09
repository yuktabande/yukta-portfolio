import { useEffect, useState } from "react";
import Card from "../components/Card";
import Graph from "../components/Graph";
function Currently() {
  const [data, setData] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    fetch("/github-data.json")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Failed to load GitHub data:", err));
  }, []);

  useEffect(() => {
    setReloadKey((prev) => prev + 1);
  }, []);

  if (!data) return <p>Loading GitHub stats...</p>;

  return (
    <div className="h-screen flex flex-col">
      {/* Top Half - Cards */}
      <div className="h-1/2 flex flex-col md:flex-row justify-center items-center gap-8 pr-0 md:pr-12">
        <Card
          title="BRAIN TUMOR DETECTION"
          value={70}
          chartType="bar"
          maxValue={100}
          progressLabel="Goal"
          progressColor="#602BF8"
        />
        <Card
          title="AGENTIC AI"
          value={97}
          chartType="bar"
          maxValue={100}
          progressLabel="Goal"
          progressColor="#602BF8"
        />
        <Card
          title="PROMPT TOOL"
          value={2}
          chartType="bar"
          maxValue={100}
          progressLabel="Goal"
          progressColor="#602BF8"
        />
      </div>

      {/* Bottom Half - Graph */}
      <div className="h-1/2 w-full overflow-hidden">
        <Graph key={reloadKey} />
      </div>
    </div>
  );
}

export default Currently;
