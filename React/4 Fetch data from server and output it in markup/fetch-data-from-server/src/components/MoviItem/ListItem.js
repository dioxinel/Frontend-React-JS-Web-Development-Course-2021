import React from "react";
import { Image } from "./Image";
import { Overview } from "./Overview";
import { RateSwitch } from "./RateSwitch";


export class ListItem extends React.Component {
  render() {
    return (
      <div className="ListItem">
        <div>{this.props.item.title}</div>
        <Image url={`https://image.tmdb.org/t/p/w300${this.props.item.poster_path}`} />
        <RateSwitch data={this.props.item.popularity} />
        <Overview data={this.props.item.overview} />
      </div>
    );
  }
}