import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2 className="text-2xl"><span>Hi, Welcome</span></h2>
            {
                user?.displayName ? user.displayName : 'Back'
            }
        </div>
    );
};

export default AdminHome;