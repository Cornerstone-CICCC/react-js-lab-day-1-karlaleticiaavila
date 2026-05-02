import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import type { User } from './types/user.types';

const initialFormData: Omit<User, 'id'> = {
  fullname: '',
  age: 0,
  education: '',
  gender: '',
  skills: [],
  bio: '',
};

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<Omit<User, 'id'>>(initialFormData);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);

  const handleClear = () => {
    setFormData(initialFormData);
    setEditingUserId(null);
  };

  const handleAddOrSaveUser = () => {
    if (editingUserId !== null) {
      setUsers((currentUsers) =>
        currentUsers.map((user) =>
          user.id === editingUserId ? { ...formData, id: editingUserId } : user
        )
      );

      setSelectedUser({ ...formData, id: editingUserId });
      handleClear();
      return;
    }

    const newUser: User = {
      ...formData,
      id: Date.now(),
    };

    setUsers((currentUsers) => [...currentUsers, newUser]);
    handleClear();
  };

  const handleViewUser = (user: User) => {
    setSelectedUser(user);
  };

  const handleEditUser = (user: User) => {
    setFormData({
      fullname: user.fullname,
      age: user.age,
      education: user.education,
      gender: user.gender,
      skills: user.skills,
      bio: user.bio,
    });

    setEditingUserId(user.id);
  };

  const handleDeleteUser = (id: number) => {
    setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id));

    if (selectedUser?.id === id) {
      setSelectedUser(null);
    }

    if (editingUserId === id) {
      handleClear();
    }
  };

  return (
    <>
      <h1>React Lab - User CRUD</h1>

      <UserForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleAddOrSaveUser}
        onClear={handleClear}
        isEditing={editingUserId !== null}
      />

      <UserList
        users={users}
        onView={handleViewUser}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />

      <UserProfile user={selectedUser} />
    </>
  );
};

export default App;