import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footblur = () => {
  const ethWallet = "j4cks.eth"
  const egldWallet = "erd159mypt4myss3mqrs89ft0hjeacffks2690gq9u3mlh73m9sh0w5s09eqhh"
  const rvnWallet = "RDhE9ZEEcRn38x5tQiYvv9gT7MXfwL82By"
  const btcWallet = "bc1q3jmlqvpkta0jywy87edd97v9yu7jv74xu0fhy4"
  return(
    <div className="footsie">
      <div className="floatybox">
        <p>All advice herein is logistical, not financial.</p>
        <p>Coded and designed by <a href="https://jacks.media">Jacks Media</a>
        {`, `}{new Date().getFullYear()}</p>
      </div>
      <div className="bottommost-text">
        <div className="center-tightly">
        <StaticImage
          className="tiny-icon"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/rvncoin.svg"
          width={35}
          height={48}
          quality={95}
          alt="Ravencoin symbol"
        />
        <h6 className="engraved">{rvnWallet}</h6>
        </div>
        <div className="center-tightly">
        <StaticImage
          className="tiny-icon"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/egld.svg"
          width={48}
          height={48}
          quality={95}
          alt="Egold symbol"
        />
        <h6 className="engraved">{egldWallet}</h6>
        </div>
        <div className="center-tightly">
        <StaticImage
          className="tiny-icon"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/btc.svg"
          width={48}
          height={48}
          quality={95}
          alt="Ethereum symbol"
        />
        <h5 className="engraved">{btcWallet}</h5>
      </div>
      <div className="center-tightly">
        <StaticImage
          className="tiny-icon"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/eth.svg"
          width={30}
          height={48}
          quality={95}
          alt="Bitcoin symbol"
        />
        <h6 className="engraved">{ethWallet}</h6>
      </div>
      </div>
    </div>
  )
}
export default Footblur