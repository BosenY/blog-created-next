import {observable, computed, action, autorun} from 'mobx'

class CountStore {

    @observable count = 1
    @observable list = []
    constructor(count = 11) {
        this.count = count
        this.test()
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
    @action PushAXXX = (xxx) => {
        this
            .list
            .push(xxx)
    }
    @action DeleteXXX = (index) => {
        this
            .list
            .splice(index, 1)
    }

    test = () => {
        autorun(() => {
            if (this.list.length > 0)
                console.log(this.list.length)
        })
    }

}

export default new CountStore()