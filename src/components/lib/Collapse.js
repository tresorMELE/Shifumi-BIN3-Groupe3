function Collapse(){
    const [opened, setOpened] = useState(false);

    function toggle(){
        alert("togle");
    }
        return(
            <div>
                <h3 onClick={toggle}>Title</h3>
                <p style={{ display: !opened ? "none" : "block" }}>Content</p>
            </div>
        )
    
}