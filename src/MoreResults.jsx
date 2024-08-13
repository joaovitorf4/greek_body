import './MoreResults.css';
import davi from './imgs/svgviewer-png-output.png';
import davi2 from './imgs/davi_profile.jpg';
import { useEffect, useState } from'react';
import frank_zane from './imgs/frank_zane.jpg';
import arnold from './imgs/arnold.jpg';
import reeves from './imgs/reeves.jpg';
import levrone from './imgs/levrone.jpg';
import dorian from './imgs/dorian.jpg';
import cbum from './imgs/cbum.jpg';

function MoreResults() {

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
    <div className="MoreResults">
      <main>
          <img src={imageSrc} className='main-img' alt="davi" />
        <div className='othersResults'>
          <div>
            <img src={frank_zane} alt="" />
            <span><h2>Frank Zane</h2>
            <h3>FFMI 22</h3></span>
          </div>
          <div>
            <img src={arnold} alt="" />
            <span><h2>Arnold Schwarzenegger</h2>
            <h3>FFMI 27</h3></span>
          </div>
          <div>
            <img src={reeves} alt="" />
            <span><h2>Steve Reeves</h2>
            <h3>FFMI 25</h3></span>
          </div>
          <div>
            <img src={levrone} alt="" />
            <span><h2>Kevin Levrone</h2>
            <h3>FFMI 40</h3></span>
          </div>
          <div>
            <img src={dorian} alt="" />
            <span><h2>Dorian Yates</h2>
            <h3>FFMI 35</h3></span>
          </div>
          <div>
            <img src={cbum} alt="" />
            <span><h2>Chris Bumstead</h2>
            <h3>FFMI 25</h3></span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MoreResults;
