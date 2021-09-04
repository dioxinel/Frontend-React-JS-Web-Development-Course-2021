import React from "react";
import { ThemeContextConsumer } from "../List";
import { Image } from "./Image";
import { Overview } from "./Overview";
import { RateSwitch } from "./RateSwitch";
import '../../index.css'
import { ShowReleaseDate } from "./ShowReleaseDate";

export class ListItem extends React.Component {
  render() {
    return (
      <ThemeContextConsumer>
        {theme => {
          return (
            <div className="ListItem">
              <div className={theme ? 'title-lt' : 'title-dt'}>{this.props.item.title}</div>
              <Image url={`https://image.tmdb.org/t/p/w300${this.props.item.poster_path}`} />
              <RateSwitch data={this.props.item.popularity} />
              <ShowReleaseDate data={this.props.item.release_date} handleShow={this.props.handleShow}/>
              <Overview data={this.props.item.overview} />
            </div>
          )
        }
        
        }
      </ThemeContextConsumer>
      
    );
  }
}