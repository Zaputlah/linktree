import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import './App.css';

const sosmed = [
  { title: 'youtube', url: 'https://www.youtube.com/channel/UCJCeWHXjQhH8qRmycEayMwQ' },
  { title: 'Instagram', url: 'https://instagram.com/zaputlah/?hl=id' },
  { title: 'git', url: 'https://github.com/Zaputlah' },
  // Tambahkan link lainnya sesuai keinginan Anda
];
const react = [
  { title: 'Kalkulator', url: 'https://calculator-react-js-xi.vercel.app/' },
  { title: 'Crud', url: 'https://crud-zaputlah-react-no-db.vercel.app/' },
  { title: 'Todolist', url: 'https://react-todo-list-ecru-omega.vercel.app/' },
  { title: 'Landingpage-Bioskop+Api', url: 'https://bioskop-zaputlah-landingpage.vercel.app/' },
  { title: 'Movie+Api', url: 'https://movie-api-ivory.vercel.app/' },
  { title: 'TabelList+Api', url: 'https://table-list-apex-legend.vercel.app/' },
  { title: 'WeatherApp+Api', url: 'https://weatherapp-hazel-three.vercel.app/' },
  { title: 'qoute+Api', url: 'https://qoute-chi.vercel.app/' },
  { title: 'CrudRedux+jwt', url: 'https://crud-react-redux-tau.vercel.app/' },
  // Tambahkan link lainnya sesuai keinginan Anda
];

const Comingsoon = [
  // Tambahkan link lainnya sesuai keinginan Anda
];
function App() {
  const [selectedUrl, setSelectedUrl] = useState('');

  const handleSelectChange = (event) => {
    setSelectedUrl(event.target.value);
    if (event.target.value) {
      window.open(event.target.value, '_blank');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Zaputlah</h1>
        <p className="project-heading">My Project:</p>
        <div className="link-dropdown">
          <select onChange={handleSelectChange}>
            <option value="">Project React</option>
            {react.map((project, index) => (
              <option key={index} value={project.url}>
                {project.title}
              </option>
            ))}
          </select>
        </div>
        <div className="link-dropdown">
          <select onChange={handleSelectChange}>
            <option value="">Coming soon</option>
            {Comingsoon.map((project, index) => (
              <option key={index} value={project.url}>
                {project.title}
              </option>
            ))}
          </select>
        </div>
        <div className="link-dropdown">

        </div>
        <div className="social-media-icons">
          {sosmed.map((link, index) => (
            <SocialIcon className='sosmed' key={index} url={link.url} target="_blank" rel="noopener noreferrer" style={{ width: '30px', height: '30px' }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
