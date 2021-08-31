import React from "react";
import { AppItem } from "./components/AppItem";
import { AppWrapper } from "./components/AppWrapper";
import { turtles } from "./constants";
import { Image } from "./components/Image";



function App() {
  return (
    <div>
      <AppWrapper title={'React Turtles'}><div>{turtles.map(item => {
    return <AppItem key={item.name} name={item.name}
              description={`${item.nickName}
                kills people who doesn’t learn React with ${item.weapon}`}
              Image={<Image imgUrl={item.imgUrl} />}
            />      
          })}</div></AppWrapper>
    </div>
  );
}

export default App;
