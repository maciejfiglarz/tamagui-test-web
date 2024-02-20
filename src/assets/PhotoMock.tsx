const PhotoMock = ({ fill = 'black' }: { fill?: string }) => {
  return (
    <>
      <svg width="56" height="69" viewBox="0 0 56 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="PhotoOutlined">
          <path
            id="Vector"
            d="M43.7 14.375V54.625H11.5V14.375H43.7ZM43.7 8.625H11.5C8.97 8.625 6.9 11.2125 6.9 14.375V54.625C6.9 57.7875 8.97 60.375 11.5 60.375H43.7C46.23 60.375 48.3 57.7875 48.3 54.625V14.375C48.3 11.2125 46.23 8.625 43.7 8.625ZM32.522 34.0975L25.622 45.2237L20.7 37.7775L13.8 48.875H41.4L32.522 34.0975Z"
            fill={fill}
            fill-opacity="0.54"
          />
        </g>
      </svg>
    </>
  )
}
export { PhotoMock }
