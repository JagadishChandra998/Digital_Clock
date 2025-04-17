
import react,{useState,useEffect} from "react";

function Clock() {

    const [time,settime] =useState(new Date());

    useEffect(() =>{
            const intervalId =setInterval( () =>{
                settime(new Date());
            },1000);

            return() =>{
                clearInterval(intervalId);
            }
    },[]);

    function formattime(){
        let hours =time.getHours();
        const minutes =time.getMinutes();
        const seconds =time.getSeconds();
        const merdiem =hours >=12 ? "PM" : "AM";

        hours=hours % 12 || 12;

        return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)} ${merdiem}`;
    }

    function padzero(number){
        return(number < 10 ? "0": "") + number;
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formattime()}</span>
            </div>
        </div>
    );
}
export default Clock;