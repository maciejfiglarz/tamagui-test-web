type Size = 'small' | 'medium' | 'big'

const AvatarImage = ({ size = 'big' }: { size?: Size }) => {
  const divideBy = {
    big: 1,
    medium: 1.5,
    small: 2.7,
  }

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={42 / divideBy[size]}
        height={47 / divideBy[size]}
        viewBox="0 0 42 47"
        fill="none"
      >
        <circle cx="21" cy="13" r="13" fill="white" />
        <path
          d="M42 47H0V40.7005C0 38.7373 0.577233 36.7902 2.08953 35.5384C4.83814 33.2633 10.5628 30 20.7879 30C30.9027 30 36.7898 33.1933 39.6977 35.4645C41.3454 36.7514 42 38.8149 42 40.9055V47Z"
          fill="white"
        />
      </svg>
    </>
  )
}
export { AvatarImage }
