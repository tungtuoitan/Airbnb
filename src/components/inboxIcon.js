
export default function InboxIcon() {
    const path = window.location.pathname
   

  return (
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
        fill: `${path==='/inbox' ? '#ff385c':'#B0B0B0'}`,
      }}
    >
      <path d="M26 2a5 5 0 0 1 5 4.78V21a5 5 0 0 1-4.78 5h-6.06L16 31.08 11.84 26H6a5 5 0 0 1-4.98-4.56L1 21.22V7a5 5 0 0 1 4.78-5H6zm0 2H6a3 3 0 0 0-3 2.82V21a3 3 0 0 0 2.82 3H12.8l3.2 3.92L19.2 24H26a3 3 0 0 0 3-2.82V7a3 3 0 0 0-2.82-3z"></path>
    </svg>
  );
}
