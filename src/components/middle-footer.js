import titleAndLink from "../datas/in-footer";


function MiddleFooter (){

    return(
        <div className="MIDDLE grid grid-cols-1 9:grid-cols-3 gap-x-c10">
            <section className="text-left border-b-1 border-gray-200 py-6">
              <h3 className="font-size14 font-semibold color222 mb-c13">
                Support
              </h3>
              <ul className="grid gap-y-c12">
                {titleAndLink.support.map((item, index) => {
                  return (
                    <li className="font-size14 color222 text-left " key={index}>
                      <a href={item[1]}>{item[0]} </a>
                    </li>
                  );
                })}
              </ul>
            </section>
            <section className="text-left border-b-1 border-gray-200 py-6">
              <h3 className="font-size14 font-semibold color222 mb-c13">
                Hosting
              </h3>
              <ul className="grid gap-y-c12">
                {titleAndLink.hosting.map((item, index) => {
                  return (
                    <li className="font-size14 color222 text-left ">
                      <a href={item[1]}>{item[0]} </a>
                    </li>
                  );
                })}
              </ul>
            </section>
            <section className="text-left border-b-1 border-gray-200 py-6">
              <h3 className="font-size14 font-semibold color222 mb-c13">
                Airbnb
              </h3>
              <ul className="grid gap-y-c12">
                {titleAndLink.airbnb.map((item, index) => {
                  return (
                    <li className="font-size14 color222 text-left ">
                      <a href={item[1]}>{item[0]} </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
    )
}

export default MiddleFooter