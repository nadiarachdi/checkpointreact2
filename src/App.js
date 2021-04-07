import './App.css';

import bizerte from '../src/bizerte.png';
function App() {
  return (
    <div className='all'>
    <div >
      <h1 className="title red">Belles villes de Tunisie</h1>
      <br />
      <img  width={865} height={450} style={{border: 'solid 2px black',maxWidth: '100vw'}} src= {bizerte}/>
      <br />
      <img  width={865} height={450} style={{border: 'solid 2px black',maxWidth: '100vw'}} src="./kairouan.png" />
    </div>
    
    <iframe width={865} height={450}  style={{border: 'solid 2px black',maxWidth: '100vw'}} src="https://www.youtube.com/embed/hRNkRrwsuZI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
    
  </div>

  );
}
export default App;
