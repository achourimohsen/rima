import { useEffect, useState } from "react";
// import BarChart from "./form/BarChart";
import LineChart from "./form/LineChar";
// import UserService from './../../../Services/userService';
import { UserData } from "./Data";
function App() {
  // const [ users, setUsers] = useState([])
  // const US = new UserService()
  // useEffect(() => {
  //   getAllFB()
  // }, [])
  // const getAllFB = () => {
  //   US.getAll().then((res) => {
  //     setUsers(res.data.data)
  //   })
  // }
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.name),
    datasets: [
      {
        label: "Users news",
        data: UserData.map((data) => data.old),
        backgroundColor: ['grey' , "orange"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="App">
      {/* <div style={{ width: "700px" }}>
        <BarChart chartData={userData} />
      </div> */}
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
    </div>
  );
}
export default App;