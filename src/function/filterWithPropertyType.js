 

export const filterWithPropertyType = (filter, list) => {
   // property type
   let hlByPropertyType = [];
   if (filter.propertyType === "") {
     hlByPropertyType = [...list];
   } else {
     for (let i = 0; i < list.length; i++) {
       if (
         list[i].property_type === filter.propertyType.toLowerCase()
       ) {
         hlByPropertyType.push(list[i]);
       }
     }
   }
   return hlByPropertyType
    
}
 