import React from 'react';
import { Link } from 'react-router-dom';

export const MyNavLink = (props) =>
    (
        <Link className="nav-link" to={props.to}>{props.children}</Link>
    )

