import Button from '../Button/Button'
import { useTelegram } from '../../hooks/useTelegram'
import React from 'react'

const Header = () => {
  const {user, onClose} = useTelegram()

  return (
    <div>
        <Button onClick={onClose}>Закрыть</Button>
        <span className={'username'}>
            {user?.username}
        </span>
    </div>
  )
}

export default Header