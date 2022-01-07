function UserList (){
    const [users, setUsers] = userState();
    return (
        <>
        {users === undefind && <span>Loading...</span>}
        {users && <ul>
            {users.map(user) =>(
                <UserItem></ul>
            )}
        </>
    )
}
