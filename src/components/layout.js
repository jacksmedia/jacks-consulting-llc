import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const ethWallet = "0xfe130864ccFfA959C2cAd1A96bC5c625748130b5"
  const btcWallet = "1G4zZpnha3RvdbMxujreWhChXaeTvo3E62"
  const rootPath = `${__PATH_PREFIX__}/` // boolean test: y/n Home icon aside app title
  const isRootPath = location.pathname === rootPath
  let headerLogo
  if (isRootPath) {
    headerLogo = (
      <h3 className="cinzel">
        {title}
      </h3>
    )
  } else {
    headerLogo = (
      <h5 className="cinzel chromatic">
        <Link to="/">
        <FontAwesomeIcon icon={faHome} />
          <span>&nbsp;</span>
        {title}
        </Link>
      </h5>
    )
  } // end boolean Home icon feature

  return (
    <div>
      <header className="navver">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
        <div className="level-item logo">{headerLogo}</div>
        <ul className="menu">
          <li><Link to="/wallets" className="is-hoverable">Wallets</Link></li>
          <li><Link to="/authentication" className="is-hoverable">Auth</Link></li>
          <li><Link to="/browser" className="is-hoverable">Browser</Link></li>
          <li><Link to="/exchanges" className="is-hoverable">Exchanges</Link></li>
        </ul>
      </header>
      <section className="mains">{children}</section>
      <footer className="footsie">        
        <p>All advice herein is logistical, not financial.</p>
        <p>Coded and designed by <a href="https://jacks.media">Jacks Media</a>
        {`, `}{new Date().getFullYear()}</p>
        <p>
          <StaticImage
            className="tiny-icon"
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/eth.svg"
            width={40}
            height={64}
            quality={95}
            alt="Ethereum symbol"
          />
        </p>
        <p>Donate ETH</p>
        <h6>{ethWallet}</h6>
        <p>
          <StaticImage
            className="tiny-icon"
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/btc.svg"
            width={64}
            height={64}
            quality={95}
            alt="Bitcoin symbol"
          />
        </p>
        <p>Donate BTC</p>
        <h6>{btcWallet}</h6>
      </footer>
    </div>
  )
}

export default Layout
