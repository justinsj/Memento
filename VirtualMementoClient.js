/* VirtualMementoClient.js */
import React from 'react';
import {Memento} from './Memento';

export class VirtualMementoClient extends React.Component {
    save(callback=()=>{}){
        const saveData = this.getSaveData();
        
        // Call an external storage implementation
        const key = this.getKey();.
        this.memento = new Memento();
        this.memento.setState(key,saveData);
    }
    load(callback=null){
        //Set the callback to this.onLoadComplete for default
        callback = callback ? callback : this.onLoadComplete;
        if (!this.memento){this.memento = new Memento();}        
        
        // Call an external load implementation
        const key = this.getKey();
        this.memento.getState(key,(data)=>{
            data = data ? data : {}; // Set default data to {}
            this.loadSaveData(data, callback);
        });
    }
    onLoadComplete(){} // Virtual function
}