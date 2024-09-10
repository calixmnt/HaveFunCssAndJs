const Button = ({children, buttonType = 'primary', onClick}) => {
  return (
    <button onClick={onClick} className={`${buttonType === 'secondary' && 'btn--secondary' } btn`}>{children}</button>
  )
}

export default Button;