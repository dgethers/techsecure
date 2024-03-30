import React from 'react'
import getAllLayoffs from '../actions/getListings'

type Props = {}

const pages = async (props: Props) => {
  const data = await getAllLayoffs();
  console.log(data);

    // Process each row (object)
    data.forEach((row) => {
      // Access specific columns (properties) from the row
      const id = row.id; // Example: Assuming there's an 'id' column
      const name = row.name; // Example: Assuming there's a 'name' column

      // Do something with the extracted data (e.g., display it in your UI)
      console.log(`ID: ${id}, Name: ${name}`);
    });
    
  return (
    <div>pages</div>
  )
}

export default pages