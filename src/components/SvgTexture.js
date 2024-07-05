

const SvgTexture = () => {

return (

        <svg
          className="texture"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsSvgjs="http://svgjs.dev/svgjs"
        >
        <defs>
          <filter
            id="nnnoise-filter"
            x="-20%"
            y="-20%"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="linearRGB"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.167"
              numOctaves="4"
              seed="15"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              result="turbulence"
            ></feTurbulence>
            <feSpecularLighting
              surfaceScale="13"
              specularConstant="1.5"
              specularExponent="20"
              lighting-color="#949494"
              x="0%"
              y="0%"
              in="turbulence"
              result="specularLighting"
            >
              <feDistantLight azimuth="3" elevation="116"></feDistantLight>
            </feSpecularLighting>
          </filter>
        </defs>
          <rect fill="#0e0e0eff"></rect>
          <rect fill="##0e0e0eff" filter="url(#nnnoise-filter)"></rect>
        </svg>
)};



export default SvgTexture;
