import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footblur = () => {
  const ethWallet = "0xfe130864ccFfA959C2cAd1A96bC5c625748130b5"
  const btcWallet = "1G4zZpnha3RvdbMxujreWhChXaeTvo3E62"
  return(
    <div className="footsie">
      <div className="floatybox">
        <p>All advice herein is logistical, not financial.</p>
        <p>Coded and designed by <a href="https://jacks.media">Jacks Media</a>
        {`, `}{new Date().getFullYear()}</p>
      </div>
      <div className="bottommost-text">
        <div className="center">
        <h5 className="engraved">Donate ETH</h5>
        <StaticImage
          className="tiny-icon"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/eth.svg"
          width={30}
          height={48}
          quality={95}
          alt="Ethereum symbol"
        />
        <h5 className="engraved">{ethWallet}</h5>
      </div>
      <div className="center">
        <h6 className="engraved">Donate Bitcoin</h6>
        <StaticImage
          className="tiny-icon"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/btc.svg"
          width={48}
          height={48}
          quality={95}
          alt="Bitcoin symbol"
        />
        <h6 className="engraved">{btcWallet}</h6>
      </div>
      </div>
    </div>
  )
}
export default Footblur