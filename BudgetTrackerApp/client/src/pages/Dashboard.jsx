import Sidebar from "../components/Sidebar";
import AddModal from "../components/AddModal";
import AddExpenseModal from "../components/AddExpenseModal";
import { useState } from "react";
function Dashboard() {
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <>
      <Sidebar />
      <AddModal
        onClick={() => {
          setShowAddModal(true);
        }}
      />
      {showAddModal && (
        <AddExpenseModal onClose={() => setShowAddModal(false)} />
      )}
    </>
  );
}

export default Dashboard;
