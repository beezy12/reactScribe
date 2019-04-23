import React from 'react'
import Entry from './Entry'

const Entries = (props) => (
  <div>
    {props.entries.map(entry => (
      <Entry ent={entry} />
    ))}
  </div>
)


export default Entries