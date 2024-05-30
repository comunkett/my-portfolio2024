import { useEffect, useState } from "react";
import data from '../../../data.json';

const useSlider = () => {

    const words = data[5].spain.campo
    const [time, setTime] = useState(0)

    useEffect(() => {
        const handle = () => {
       
          setTimeout(() => {
            console.log(`se reitera correctamente ${time}`);
            setTime((time) => time === words.length - 1 ? 0 : time + 1);
          }, 3000);
     
    }
        handle();
      
        return () => clearTimeout(handle);
        
      }, [time, words.length]);

    return useSlider;
};

export default useSlider 