import "./Definitions.css";

export const Definitions = ({word, category, meanings}) => {
    return <div className="meanings">
        {
            meanings[0] && word && category === "en" && (
                <audio 
                    src={ (meanings[0].phonetics[0] ) && meanings[0].phonetics[0].audio } 
                    style={{backgroundColor: "#fff", borderRadius: 10}}
                    controls
                >
                    Your browser does not support audio element
                </audio>
            )
        }
        {word === "" ? (
            <span className="subtitle">Type a word in the field above</span>
            ) : (
            meanings.map(def => def.meanings.map(item => (
                item.definitions.map(def => (
                    <div 
                        className="singleMean" 
                        style={{ backgroundColor: "white", color: "black" }}
                    >
                        <b>{def.definition}</b>
                        <hr style={{ backgroundColor: "black", width: "100%"}} />
                        {def.example && (
                            <span>
                                <b>Example : </b>{def.example}
                            </span>
                        )}
                        {def.synonyms && (
                            <span>
                                <b>Synonyms : </b>
                                    {def.synonyms.map(s => `${s}, `)}
                            </span>
                        )}
                    </div>
                ))
            )))
        )}
    </div>;
};
