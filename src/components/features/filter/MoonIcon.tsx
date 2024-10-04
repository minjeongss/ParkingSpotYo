const MoonIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4726 0C4.68574 0 0 4.02991 0 9C0 13.9701 4.68574 18 10.4726 18C13.3122 18 15.8847 17.0277 17.773 15.4527C18.0073 15.2558 18.0682 14.9504 17.9183 14.7013C17.7683 14.4522 17.445 14.3116 17.1217 14.3598C16.6625 14.4281 16.1939 14.4643 15.7113 14.4643C11.1708 14.4643 7.48781 11.2982 7.48781 7.39286C7.48781 4.74911 9.17467 2.44688 11.6722 1.23348C11.958 1.09286 12.1033 0.811607 12.033 0.538393C11.9627 0.265179 11.6909 0.0602679 11.3629 0.0361608C11.0677 0.0160715 10.7725 0.0040178 10.4726 0.0040178V0Z"
        fill={color}
      />
    </svg>
  )
}

export default MoonIcon
