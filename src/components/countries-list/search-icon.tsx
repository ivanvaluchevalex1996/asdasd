export const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <mask
      id="search-mask"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <g clipPath="url(#search-clip)">
        <path
          d="M12.0021 12.0024C14.0942 9.9103 14.0942 6.51834 12.0021 4.42625C9.91005 2.33415 6.5181 2.33415 4.426 4.42625C2.33391 6.51834 2.33391 9.9103 4.426 12.0024C6.5181 14.0945 9.91005 14.0945 12.0021 12.0024ZM12.0021 12.0024L15.7141 15.7143"
          stroke="black"
          strokeOpacity="0.88"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </mask>
    <g mask="url(#search-mask)">
      <rect width="20" height="20" fill="black" fillOpacity="0.46" />
    </g>
    <defs>
      <clipPath id="search-clip">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
