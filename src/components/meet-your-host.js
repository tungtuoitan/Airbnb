import React from "react";
import ShowMoreBtn from "./show-more-btn";

class MeetYourHost extends React.Component {
  render() {
    const { owner } = this.props;
    return (
      <div className="bg-unknown-gray">
        <div className="px-6 pt-7 ">
          <div className="max-w-380">

          <h2 className="font-size22 pb-c20 font-semibold color222 text-left">
            Meet your host
          </h2>

          <div className="w-full px-6 py-8 shadow-unknown rounded-unknown bg-white mb-10 max-w-380 ">
            <div className=" flex gap-c29  ">
              <div className="flex  flex-col items-center w-full max-w-210">
                <div className="relative">
                  <div className="w-8 h-8 absolute top-16 left-c75 flex justify-center items-center color-pink-main border-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-label="Verified host"
                      role="img"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "16px",
                        width: "16px",
                        fill: "white",
                      }}
                    >
                      <path d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm7 9.08-9.5 9.5-4.5-4.5L6.88 17l6.62 6.62L25.12 12 23 9.88z"></path>
                    </svg>
                  </div>
                  <div className="square-104 rounded-full overflow-hidden  ">
                    <img className="max" src={owner.avatar} />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-size22 color222 font-bold mt-2">
                    {owner.name}
                  </h3>
                  <p className="font-size14 color222 font-semibold mt--5">
                    {owner.account.level}
                  </p>
                </div>
              </div>

              <div className="w-full text-left max-w-96">
                <div className=" border-b-1 pb-c12 color222 border-solid border-gray-200">
                  <p className="weight-800  font-size22 leading-7 ">
                    {owner.account.reviews.length}
                  </p>
                  <p className="font-semibold font-size10 ">Reviews</p>
                </div>
                <div className=" border-b-1 pb-c12 pt-c7 color222 border-solid border-gray-200">
                  <div className="weight-800  font-size22 leading-7 flex ">
                    <span>{owner.account.reviews.length}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      className="star-letter mt-c7 ml-c2 "
                    >
                      <path
                        fill-rule="evenodd"
                        d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                      ></path>
                    </svg>
                  </div>
                  <p className="font-semibold font-size10">Rating</p>
                </div>
                <div className="  pt-c7 color222 ">
                  <p className="weight-800  font-size22 leading-7">
                    {owner.account.reviews.length}
                  </p>
                  <p className="font-semibold font-size10">Year hoisting</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-left border-b-1 border-gray-300 border-solid ">
            <div className="flex gap-c10 mb-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "24px",
                  width: "24px",
                  fill: "currentcolor",
                }}
              >
                <path d="M16 0c5.9 0 11 5.28 11 11 0 4.85-3.23 9.27-9.55 13.28l2.2 2.92a1.13 1.13 0 0 1-.9 1.8H17v3h-2v-3h-1.75a1.13 1.13 0 0 1-.9-1.8l2.14-2.86C8.2 20.92 5 16.46 5 11A11 11 0 0 1 16 0zm0 25.67L15 27h2zM16 2a9 9 0 0 0-9 9c0 4.6 2.72 8.43 8.3 11.5l.38.21.28.14.3-.19c5.62-3.53 8.48-7.24 8.72-11.12l.02-.27V11c0-4.64-4.21-9-9-9z"></path>
              </svg>
              <span>Born in the 70s</span>
            </div>
            <div className="flex gap-c10 mb-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "24px",
                  width: "24px",
                  fill: "currentcolor",
                }}
              >
                <path d="m28 2.12-.22.01-16 1.78A2 2 0 0 0 10 5.89v15.14A4.95 4.95 0 0 0 7 20a5 5 0 1 0 5 5V11.9l16-1.78v8.9A4.95 4.95 0 0 0 25 18a5 5 0 1 0 5 5V4.12a2 2 0 0 0-2-2zM7 28a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5-18.12V5.9l16-1.77V8.1L12 9.88zM25 26a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
              </svg>
              <span>Favorite song in high school: One U2</span>
            </div>
            <div className="flex gap-c10 items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "24px",
                  width: "24px",
                  fill: "currentcolor",
                }}
              >
                <path d="M16 .33a15.67 15.67 0 1 1 0 31.34A15.67 15.67 0 0 1 16 .33zm0 2a13.67 13.67 0 1 0 0 27.34 13.67 13.67 0 0 0 0-27.34zm1 3v10.1l8.74 5.04-1 1.73L15 16.58V5.33z"></path>
              </svg>
              <span>I spend too much time: My job, travel, motorsport</span>
            </div>
            <div className="flex gap-c10 items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "24px",
                  width: "24px",
                  fill: "currentcolor",
                }}
              >
                <path d="M0 18v-2h1.3A15.02 15.02 0 0 1 13.27 4.25a3 3 0 1 1 5.46 0c6 1.1 10.76 5.78 11.97 11.75H32v2zM16 6A13 13 0 0 0 3.35 16h25.3A13 13 0 0 0 16 6zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7.55 18.1a3.24 3.24 0 0 1 3.07 5.7l-.17.1-9.63 4.82a5 5 0 0 1-3.23.43l-.25-.05-7.84-2.01A2 2 0 0 1 4 27.31V22a2 2 0 0 1 1.85-2h11.26l.14.01L19 20c.92.01 1.44.7 1.57 1.59zm2.56 2.35a1.24 1.24 0 0 0-1.54-.6l-.12.04-4.37 2.19a3.89 3.89 0 0 1-3.34 1.91l-.24.01H12v-2h5a2 2 0 0 0 2-1.85V22l-3.7.02h-1.58L12.6 22l-.6-.01H6v5.15l7.83 2.01a3 3 0 0 0 1.9-.13l.2-.1 9.62-4.82c.61-.3.86-1.05.56-1.66z"></path>
              </svg>

              <span>
                For guests, i always: Advise the friendly addresses of Nantes
              </span>
            </div>
            <div className="flex gap-c10 items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "24px",
                  width: "24px",
                  fill: "currentcolor",
                }}
              >
                <path d="M13.7 13.93a4 4 0 0 1 5.28.6l.29.37 4.77 6.75a4 4 0 0 1 .6 3.34 4 4 0 0 1-4.5 2.91l-.4-.08-3.48-.93a1 1 0 0 0-.52 0l-3.47.93a4 4 0 0 1-2.94-.35l-.4-.25a4 4 0 0 1-1.2-5.2l.23-.37 4.77-6.75a4 4 0 0 1 .96-.97zm3.75 1.9a2 2 0 0 0-2.98.08l-.1.14-4.84 6.86a2 2 0 0 0 2.05 3.02l.17-.04 4-1.07a1 1 0 0 1 .5 0l3.97 1.06.15.04a2 2 0 0 0 2.13-2.97l-4.95-7.01zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
              </svg>

              <span>Pets: I love cats, we have two</span>
            </div>
            <ShowMoreBtn/>

            <button className="bg222 mt-7 mb-8 px-6 py-c12 rounded-md weight-800  text-white ">
              Message Host
            </button>
          </div>
          <div className="text-xs text-gray7 text-left text-light py-6 ">
            To protect your payment, never transfer money or communicate outside
            of the Airbnb website or app.
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetYourHost;
