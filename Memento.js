/* Memento.js */

export class Memento {
   setState(key,data,callback=()=>{}){
      if (!key) return;
      const saveData = {};
      saveData[key] = data;
      chrome.storage && chrome.storage.local.set(
          saveData, 
          callback
      );
   }
 
   getState(key,callback=()=>{}){
      if (!key) return;
      chrome.storage && chrome.storage.local.get(
          key, 
          function(result){
              callback(result[key])
          }
      );
   }
}