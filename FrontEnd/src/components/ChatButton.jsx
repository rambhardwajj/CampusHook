import { useNavigate } from "react-router-dom";

const ChatButton = ()=>{
    const navigate = useNavigate();
    function handleClick(){
        navigate('/forChat');
    }
    return <div>
        <button className="ocus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mb-20" onClick={handleClick}> chat </button>
    </div>
}

export default ChatButton

