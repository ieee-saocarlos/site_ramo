import { Button } from "react-bootstrap";
import { CardItem } from "./CardItem";
import { useState } from "react";



export function CardsList({ data, initNumberOfData }){
    
    const [numberOfData,setNumberOfData] = useState(initNumberOfData);
    
    const cardsList = data.map((data) => { 
        return(
            <li key={data.title} >
                <CardItem img={data.img} title={data.title} description={data.description} />
            </li>
        )
    });


    function moreData(){
        setNumberOfData(numberOfData+3);
    }


    return(
        <ul className="m-0 p-0" style={{listStyle: "none"}}>
            {cardsList.map((cards,index) => index < numberOfData ? (cards) : (null))}
            <li className="mt-3">
                { numberOfData < cardsList.length &&
                    <Button 
                        className="w-100" 
                        variant="primary" 
                        onClick={moreData}
                    >
                        Mais Noticias
                    </Button>
                }
            </li>
        </ul>    
    )
}