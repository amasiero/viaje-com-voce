import React from 'react'
import Menu from './menu'

export default props => (
    <header>
      <div className="topo">
        <h1 className="logo"><a href="#/galeria"><i className="fa fa-globe"></i> <span>Viaje com você</span></a></h1>
        <input type="checkbox" id="openSidebarMenu" />
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle"><i className="fa fa-bars"></i></label>
        <Menu cartAmount={props.cartAmount}/>
      </div>
    </header>
)
