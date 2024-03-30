import React from 'react'
import getAllLayoffs from '../actions/getListings'
import getCurrentUser from '../actions/getCurrentUser'

type Props = {}

const pages = async (props: Props) => {
  const companyLayoffData = await getAllLayoffs();
  const userData = await getCurrentUser();
  //getCurrentUser()
  console.log(companyLayoffData);

    // Process each row (object)
    companyLayoffData.forEach((row) => {
      // Access specific columns (properties) from the row
      const company = row.company; 
      const location = row.location;  
      const industry = row.industry; 
      const totalLaidOff = row.totalLaidOff;  
      const percentageLaidOff = row.percentageLaidOff; 
      const date = row.date;  
      const country = row.country;    

      // Do something with the extracted companyLayoffData (e.g., display it in your UI)
      console.log(`company: ${company}, location: ${location}, industry: ${industry},totalLaidOff: ${totalLaidOff},percentageLaidOff: ${percentageLaidOff}, date: ${date},country: ${country}`);
    });
    
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Location</th>
          <th>Industry</th>
          <th>Total Laid Off</th>
          <th>LaidOff %</th>
          <th>Date</th>          
          <th>Country</th>          
        </tr>
      </thead>
      <tbody>
        {companyLayoffData.map((row) => (
          <tr key={row.id}>
            <td>{row.company}</td>
            <td>{row.location}</td>
            <td>{row.industry}</td>
            <td>{row.totalLaidOff}</td>
            <td>{row.percentageLaidOff}</td>
            <td>{row.date}</td>
            <td>{row.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default pages