
class Api {
  constructor() {
    this.url = 'https://www.thecocktaildb.com/api/json/v1/1/';
  }

  async fetchCocktail(link) {
    const res = await fetch(link)
    try {
      const data = await res.json()
      return data;
    } catch {
      console.log('Item not found')
      return {drinks: []}
    }
    
  }

}

export default new Api();
