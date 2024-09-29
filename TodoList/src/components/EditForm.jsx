import React from 'react'


export default function EditForm({handleSubmit,handleChange,handleClickU,nValue}) {
  return (
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange} value={nValue} />
    <input type="button" onClick={handleClickU} value="Actualizate pls" />
</form>
  )
}
