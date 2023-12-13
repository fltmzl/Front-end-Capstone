export default function OrderReturnedIcon({ color = '#A1A1AA', className }) {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.5 28.875L22.75 30.625C22.75 30.625 35.875 28 37.625 28C39.375 28 39.375 29.75 37.625 31.5C35.875 33.25 29.75 38.5 24.5 38.5C19.25 38.5 15.75 35.875 12.25 35.875H3.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 25.375C5.25 23.625 8.75 21 12.25 21C15.75 21 24.0625 24.5 25.375 26.25C26.6875 28 22.75 30.625 22.75 30.625M14 15.75V8.75C14 8.28587 14.1844 7.84075 14.5126 7.51256C14.8408 7.18437 15.2859 7 15.75 7H36.75C37.2141 7 37.6592 7.18437 37.9874 7.51256C38.3156 7.84075 38.5 8.28587 38.5 8.75V22.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.875 7H30.625V14.875H21.875V7Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
