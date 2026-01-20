import { useState } from "react";

const useHomeController = () => {
    const [text, setText] = useState("Hello")
    return {
        text,
        setText
        
    }
};

export default useHomeController;
