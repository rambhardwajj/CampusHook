import { useNavigate, Link } from "react-router-dom";

const ChatButton = ()=>{
    const navigate = useNavigate();
    function handleClick(){
        navigate('/');
    }
    return <div>
        <button onClick={handleClick}> chat </button>
    </div>
}

export default ChatButton