/**
 * Created by Sunday on 20/10/14.
 */
//var RootUrl = 'http://sandbox.liwushuo.com';
var RootUrl = 'http://127.0.0.1:8080';
var AppUrl = 'http://localhost:8888/dashboard2.1';

var Server = {
    login: RootUrl + '/account/login',
    logout: RootUrl + '/account/logout',
    userInfo: RootUrl + '/users/me',

    /*******************求礼物*****************************/
    allList: RootUrl + '/mygifts',
    sponsor: RootUrl + '/sponsor'
}