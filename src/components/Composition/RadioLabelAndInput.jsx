import React from 'react'
import styled from 'styled-components'
export default function RadioLabelAndInput({label,name,checked,...rest}) {
  return (
    <label style={{
        display: 'inline-block',
        padding: '0em 1em',
        margin: '0 0.5em',
        cursor: 'pointer',
        color: '#292929',
        borderRadius: '0.25em',
        background: checked?'#FC0':'#efefef',
        boxShadow: '0 3px 10px rgba(0,0,0,0.2), inset 0 -3px 0 rgba(0,0,0,0.22)',
        transition: '0.3s',
        userSelect: 'none'

    }}>
        <p>{label}</p>
        <RadioButton value={label} type='radio' name={name} {...rest} />
    </label>
  )
}

const RadioButton = styled.input`
    display:none;
`