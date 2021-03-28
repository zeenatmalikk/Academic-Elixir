import { Card, Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import "./Blogslider.css"

const data = [
  {
    img:
      "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/testimonial.png",
    faculty:
      "You can't succed if you do what others do and follow the well-worn path. You need to create a new and original path for yourself",
    name: "Clifford flazierf",
  },
  {
    img:
      "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/testimonial.png",
    faculty:
      "You can't succed if you do what others do and follow the well-worn path. You need to create a new and original path for yourself",
    name: "Clifford flazierf",
  },
  {
    img:
      "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/testimonial.png",
    faculty:
      "You can't succed if you do what others do and follow the well-worn path. You need to create a new and original path for yourself",
    name: "Clifford flazierf",
  },
];

const Blogslider = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        disableSwipe={true}
      >
        {data.map((o) => (
          <div className="bgstyle">
           <Container >
            <img
              src={o.img}
              style={{
                marginInline: 550,
                marginTop:"3%",
                marginBottom:"3%",
                height:"150%"
              }}
            />
            <Typography variant="h6" style={{marginBottom:"3%", fontSize:35, color:"#ffffff"}} className="text1">
              {o.faculty}
            </Typography>
            <Typography style={{marginBottom:"3%", fontSize:25}}variant="h6" className="text2">
              {o.name}
            </Typography>
          </Container>
          </div>
        ))}
      </ItemsCarousel>
    </div>
  );
};

export default Blogslider;
