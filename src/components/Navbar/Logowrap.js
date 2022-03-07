import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Logowrap = () => {
	return(
		<div className="logo-frame">
			<StaticImage
				className="tiny-icon"
				layout="fixed"
				formats={["AUTO", "WEBP", "AVIF"]}
				src="./jm.png"
				width={123}
				height={71}
				quality={95}
				alt="Jacks Media WAGMI"
        />
		</div>
	)
}

export default Logowrap
