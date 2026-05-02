import type { User } from '../types/user.types';

type UserProfileProps = {
  user: User | null;
};

const UserProfile = ({ user }: UserProfileProps) => {
  if (!user) {
    return <p>No user selected.</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>

      <p>ID: {user.id}</p>
      <p>Full name: {user.fullname}</p>
      <p>Age: {user.age}</p>
      <p>Education: {user.education}</p>
      <p>Gender: {user.gender}</p>
      <p>Skills: {user.skills.join(', ')}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
};

export default UserProfile;