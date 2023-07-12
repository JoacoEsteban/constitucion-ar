const ENV = process.env.NODE_ENV
const shouldNotIndex = ENV === 'production'

export default function handler (req, res) {
  res.send([
    `User-agent: *`,
    shouldNotIndex && `Disallow: /`,
    `Disallow: /api/`
  ]
    .filter(Boolean)
    .join('\n')
  )
}
