
export default function ShowMoreBtn ({onClickShowMore}){

    return(
        <li className="text-left font-size14 " key={'unknown'}>
                    <button
                      className="color222  font-semibold leading-unknown flex gap-c4 "
                      onClick={() => {
                        onClickShowMore();
                      }}
                    >
                      <span>Show more</span>
                      <span className="mt-c2 ">
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    </button>
                  </li>

    )
}