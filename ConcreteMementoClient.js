/* ConcreteMementoClient.js */

import {VirtualMementoClient} from './VirtualMementoClient';

export class ConcreteMementoClient extends VirtualMementoClient{
    constructor(props){
        super(props);
        this.load();
    }

    userDidAction(){
        // Do stuff...
        
        const state = this.state; // get the state
        this.setState(state,this.save);
    }
}.