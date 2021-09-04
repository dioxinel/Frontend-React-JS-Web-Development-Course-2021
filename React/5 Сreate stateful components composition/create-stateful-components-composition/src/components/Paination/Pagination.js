import React from "react";
import { Button } from "./Button";


export class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.handleNextPage = this.handleNextPage.bind(this)
    this.handlePrevPage = this.handlePrevPage.bind(this)
    this.state = { prevBtnDisabled: true, nextBtnDisabled: false }
  }

  handleNextPage() {
    this.props.fetchAndSaveData(this.props.currentPage + 1)
    this.setState({...this.state, prevBtnDisabled: false})
    if(this.props.currentPage + 1 >= this.props.totalPages) {
      this.setState({...this.state, nextBtnDisabled: true})
    }  
  }

  handlePrevPage() {
    this.props.fetchAndSaveData(this.props.currentPage - 1)
    this.setState({...this.state, nextBtnDisabled: false})
    if (this.props.currentPage - 1 <= 1) {
      this.setState({...this.state, prevBtnDisabled: true})
    }
  }

  render() {
    return (
      <div className={"pagination"}>
        <Button text={"Previous page"} handler={this.handlePrevPage} disabled={this.state.prevBtnDisabled} />
        <Button text={"Next page"} handler={this.handleNextPage} disabled={this.state.nextBtnDisabled}/>
      </div>
    );
  }
}


