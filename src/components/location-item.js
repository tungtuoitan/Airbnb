import {v4 as uuidv4} from 'uuid'
export default function LocationItem({item}) {
  return (
    <li  className="text-left font-size14 ">
      <p className="color222  font-semibold leading-unknown">{item.location}</p>
      <p className="text-gray-600 font-light">{item.homeType}</p>
    </li>
  );
}
