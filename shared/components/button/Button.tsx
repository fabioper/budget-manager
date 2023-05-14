import styles from "./Button.module.css"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  const { children, ...buttonProps } = props

  return (
    <button className={styles.button} {...buttonProps}>
      {children}
    </button>
  )
}
