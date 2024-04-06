import { useState } from "react";
import data from "../constants/data";

function App() {
  const [filterData, setFilterData] = useState([...data]);

  const handleSortByDate = () => {
    const data = filterData.sort((a, b) => new Date(a.date) - new Date(b.date));
    setFilterData([...data]);
  };

  const handleSortByViews = () => {
    const data = filterData.sort((a, b) => a.views - b.views);
    setFilterData([...data]);
  };
  return (
    <>
      <h1>Date and Views Table</h1>
      <button onClick={handleSortByDate}>Sort by Date</button>
      <button onClick={handleSortByViews}>Sort by Views</button>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((data, idx) => (
            <tr key={idx}>
              <td>{data.date}</td>
              <td>{data.views}</td>
              <td>{data.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
