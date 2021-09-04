import React from "react";
import Api from "../Api";
import { ListItem } from "./MoviItem/ListItem";
import '../index.css'
import { Pagination } from "./Paination/Pagination";
import { Header } from "./Header";
import { ThemeButton } from "./ThemeButton";
import { PopUp } from "./PopUp";


const ThemeContext = React.createContext(true);
const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;

export class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = { movieList: [],
      currentPage: 1,
      totalPages: 1, 
      lightTheme: true,
      release: null,
    }
    this.fetchAndSaveData = this.fetchAndSaveData.bind(this)
    this.handleChangeTheme = this.handleChangeTheme.bind(this)
    this.handleClosePopUp = this.handleClosePopUp.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }
  async componentDidMount() {
   const data = await this.fetchAndSaveData(1)
    this.setState({...this.state, totalPages: data.total_pages})
  }

  async fetchAndSaveData(pageNum) {
    const data = await  Api.fetchPopularMovies(pageNum)
    this.setState({currentPage: pageNum, movieList: data.results }) 
    console.log(data)
    return data
  }

  handleChangeTheme() {
    this.setState({...this.state, lightTheme: !this.state.lightTheme})
  }

  handleShow(data) {
    this.setState({...this.state, release: data})
  }

  handleClosePopUp() {
    this.setState({...this.state, release: null}) 
  }

  render() {
    return (
      <ThemeContextProvider value={this.state.lightTheme} >
        <div className={this.state.lightTheme ? 'List-lt':'List-dt'}>
          <ThemeButton lightTheme={this.state.lightTheme} changeTheme={this.handleChangeTheme}/>
          <Header />
          {this.state.release ? 
          <PopUp 
          handleClosePopUp={this.handleClosePopUp} 
          data={this.state.release}/>: null}
          {this.state.movieList.map(item => {
            return <ListItem item={item} key={item.id} handleShow={this.handleShow}/>
          })}
          <Pagination 
          currentPage={this.state.currentPage} 
          fetchAndSaveData={this.fetchAndSaveData}
          totalPages={this.state.totalPages}/>
        </div>
      </ThemeContextProvider>   
    );
  }
}


