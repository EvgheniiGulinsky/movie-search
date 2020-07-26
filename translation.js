import {searchForm, request} from "./index.js"

async function translate(query, callback){
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200519T091800Z.4bd3e4c086e7f946.6afb08d9b0037fdcacf5fa3da9cc54a08111eb25&text=${query}&lang=ru-en`;
    await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        console.log(data)
        searchForm.value = data.text[0]
    })
    callback(`https://www.omdbapi.com/?apikey=107b2873&s=${searchForm.value}`)}
    export {translate}