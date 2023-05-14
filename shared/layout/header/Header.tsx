import React from "react"
import styles from "./Header.module.css"
import Link from "next/link"

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link href="/" className={styles.logo}>
          <h1>Orçamentos</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header
