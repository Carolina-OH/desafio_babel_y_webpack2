import resultOne from "./one"
resultOne();
import resultTwo from "./two"
resultTwo();

export default function resultThree() {
    return {
        status: "Ok",
        resultOne: resultOne(),
        resultTwo: resultTwo(),
    }
  }
