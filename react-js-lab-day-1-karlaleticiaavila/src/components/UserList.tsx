import type { User } from '../types/user.types';

type UserListProps = {
  users: User[];
  onView: (user: User) => void;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
};

const UserList = ({
  users,
  onView,
  onEdit,
  onDelete,
}: UserListProps) => {
  return (
    <div>
      <h2>User List</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullname}</td>

              <td>
                <button onClick={() => onView(user)}>
                  View
                </button>

                <button onClick={() => onEdit(user)}>
                  Edit
                </button>

                <button onClick={() => onDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;