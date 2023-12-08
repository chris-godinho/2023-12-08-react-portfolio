// import gitHubIcon from "../assets/images/github_wt_icon.png";
// import linkedInIcon from "../assets/images/linkedin_wt_icon.png";
// import xIcon from "../assets/images/x_wt_icon.png";

function Footer() {
  return (
    <footer className="text-end py-3">
      <div className="footer-container">
        <div className="icon-tray">
          <a href="https://github.com/chris-godinho">
            <img src="/github_wt.icon.png" className="tray-icon-size" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/cristianobgodinho/">
            <img src="/linkedin_wt.icon.png" className="tray-icon-size" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/chris__godinho">
            <img src="/x_wt.icon.png" className="tray-icon-size" alt="X" />
          </a>
        </div>
        <p>Created by Chris Godinho using <a href="https://react.dev/">React</a>. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
