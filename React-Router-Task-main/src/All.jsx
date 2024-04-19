
import React from 'react';

function All({ visible }) {
  const imageSize = {
    width: '450px',
    height: '400px',
    margin: '10px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const imageContainerStyle = {
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1>All</h1>
      {visible && (
        <>
          
          <div style={rowStyle}>
            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-Product-Based-Companies-for-DevOps-Engineers-in-India.webp'
                alt="All Image 1"
                style={imageSize}
              />
              <p>Best 11 Product-Based Companies for Product Managers in India</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg'
                alt="All Image 2"
                style={imageSize}
              />
              <p>Best Books to Learn Blockchain</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp'
                alt="All Image 3"
                style={imageSize}
              />
              <p>11 Tips to Make Your Cloud Engineer Resume Professional</p>
            </div>
          </div>

          
          <div style={rowStyle}>
            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Developer-vs.-Tester-Roles-Collaboration-and-Impact-on-Software.webp'
                alt="All Image 4"
                style={imageSize}
              />
              <p>Best 19 Product-Based Companies for Civil Engineers in India</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Artificial-Intelligence-vs-Human-Intelligence.webp'
                alt="All Image 5"
                style={imageSize}
              />
              <p>Artificial Intelligence vs Human Intelligence</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://www.mindinventory.com/blog/wp-content/uploads/2021/03/mobile-app-design-fundamentals-the-difference-between-UI-and-UX.webp'
                alt="All Image 6"
                style={imageSize}
              />
              <p>Top 8 Product-based Companies for UI/UX Designers Freshers</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default All;
