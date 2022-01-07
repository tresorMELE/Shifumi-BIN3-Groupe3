




function TodoList({ data}){
    function handleAddItem(){
    const id = Date.now();
        setData([
            ...data,
            {
            id = id,
            title: "doto "+ id,
            completed: false,
            },
        ]);
}
}