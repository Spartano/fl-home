import React, { PureComponent } from 'react';

export class Adventures extends PureComponent {
  render() {
    return (
      <section id="adventures" className="content-section side-text">
        <div className="container">
          <h2>What adventures await me?</h2>
          <div className="row">
            <div>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/tG4l514O0t4" frameBorder="0" allowFullScreen />
            </div>
            <div className="text-cont">
              <p>
                You'll be a part of a growing global Movement with a plan to change the world
              </p>
              <p>
                Meeting positive, pro-active, awesome new friends both locally, and globally
              </p>
              <p>
                Together using simple, fun activities and exploring new ideas to shape friendlier, happier communities
              </p>
              <p>
                Bringing peace and well-being to everyone, everywhere
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
