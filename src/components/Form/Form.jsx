import React, { useEffect, useState, useCallback } from 'react'
import './Form.css'
import { useTelegram } from '../../hooks/useTelegram'

const Form = () => {
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [subject, setSubject] = useState('physical');
  const {tg} = useTelegram();

  const onSendData = useCallback(() => {
      const data = {
          country,
          street,
          subject
      }
      tg.sendData(JSON.stringify(data));
  }, [country, street, subject])

  useEffect(() => {
      tg.onEvent('mainButtonClicked', onSendData)
      return () => {
          tg.offEvent('mainButtonClicked', onSendData)
      }
  }, [onSendData])

  useEffect(() => {
      tg.MainButton.setParams({
          text: 'Отправить данные'
      })
  }, [])

  useEffect(() => {
      if(!street || !country) {
          tg.MainButton.hide();
      } else {
          tg.MainButton.show();
      }
  }, [country, street])

  const onChangeCountry = (e) => {
      setCountry(e.target.value)
  }

  const onChangeStreet = (e) => {
      setStreet(e.target.value)
  }

  const onChangeSubject = (e) => {
      setSubject(e.target.value)
  }


  return (
    <div className={'form'}>
        <h3>Enter your data</h3>

        <input 
          className={'input'} 
          type='text' 
          placeholder={'Country'}
          value={country}
          onChange={onChangeCountry}
        />
        <input 
          className={'input'} 
          type='text' 
          placeholder={'Street'}
          value={street}
          onChange={onChangeStreet}
        />
        <select value={subject} onChange={onChangeSubject} className={'select'}>
          <option value={'physical'}>Ind. entity</option>
          <option value={'legal'}>Leg. entity</option>
        </select>
    </div>
  )
}

export default Form