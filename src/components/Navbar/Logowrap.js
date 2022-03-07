import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Logowrap = () => {
	return(
		<div>
			<StaticImage
				className="tiny-icon"
				layout="fixed"
				formats={["AUTO", "WEBP", "AVIF"]}
				src="./logo.png"
				width={77}
				height={77}
				quality={95}
				alt="Jacks Media WAGMI"
        />
		</div>
	)
}

export default Logowrap
