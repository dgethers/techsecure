import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import getFilteredListings from '../actions/getFilteredListings'

type Props = {}

const pages = async (props: Props) => {
  const companyLayoffData = await getFilteredListings();
  const userData = await getCurrentUser();
  //getCurrentUser()
  console.log(companyLayoffData);

    // Process each row (object)
    companyLayoffData.forEach((row) => {
      // Access specific columns (properties) from the row
      const company = row.company; 
      const location = row.location;  
      const industry = row.industry; 
      const totalLaidOff = row.total_laid_off;  
      const percentageLaidOff = row.percentage_laid_off; 
      const date = row.date;  
      const country = row.country;    

      // Do something with the extracted companyLayoffData (e.g., display it in your UI)
      //console.log(`company: ${company}, location: ${location}, industry: ${industry},totalLaidOff: ${totalLaidOff},percentageLaidOff: ${percentageLaidOff}, date: ${date},country: ${country}`);
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
            <td>{row.total_laid_off}</td>
            <td>{row.percentage_laid_off}</td>
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