import './style.css'

declare interface ButtonInterface {
  children: React.ReactNode
  onClick: () => void
  type: 'primary' | 'secondary'
}

const Button = ({ children, onClick, type }: ButtonInterface) => {
  return (
    <div className={`button button-${type}`} onClick={onClick}>
      { children }
    </div>
  )
}

export default Button
