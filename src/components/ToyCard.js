import React from 'react';

function ToyCard({ toy }) {
  return (
    <div className="pod">
      <div className="prodpic">
        <img src={toy.image} alt={toy.name} />
      </div>
      <div className="prodinfo">
      <p>
  {toy.category}
  <br />
  {toy.code && `${toy.code}`}
  <br />
  {toy.name}
</p>
      </div>
    </div>
  );
}

export default ToyCard;