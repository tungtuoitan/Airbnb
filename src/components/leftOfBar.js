import Price2 from "./price2";
import Price from "./pricePart";
import TextRatingAndReview from "./textRatingAndReview";


export default function LeftOfBar(){
    return(
        <div className="9:flex justify-between items-center">
        <Price2 />
        <TextRatingAndReview />
      </div>
    )
}