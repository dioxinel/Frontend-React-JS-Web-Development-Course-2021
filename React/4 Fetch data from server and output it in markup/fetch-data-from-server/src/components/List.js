import React from "react";
import Api from "../Api";
import { ListItem } from "./MoviItem/ListItem";
import '../index.css'
import { Pagination } from "./Paination/Pagination";
import { Header } from "./Header";


export class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = { movieList: [], currentPage: 1, totalPages: 1}
    this.fetchAndSaveData = this.fetchAndSaveData.bind(this)
  }
  async componentDidMount() {
   const data = await this.fetchAndSaveData(1)
    this.setState({...this.state, totalPages: data.total_pages})
  }

  async fetchAndSaveData(pageNum) {
    const data = await  Api.fetchPopularMovies(pageNum)
    this.setState({currentPage: pageNum, movieList: data.results }) 
    return data
  }


  render() {
    return (
      <div className="List">
        <Header />
        {this.state.movieList.map(item => {
          return <ListItem item={item} key={item.id}/>
        })}
        <Pagination 
        currentPage={this.state.currentPage} 
        fetchAndSaveData={this.fetchAndSaveData}
        totalPages={this.state.totalPages}/>
      </div>
    );
  }
}


