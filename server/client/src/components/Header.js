import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from "./Payments";

const Header = props => {
  const { auth } = props;

  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="http://localhost:5000/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
            <li key="1"><Payments /></li>,
            <li key="3" style={{ margin: '0 10px' }}>
              Credits: {auth.credits}
            </li>,
            <li key="2"><a href="http://localhost:5000/api/logout">Logout</a></li>
          ]
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          to={ auth ? "/surveys" : '/' }
          className="left brand-logo"
          style={{marginLeft: '10px'}}
        >
          Emaily
        </Link>
        <ul className="right">
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth }
};

export default connect(mapStateToProps)(Header);
