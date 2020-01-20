import fetch from 'node-fetch';
const process_api_key = process.env.AIRTABLE_API_KEY;
const MAX_RECORDS = 20;

exports.handler = async (event) => {
  // We can retrive type of http method in event parameter
  const { httpMethod } = event;
  
  if (httpMethod === 'GET') {
	const response = await fetch(`https://api.airtable.com/v0/appJVRlTLOZYKPWBs/PROJECTS?maxRecords=${MAX_RECORDS}&view=Grid%20view`, {
 	"headers": {"Authorization": `Bearer ${process_api_key}`} })
 	const data = await response.text();
	return { statusCode: 200, body: data };
  }
  return { statusCode: 404 };
}

