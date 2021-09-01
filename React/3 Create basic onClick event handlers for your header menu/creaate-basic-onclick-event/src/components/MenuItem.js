
import "./Menu.css"

function MenuItem({title, link}) {
  const handleClick = (evt) => {
    evt.preventDefault()
    window.open(link, '_blank').focus();
    console.log(title)
    return
  }
  if(!link) {
    return <div className={'MenuItem'} onClick={() => alert('This page is under construction yet')}>{title}</div>
  }
  return <a href={link} className={'MenuItem'} onClick={handleClick}>{title}</a>
}

export default MenuItem;
