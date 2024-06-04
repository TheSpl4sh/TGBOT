import Button from '../Button/Button'
import { useTelegram } from '../../hooks/useTelegram'
import './Header.css'
import React from 'react'

const Header = () => {
  const {user, onClose} = useTelegram()

  return (
    <div className={'header'}>
        <Button onClick={onClose}>Close</Button>
        <span className={'username'}>
            {user?.username}
        </span>
    </div>
  )
}

export default Header