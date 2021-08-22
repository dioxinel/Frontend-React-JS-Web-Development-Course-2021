function printSeasonByMonth(month) {
  switch (month) {
    case ('DECEMBER'):
      console.log('winter');
      break;
    case ('JANUARY'):
      console.log('winter');
      break;
    case ('FEBRUARY'):
      console.log('winter');
      break;
    case ('MARCH'):
      console.log('spring');
      break;
    case ('APRIL'):
      console.log('spring');
      break;
    case ('MAY'):
      console.log('spring');
      break;
    case ('JUNE'):
      console.log('summer');
      break;
    case ('JULY'):
      console.log('summer');
      break;
    case ('AUGUST'):
      console.log('summer');
      break;
    case ('SEPTEMBER'):
      console.log('autumn');
      break;
    case ('OCTOBER'):
      console.log('autumn');
      break;
    case ('NOVEMBER'):
      console.log('autumn');
      break;
    default:
      console.log("It's not a month");
  }
 }
  
 printSeasonByMonth("SEPTEMBER");
 printSeasonByMonth("NOVEMBER");
 printSeasonByMonth("JULY");
 printSeasonByMonth("APRIL");