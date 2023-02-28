export async function onRequestGet({ env, next }) {
  const destinationURL = 'https://example.com'
  const statusCode = 301
  return Response.redirect(destinationURL, statusCode)
}
