import WhoComingItem from "./whocoming-item";

export default function () {
  return (
    <div className="WHO_COMING  relative overflow-hidden w-full bg-white p-6 pb-c10 rounded-3xl box-shadow-whereto">
      <div className="font-size22 color222 font-bold text-left mb-0">
        Who's coming?
      </div>
      <div>
        <WhoComingItem personType={'Adults'} age={'Ages 13 or above'} haveBottomLine={true}/>
        <WhoComingItem personType={'Children'} age={'Ages 2-12'} haveBottomLine={true}/>
        <WhoComingItem personType={'Infants'} age={'Under 2'} haveBottomLine={true}/>
        <WhoComingItem personType={'Pets'} age={''}/>

      </div>
    </div>
  );
}
