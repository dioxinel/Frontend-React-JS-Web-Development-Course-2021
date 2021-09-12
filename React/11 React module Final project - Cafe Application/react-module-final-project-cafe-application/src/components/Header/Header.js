import Icon from "../Icon";
import { Link } from "react-router-dom";
import { SearchForm } from "./SearchForm";
import './Header.css'
import { Basket } from "./Basket";
export function Header() {

  
  return (
    <div className={'header'}>
      <div className={'headContainer'}>
        <Link to={'/'}>
          <Icon name={'logo'} width={'30px'} height={'30px'}/>
        </Link>
        <SearchForm />
      </div>
      <Basket />   
    </div>
  );
}

