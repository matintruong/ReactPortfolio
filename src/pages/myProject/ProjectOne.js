import image1 from '../../images/image1.png';

export default function ProjectOne() {
  return (
    <div className="App">
      <header className="App-about">
        <img src={image1} className="project-img" alt="project image"/>
        <h4>TO DO APP</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>GO TO APP</button>
      </header>
    </div>
  );
}
