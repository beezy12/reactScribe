import React from 'react'

const Entry = (props) => (
  <div>
    {props.ent.entryTitle}
    {props.ent.entryBody}
  </div>
)

export default Entry