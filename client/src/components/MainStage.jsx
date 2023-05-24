import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
const MainStage = () => {
  const navigate = useNavigate();
  return (
 
  <div
  style={{
    position: "relative",
    height: "100vh", // Set the height to 100% of the viewport height
    backgroundImage: `url("/images/mena-background-desktop.webp")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display:"flex",
    flexDirection:"column",
    alignItems: "center",
    justifyContent:"center"
  }}
>

      <div
      style={{
        position: "absolute",
        top:"40%",
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
      }}
      >
      <Logo>
        <img
          src="/images/logo.svg"
          alt="Disney+"
          onClick={() => navigate("/")}
        />
        
      </Logo>
     <div style={{
      // width:"500px",
      display:"flex",
      flexDirection:"column",
      alignItems: "center",
      justifyContent:"center"
      }}>
     <h2>
       Stream Disney+ Originals, latest series & blockbuster movies
      </h2>
     </div> 
  

      </div>
      </div>
  );
};

export default MainStage;
const Logo = styled.a`
  padding: 0;
  width: 220px;
  margin-top: 4px;
  max-height: 210px;
  font-size: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
  }
`;
const Carousel = styled(Slider)`
  padding: 0 50px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }

  
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: 5px;
  }
  .slick-next {
    right: 5px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
  @media (max-width: 768px) {
    a {
      img {
        height: 170px;

        object-fit: cover;
        object-position: 100%;
      }
    }
  }
`;
