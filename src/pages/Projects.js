import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import image1 from '../images/image1.png';
import image2 from '../images/image2.png';

import ProjectOne from './myProject/ProjectOne';
import ProjectTwo from './myProject/ProjectTwo';

export default function Projects() {
  return (
    <div className="App">
      <header className="App-about">
        <h3>My Projects</h3>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/projects/project1">TO DO APP</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/projects/project2">API DICTIONARY APP</NavLink>
          </li>
        </ul>
        <Switch>
            <Route path="/projects/project1">
              <ProjectOne />
            </Route>
            <Route path="/projects/project2">
              <ProjectTwo />
            </Route>
          </Switch>
      </header>
    </div>
  );
}
