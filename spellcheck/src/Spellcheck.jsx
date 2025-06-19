import { useState,useEffect } from "react";

function Spellcheck(){
    let [suggestedText,setSuggestedText] = useState('');
    const customDictionary ={
        teh:"the",
        wrok: "work",
        fot: "for",
        exampl:"example",
    };
    function handleInputChange(e){
        const text = e.target.value;
        const words = text.split(" ");
        const correctedWords = words.map((word)=>{
            const correctedWord = customDictionary[word.toLowerCase()];
            return correctedWord || word;
        });
        const firstCorrection = correctedWords.find((word,index) => word !== words[index]);
        setSuggestedText(firstCorrection);
    }
  
    
    return(
        <>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea  onChange={handleInputChange} rows={5} col={40} placeholder="Enter text..."></textarea>
        {
            suggestedText&&( <p>Did you mean: <strong>{suggestedText}</strong>?</p>)
        }
        </>
    );
}
export default Spellcheck;