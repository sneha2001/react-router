
import React from 'react';

function Career({ visible }) {
  const imageSize = {
    width: '450px',
    height: '400px',
    marginRight: '20px',
  };

  const marginBottomStyle = {
    marginBottom: '20px',
  };

  const fourthImageStyle = {
    ...imageSize,
    marginLeft: '30px', 
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1>Career</h1>
      {visible && (
        <>
          
          <div style={rowStyle}>
            <div>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp'
                alt="Career Image 1"
                style={{ ...imageSize, ...marginBottomStyle }}
              />
              <p>Best 11 Product-Based Companies for Product Managers in India </p>
            </div>
            <div>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers.webp'
                alt="Career Image 2"
                style={{ ...imageSize, ...marginBottomStyle }}
              />
              <p>Top 13 Product Based Companies for AI Freshers</p>
            </div>
            <div>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-based-Companies-for-UIUX-Designers.webp'
                alt="Career Image 3"
                style={{ ...imageSize, ...marginBottomStyle }}
              />
              <p>Top 8 Product-based Companies for UI/UX Designers </p>
            </div>
          </div>

          
          <div style={rowStyle}>
            <div>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Product-Based-Companies-for-Game-Developers.webp'
                alt="Career Image 4"
                style={{ ...imageSize, marginBottom: '20px'}}
              />
              <p> Product-Based Companies for Game Developers in 2023</p>
            </div>
            <div>
              <img
                src='data:image/jpeg;base64,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'
                alt="Career Image 5"
                style={{ ...imageSize, ...marginBottomStyle }}
              />
              <p>Software Developer vs Software Engineer: Who is More Important</p>
            </div>
            <div>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Excellent-Product-based-Companies-for-UI_UX-Designing.webp'
                alt="Career Image 6"
                style={{ ...imageSize, ...marginBottomStyle }}
              />
              <p>Best Product-Based Companies for AI Engineers in 2023</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Career;
