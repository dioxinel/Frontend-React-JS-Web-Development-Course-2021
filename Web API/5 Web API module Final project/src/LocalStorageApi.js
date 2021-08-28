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
      return item.id !== id+'';
    })
    window.localStorage.setItem('savedList', JSON.stringify(newSavedList))
    this.savedList = newSavedList;
  }

  isSaved(id) {
    return this.savedList.find(item => {
      return item.id === id + '';
    })
  }
  
}

export default new LocalStorageApi();
