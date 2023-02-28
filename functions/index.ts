export async function onRequestGet({ env, next }) {
  const response = await next()
  return new HTMLRewriter()
    .on('h1', {
      element(element) {
        element.setInnerContent('Hello Educ')
      }
    }).transform(response)
}
