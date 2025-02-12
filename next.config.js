/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
      domains: ["links.papareact.com","a0.muscache.com","www.jsonkeeper.com"]
  },
  env:{
   mapbox_key: "pk.eyJ1IjoiYW1vZ2hwdGwiLCJhIjoiY203MGR3YWdxMDEwdjJrczhoemg4ejNtNiJ9.mlySY_wcsrEfPXrQ1CBR7w"
  },
  transpilePackages: ['react-map-gl']
}