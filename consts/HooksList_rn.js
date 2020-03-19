'use strict';

import consts from "./../../tools/client/hooks/consts"
// import { AsyncStorage } from 'react-native';

 class HooksList {

    constructor(hooksRepository) {

        this.hooksRepository = hooksRepository;
        console.log("addHooks rn")


    }

    addHooks() {

        console.log("addHooks rn")

        this.hooksRepository.addHook(consts.AUTH, consts.HOOK__BEFORE_LOGIN, this.beforeLogin);
        this.hooksRepository.addHook(consts.AUTH, consts.HOOK__AFTER_LOGIN, this.afterLogin);
        this.hooksRepository.addFilterHook(consts.AUTH, consts.FILTER_HOOK__FETCH_URL, this.filterHookUrlTry);
        this.hooksRepository.addFilterHook(consts.AUTH, consts.FILTER_HOOK__FETCH_URL, this.filterHookUrl);
    }

    filterHookUrl(url) {
        if (url) {
            url = "pumba.carmel6000.com" + url
        }
        console.log("url after1", url)
        return url

    }
    filterHookUrlTry(url) {
        console.log("urlnnnn",url)
        url =  "https://"+ url

        console.log("url after2", url)
        return url;

    }

    async afterLogin(res) {

        console.log("hhh auth afterLogin rn",res)
        // await AsyncStorage.setItem('klo', res.klo);
        // await AsyncStorage.setItem('kl', res.kl);
        // await AsyncStorage.setItem('kloo', res.kloo);
        // await AsyncStorage.setItem('klk', res.klk);
        // await AsyncStorage.setItem('access_token', res.id);



    }
    beforeLogin() {
        console.log("hhh auth beforeLogin")

    }
}
export default HooksList;
