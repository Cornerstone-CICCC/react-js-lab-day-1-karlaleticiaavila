import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import type { User } from '../types/user.types';

type UserFormProps = {
  formData: Omit<User, 'id'>;
  setFormData: Dispatch<SetStateAction<Omit<User, 'id'>>>;
  onSubmit: () => void;
  onClear: () => void;
  isEditing: boolean;
};

const UserForm = ({
  formData,
  setFormData,
  onSubmit,
  onClear,
  isEditing,
}: UserFormProps) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>{isEditing ? 'Edit User' : 'Add User'}</h2>

      <input
        type="text"
        name="fullname"
        value={formData.fullname}
        placeholder="Full name"
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        name="age"
        value={formData.age}
        placeholder="Age"
        onChange={handleChange}
      />

      <br />

      <select
        name="education"
        value={formData.education}
        onChange={handleChange}
      >
        <option value="">Choose education</option>
        <option value="Grade school">Grade school</option>
        <option value="High school">High school</option>
        <option value="College">College</option>
      </select>

      <br />

      <textarea
        name="bio"
        value={formData.bio}
        placeholder="Bio"
        onChange={handleChange}
      />

      <br />

      <button type="button" onClick={onSubmit}>
        {isEditing ? 'Save User' : 'Add User'}
      </button>

      <button type="button" onClick={onClear}>
        Clear
      </button>
    </div>
  );
};

export default UserForm;