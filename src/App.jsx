import React, { useState } from 'react';
import employeeData from './components/employeeData';
import EmployeeList from './components/EmployeeList';
import './App.css'; // Import CSS if needed for styling

const App = () => {
  const [employees, setEmployees] = useState(employeeData);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    position: '',
    salary: '',
    phoneNumber: ''
  });

  const handleDelete = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const handleEdit = (updatedEmployee) => {
    setEmployees(employees.map(employee =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    ));
  };

  const handleCreate = () => {
    setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
    setShowCreateForm(false);
    setNewEmployee({ name: '', position: '', salary: '', phoneNumber: '' });
  };

  const handleCreateChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  return (
    <div className="App">
      <EmployeeList
        employees={employees}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onCreate={() => setShowCreateForm(true)}
        onCreateChange={handleCreateChange}
        onCreateSubmit={handleCreate}
        showCreateForm={showCreateForm}
        newEmployee={newEmployee}
      />
    </div>
  );
};

export default App;
