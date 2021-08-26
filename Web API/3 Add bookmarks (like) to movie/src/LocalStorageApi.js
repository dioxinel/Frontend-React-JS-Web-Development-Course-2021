class LocalStorageApi {
  constructor() {
    this.savedList = JSON.parse(window.localStorage.getItem('savedList')) ?
     JSON.parse(window.localStorage.getItem('savedList')) : [];
  }
  addItem(item) {
    this.savedList.push(item)
    const newSavedList = this.savedList;
    window.localStorage.setItem('savedList', JSON.stringify(newSavedList))
  }
  removeItem(id) {
    const newSavedList = this.savedList.filter(item => {
      return item !== id;
    })
    window.localStorage.setItem('savedList', JSON.stringify(newSavedList))
    this.savedList = newSavedList;
  }
  
}

export default new LocalStorageApi();
