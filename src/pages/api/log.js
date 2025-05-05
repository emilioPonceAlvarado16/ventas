export default async function handler(req, res) {
  if (req.method === 'POST') {
    const response = await fetch('http://ec2-44-223-229-134.compute-1.amazonaws.com:5000/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization || ''
      },
      body: JSON.stringify({
        ...req.body,
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
      })
    });

    const result = await response.json();
    res.status(response.status).json(result);
  } else {
    res.status(405).end();
  }
}