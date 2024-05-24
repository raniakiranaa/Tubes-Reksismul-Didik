// import { SpacesServiceClient } from '@google-apps/meet/v2';

// const meetClient = new SpacesServiceClient();

// async function callCreateSpace() {
//     const request = {};
//     const response = await meetClient.createSpace(request);
//     return response; // Assuming you want to return the response for further processing
// }

// export { callCreateSpace };

// pages/api/createSpace.js

import { SpacesServiceClient } from '@google-apps/meet';

// Handler for the API route
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // The client library is used here
    const meetClient = new SpacesServiceClient();

    try {
      // Construct request
      const request = {};

      // Run request
      const response = await meetClient.createSpace(request);
      console.log(response);

      // Send the response back to the client
      res.status(200).json(response);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: err.message });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
