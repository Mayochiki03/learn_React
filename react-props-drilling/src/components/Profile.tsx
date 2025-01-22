import User from "types/User";

interface ProfileProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

function Profile({ user, setUser }: ProfileProps) {
  if (!user) {
    return <div>กรุณาเข้าสู่ระบบ</div>;
  }
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <h1>ข้อมูลผู้ใช้</h1>
      <p>ชื่อ: {user.name}</p>
      <p>อีเมล: {user.email}</p>
      <button onClick={handleLogout}>ออกจากระบบ</button>
    </div>
  );
}
export default Profile;
