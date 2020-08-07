import React from 'react';


class Footer extends React.Component {
  render() {
    return (
      <>
        <h3 className="footer-label">External Links</h3>
        <footer>

          <a href="https://github.com/bradleypaul">

            <img src={require(`../../assets/logos/GitHub.png`)}
              alt="current category" className="logo" />

          </a>

          <a href="https://www.linkedin.com/in/paul-bradley-1b7a2b186/">

            <img src={require(`../../assets/logos/LinkedIn.png`)} alt="current category" className="logo" />

          </a>

          <a href="https://stackoverflow.com/users/8755147/paul-bradley">

            <img src={require(`../../assets/logos/StackOverflow.png`)} alt="current category" className="logo" />

          </a>
        </footer >
      </>
    )
  }

}

export default Footer;