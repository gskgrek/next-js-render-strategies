const PreRender = () => {
  return (
    <div>
      <h1>Partial Pre-Render</h1>
      <br />
      <pre>next.config.js</pre>
      <br />
      <pre>
        {`/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
}

module.exports = nextConfig`}
      </pre>
    </div>
  )
}

export default PreRender