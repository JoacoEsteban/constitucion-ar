export const middleware = (req, res, next) => {
  res.writeHead(301, { Location: 'https://www.argentina.gob.ar/sites/default/files/constitucion_0.pdf' })
  res.end()
}