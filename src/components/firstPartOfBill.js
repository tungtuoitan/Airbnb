import Price from "./pricePart";
import TextRatingAndReview from "./textRatingAndReview";


export default function FirstPartOfBill(){
    return(
        <div className="9:flex justify-between items-center mb-4">
        <Price />
        <TextRatingAndReview />
      </div>
    )
}