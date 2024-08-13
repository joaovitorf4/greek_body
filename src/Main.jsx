import './Main.css';
import davi from './imgs/svgviewer-png-output.png';
import davi2 from './imgs/davi_profile.jpg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from'react';

function Main() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/result');
  };

  const [imageSrc, setImageSrc] = useState('./imgs/svgviewer-png-output.png');

  const updateImageSrc = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth / screenHeight > 14 / 9) {
      setImageSrc(davi);
    } else {
      setImageSrc(davi2);
    }
  };

  useEffect(() => {
    updateImageSrc();

    window.addEventListener('resize', updateImageSrc);

    return () => {
      window.removeEventListener('resize', updateImageSrc);
    };
  }, []);

  return (
    <div className="Main">
      <main>
          <img className='main-img' src={imageSrc} alt="davi" />
        <div className='start'>
            <div className="description">
              <h1>Archive the Greek</h1>
              <h1>God <strong>aesthetic</strong> Body</h1>
            </div>
            <button onClick={handleButtonClick}>Start Test</button>
        </div>
      </main>
    </div>
  );
}

export default Main;
