import { FunctionComponent, ReactNode} from "react"

interface ButtonOption {
  variant: 'outlined' | 'normal'
} 

interface ButtonProps {
  option?: ButtonOption
  theme?: 'dark' | 'light'
  onClick: () => void;
  children: ReactNode
}

const Button: FunctionComponent<ButtonProps> = () => {
  return (
    <button></button>
  )
}

export default Button