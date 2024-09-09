import BasicCard from "../../../components/card/card"
import {translations} from "../../../api/api"

export default function Cards() {
    return (
      <div className="cards">
        {translations.map((wordData, index) =>
          <BasicCard key={index} wordData={wordData}/>
        )}
      </div>
    );
  }
  