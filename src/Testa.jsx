import './Testa.css';
import React, { useState } from 'react';
import { calculateMaxWeight, calculateArmsCalves, calculateChest, calculateLegs, calculateShoulder, calculateFFMI, calculateFFMINormalized } from './formulas';

function Testa() {
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    bodyFatPercentage: '',
    wristSize: '',
    kneeSize: '',
    waistSize: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log('Form submitted:', formData);
  };

  return (
    <div className='Testa'>
      <main>
        <div className="inputs">
          <form onSubmit={handleSubmit}>
            <h1>Put your Measurements</h1>
            <div className="inputsWrap">
              <div>
                <label>
                  Height ( in cm )
                </label>
                <input
                  type="text"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                  placeholder="Ex: 164"
                />
              </div>
              <div>
                <label>
                  Weight ( in Kg )
                </label>
                <input
                  type="text"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                  placeholder="Ex: 84"
                />
              </div>
              <div>
                <label>
                  Body fat percentage %
                </label>
                <input
                  type="text"
                  name="bodyFatPercentage"
                  value={formData.bodyFatPercentage}
                  onChange={handleChange}
                  required
                  placeholder="Ex: 84"
                />
              </div>
              <div>
                <label>
                  Wrist Size ( in cm )
                </label>
                <input
                  type="text"
                  name="wristSize"
                  value={formData.wristSize}
                  onChange={handleChange}
                  required
                  placeholder="Ex: 16.5"
                />
              </div>
              <div>
                <label>
                  Knee Size ( in cm )
                </label>
                <input
                  type="text"
                  name="kneeSize"
                  value={formData.kneeSize}
                  onChange={handleChange}
                  required
                  placeholder="Ex: 37"
                />
              </div>
              <div>
                <label>
                  Waist Size ( in cm )
                </label>
                <input
                  type="text"
                  name="waistSize"
                  value={formData.waistSize}
                  onChange={handleChange}
                  required
                  placeholder="Ex: 88"
                />
              </div>
            </div>
            <button type="submit" className="btn-result">Submit</button>
          </form>
        </div>
        <div className="outputs">
          <h1>Results</h1>
          <div className='your-results'>
            <div className="data-result">
              <h2>FFMI</h2>
              <h3>{submittedData ? `${(calculateFFMI(submittedData.weight, submittedData.height, submittedData.bodyFatPercentage)).toFixed(2)}` : ''}</h3>
            </div>
            <div className="data-result">
              <h2>FFMI normalized</h2>
              <h3>{submittedData ? `${(calculateFFMINormalized(submittedData.weight, submittedData.height, submittedData.bodyFatPercentage)).toFixed(2)}` : ''}</h3>
            </div>
            <div className="data-result">
              <h2>Max Weight</h2>
              <h3>{submittedData ? `${calculateMaxWeight(submittedData.height)} Kgs (around: 6% bf)` : ''}</h3>
            </div>
            <div className="data-result">
              <h2>Arms</h2>
              <h3>{submittedData ? `${calculateArmsCalves(submittedData.wristSize)} cm` : ''}</h3>
            </div>
            <div className="data-result">
              <h2>Shoulder</h2>
              <h3>{submittedData ? `${calculateShoulder(submittedData.waistSize)} cm` : ''}</h3>
            </div>
            <div className="data-result">
              <h2>Chest</h2>
              <h3>{submittedData ? `${calculateChest(submittedData.wristSize)} cm` : ''}</h3>
            </div>
            <div className="data-result">
              <h2>Legs</h2>
              <h3>{submittedData ? `${calculateLegs(submittedData.kneeSize)} cm` : ''}</h3>
            </div>
            <div className="data-result">
              <h2>Calves</h2>
              <h3>{submittedData ? `${calculateArmsCalves(submittedData.wristSize)} cm` : ''}</h3>
            </div>
          </div>
          <div className='other-results'>
            <h1>Compare with others</h1>
            <button type="submit" className="btn-result">More Results</button>
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default Testa;
