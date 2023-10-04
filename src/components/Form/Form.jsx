import React, { useEffect, useState } from 'react'
import "./Form.css"
import {useTelegram} from '../hooks/useTelegram'



const Form = () => {


  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [subject, setSubject] = useState('physical')
  const {tg} = useTelegram('')

  useEffect(() => {
    tg.MainButton.setParams( {
      text: 'Send Info'
    })
  }, [])


  useEffect(() => {
    if(!street || !country) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [country, street])

  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }

  const onChangeStreet = (e) => {
    setStreet(e.target.value)
  }

  const onChangeSubject= (e) => {
    setSubject(e.target.value)
  }
  return (
    <div className={"form"}>
        <h3>Enter your adress</h3>
        <input className={'input'}
        type="text"
        placeholder={'Country'}
        value={country}
        onChange={onChangeCountry}
        />
        <input className={'input'}
        type="text"
        placeholder={'Street'} 
        value={street}
        onChange={onChangeStreet}
        />
        <select className={'select'}
        value={subject}
        onChange={onChangeSubject}
        >
            <option value={'physical'}>Private person</option>
            <option value={'legal'}> Juridical person</option>
        </select>
    </div>
  )
}

export default Form