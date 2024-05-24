import {truncateText} from '../function/makeTextShorter'

export default function WishItemInfo ({currentHome}) {
    const shortName = truncateText(currentHome.name,20)
  return (
    <div className='pl-2 '>
      <p className="text-base font-semibold text-black222 text-left ">
        {shortName}
      </p>
      <p className="text-sm font-medium text-gray7 text-left">
        $ {currentHome.priceOneNight} per night
      </p>
    </div>
  );
}
