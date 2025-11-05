import app from '../src/main.js'

// Vercel Serverless function wrapper
// Forward the incoming request to the existing Express app instance.
export default async function handler(req, res) {
  try {
    // If app is an express instance, it's callable as a function (req,res)
    return app(req, res)
  } catch (e) {
    console.error('Error in api/index.js wrapper:', e)
    res.statusCode = 500
    res.end('Internal Server Error')
  }
}
