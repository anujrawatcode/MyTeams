const Logout = () => {
    function logout() {
         localStorage.clear();
         window.location.reload(false);
    }
    return (
        <div className="logout">
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Logout;