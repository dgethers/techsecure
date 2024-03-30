import React from 'react'
import getAllLayoffs from '../actions/getListings'

type Props = {}

const pages = async (props: Props) => {
  const data = await getAllLayoffs();
  console.log(data);
  return (
    <div>pages</div>
  )
}

export default pages