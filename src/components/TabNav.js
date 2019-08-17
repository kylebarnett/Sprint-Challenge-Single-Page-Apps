import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import EpisodeList from './EpisodeList';

// TODO: Add missing tabs below
// const panes = [
//   { menuItem: 'Home Page', render: () => <Tab.Pane><WelcomePage /></Tab.Pane> },
//   { menuItem: 'Characters', render: () => <Tab.Pane><CharacterList /></Tab.Pane> },
//   { menuItem: 'Locations', render: () => <Tab.Pane><LocationsList /></Tab.Pane> },
//   { menuItem: 'Episodes', render: () => <Tab.Pane><EpisodeList /></Tab.Pane> }
// ]

// const TabNav = () => <Tab panes={panes} />

const TabNav = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/locations">Locations</NavLink>
      <NavLink to="/episodes">Episodes</NavLink>
    </nav>
  )
}

export default TabNav