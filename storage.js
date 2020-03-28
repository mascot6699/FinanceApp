import { AsyncStorage } from 'react-native'

export async function setUser(value){
    await AsyncStorage.setItem("user",JSON.stringify(value));
}

export async function setPass(value){
    await AsyncStorage.setItem("pass",JSON.stringify(value));
}

export async function setPres(value){
    await AsyncStorage.setItem("presentation",JSON.stringify(value));
}

export async function setLang(value){
    await AsyncStorage.setItem("lang",JSON.stringify(value));
}

export async function getLang(){
    const result =  await AsyncStorage.getItem("lang");
    return result ? JSON.parse(result) : null
}

export async function getUserInfo(){
    const result =  await AsyncStorage.getItem("user");
    return result ? JSON.parse(result) : null
}

export async function getPass(){
    const result =  await AsyncStorage.getItem("pass");
    return result ? JSON.parse(result) : null
}

export async function signOut(){
    await AsyncStorage.removeItem("user")
}

export async function setToken(value){
    await AsyncStorage.setItem("token",value);
}

export async function getToken(){
    const result = await AsyncStorage.getItem("token"); 
    return result ? result : "";
}

export async function setUserCredentials(encid, realhash){
    await AsyncStorage.setItem("encid",encid);
    await AsyncStorage.setItem("realhash",realhash);
}

export async function getStorageItem(name){
    const result = await AsyncStorage.getItem(name); 
    return result ? result : "";
}
 