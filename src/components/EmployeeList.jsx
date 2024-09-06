import React, { useState } from 'react';
import './EmployeeList.css';
import EditEmployeeForm from './EditEmployeeForm';

const EmployeeList = ({
  employees,
  onDelete,
  onEdit,
  onCreate,
  onCreateChange,
  onCreateSubmit,
  showCreateForm,
  newEmployee
}) => {
  const [editingEmployee, setEditingEmployee] = React.useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleEditClick = (employee) => {
    setEditingEmployee(employee);
  };

  const handleSave = (updatedEmployee) => {
    onEdit(updatedEmployee);
    setEditingEmployee(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    Object.values(employee).some(value =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className='my-40 flex items-center justify-center flex-col'>
      <div className='flex items-center justify-between'>
        <input
          className='bg-slate-200 outline-none rounded-lg px-2 py-2 '
          placeholder='Search Text here...'
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button
          className='px-2 py-2 bg-orange-500 rounded-lg text-white font-semibold'
          onClick={onCreate}
        >
          Create
        </button>
      </div>
      {showCreateForm && (
        <div className='create-form bg-slate-100 rounded-xl p-2 flex flex-col'>
          <h2>Create Employee</h2>
          <form className='flex flex-col' onSubmit={(e) => { e.preventDefault(); onCreateSubmit(); }}>
            <table>
              <tbody>
                <tr>
                  <td><label>Name</label></td>
                  <td><label>Position</label></td>
                  <td><label>Salary</label></td>
                  <td><label>Phone Number</label></td>
                  <td><label>Save</label></td>
                  <td><label>Cancel</label></td>
                </tr>
                <tr>
                  <td><input type="text" name="name" value={newEmployee.name} onChange={onCreateChange} /></td>
                  <td><input type="text" name="position" value={newEmployee.position} onChange={onCreateChange} /></td>
                  <td><input type="number" name="salary" value={newEmployee.salary} onChange={onCreateChange} /></td>
                  <td><input type="text" name="phoneNumber" value={newEmployee.phoneNumber} onChange={onCreateChange} /></td>
                  <td><button className='px-2 py-2 bg-green-400 font-semibold text-white rounded-xl inline-block' type="submit">Save</button></td>
                  <td><button className='px-2 py-2 bg-gray-400 font-semibold text-white rounded-xl inline-block' type="button" onClick={() => setShowCreateForm(false)}>Cancel</button></td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      )}
      <table className=''>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Phone Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {filteredEmployees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>${employee.salary.toLocaleString()}</td>
              <td>{employee.phoneNumber}</td>
              <td>
                <button
                  className='px-4 py-2 bg-lime-600 rounded-lg text-white font-semibold'
                  onClick={() => handleEditClick(employee)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className='px-4 py-2 bg-red-500 rounded-lg text-white font-semibold'
                  onClick={() => onDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingEmployee && (
        <EditEmployeeForm
          employee={editingEmployee}
          onSave={handleSave}
          onCancel={() => setEditingEmployee(null)}
        />
      )}
    </div>
  );
};

export default EmployeeList;
