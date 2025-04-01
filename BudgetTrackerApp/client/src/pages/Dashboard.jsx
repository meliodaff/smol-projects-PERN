import Sidebar from "../components/Sidebar";
import AddButton from "../components/AddButton";
import AddModal from "../components/AddModal";
import { useState } from "react";
function Dashboard() {
  const [showAddButton, setShowAddButton] = useState(false);
  return (
    <>
      <Sidebar />
      {/* this should be AddButton */}
      <AddButton
        onClick={() => {
          setShowAddButton(true);
        }}
      />
      {showAddButton && <AddModal onClose={() => setShowAddButton(false)} />}
    </>
  );
}

export default Dashboard;
