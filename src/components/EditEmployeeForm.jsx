import React, { useState } from 'react';
import './EditEmployeeForm.css'

const EditEmployeeForm = ({ employee, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ ...employee });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="edit-form bg-slate-100 rounded-xl p-2 flex flex-col  ">
      <h2>Edit Employee</h2>
      <form className='flex flex-col ' onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>
              <label>Name</label>
            </td>
            <td>
              <label>Position</label>
            </td>
            <td>
              <label>Salary</label>
            </td>
            <td>
              <label>Phone Number </label>
            </td>
            <td>
              <label> Save  </label>
            </td>
            <td>
              <label> Cancel </label>
            </td>
          </tr>
          <tr>
            <td>
              <input
                className=''
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
              />
            </td>
            <td>
            <input
                  type="number"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                />
            </td>
            <td>
            <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
            </td>
            <td>
              <button className='px-2 py-2 bg-green-400 font-semibold text-white rounded-xl inline-block' type="submit">Save</button>
            </td>
            <td>
              <button className='px-2 py-2 bg-gray-400 font-semibold text-white rounded-xl inline-block' type="button" onClick={onCancel}>Cancel</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default EditEmployeeForm;
