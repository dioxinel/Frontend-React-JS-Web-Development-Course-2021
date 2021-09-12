
import { PersonalSuggest } from './PersonalSuggest.js';


export const HomePage = () => {
  return (
    <div>
      <h3>{'Для вибору коктейлю скористайтесь пошуком або фільтром'}</h3>
      <PersonalSuggest />
    </div>
  );
}

