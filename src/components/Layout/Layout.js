import React, {Fragment} from 'react';
import Toolbar from "../Toolbar/Toolbar";

import './Layout.css';
import {Container} from "reactstrap";

const Layout = ({children}) => (
  <Fragment>
    <Toolbar/>
    <Container>
      <main className="Layout-Content">
        {children}
      </main>
    </Container>
  </Fragment>
)

export default Layout;