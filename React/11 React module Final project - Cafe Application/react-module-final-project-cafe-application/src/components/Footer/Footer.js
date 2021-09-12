import { Letter } from "./Letter";

export function Footer() {

  
  return (
    <div className={'header'}>
      {'abcdefghijklmnopqrstuvwxyz'.split('').map(item => 
        (<Letter letter={item} key={item} />))}
    </div>
  );
}

