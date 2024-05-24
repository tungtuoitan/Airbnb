


export default function EssentialsUI(){
    return(
        <div>
      <Title2 title="Essentials" />
      <div className="grid grid-cols-1 7:grid-cols-2">
        {amenities.essentials.map((item, index) => {
          if (isDisplayFull === true && index >= 4) {
            return;
          }
          return (
            <CheckItem
              content={item}
              isChecked={amenitiesState.essentials[index]}
            />
          );
        })}
      </div>
      <ShowMore2 isDisplayFull={isDisplayFull} handleShowMore={handleShowMore} />
    </div>
    )
}