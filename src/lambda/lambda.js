import fetch from 'node-fetch';
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

exports.handler = async (event) => {
  // We can retrive type of http method in event parameter
  const { httpMethod } = event;
  
  if (httpMethod === 'GET') {
    const data = await fetch(`https://api.airtable.com/v0/appJVRlTLOZYKPWBs/Table%201?maxRecords=${MAX_RECORDS}&view=Grid%20view`, {
     "headers": {"Authorization": `Bearer ${process_api_key}`}
     })
    return { statusCode: 200, body: data };
  }
  
  return { statusCode: 404 };
}

