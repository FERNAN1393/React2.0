import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="http://www.creative-tim.com">Creative Tim</a>, made with
            love for a better web
          </p>
       
      </footer>
    );
  }
}

export default Footer;
