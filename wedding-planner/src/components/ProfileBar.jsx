const ProfileBar = () => {
    const user = { name: "ABC" }; // You can replace this with login user info

    return (
        <div style={{ color: "white"}}>
            Welcome, <b>{user.name}</b>

        </div>
    );
};

export default ProfileBar;
