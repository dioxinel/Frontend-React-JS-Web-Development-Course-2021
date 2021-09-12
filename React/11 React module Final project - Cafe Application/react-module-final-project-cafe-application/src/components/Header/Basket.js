import { useContext, useState } from "react";
import { BasketContext } from "../../App";
import { UniversalModal } from "../../UniversalModal";
import Icon from "../Icon";
import './Header.css'
import { ModalContent } from "./ModalContent";

export function Basket() {
  const [isOpen, setOpen] = useState(false)
  const {basket, setBasket} = useContext(BasketContext)

  const handleClick = () => {
    if(!basket.length) {
      return alert('Спочатку оберіть коктейль')
    }
    setOpen(true) 
  }

  const handleSubmit = () => {
    console.log(basket)
    setOpen(false)
    setBasket([])  
  }
  
  return (
    <>
    <div className={'basket'} onClick={handleClick}>
      <Icon name={'basket'} width={'30px'} height={'30px'}/>
      <div className={'numOfSavedCocktails'}>{basket.length <= 99? basket.length : '99+'}</div>
    </div>
    <UniversalModal 
        isOpen={isOpen} 
        closeModalWindow={() => {
          setOpen(false)
          }}
        submitModalWindow={handleSubmit}
        Content={ModalContent}
        />
    </>
  );
}