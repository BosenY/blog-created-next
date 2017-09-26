import { action, computed, observable } from 'mobx'
let store = null
class CountStore {
    @observable count = 0
    @observable list = []
    constructor(isServer, count) {
        this.count = count
    }
    @computed
    get aaa() {
        return this.count * this.count
    }
    @action AddCount = () => {
        this.count++
    }
    @action ReduceCount = () => {
        this.count--
    }

}
export function initStore (isServer, count = 0) {
  if (isServer && typeof window === 'undefined') {
    return new CountStore(isServer, count)
  } else {
    if (store === null) {
      store = new CountStore(isServer, count)
    }
    return store
  }
}