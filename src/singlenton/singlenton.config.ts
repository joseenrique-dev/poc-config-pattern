import ConfigRoot from '../config-pattern/rootConfig';

export default class SinglentonGeneralConfiguration {
    private static instance: SinglentonGeneralConfiguration;
    private static _configRoot: ConfigRoot;
    
    private constructor(){}

    private static initializeConfiguration(): void {
        this._configRoot = new ConfigRoot();
        //...rest of var/env definitions
    }

    get configurations(): ConfigRoot {
        return SinglentonGeneralConfiguration._configRoot;
    }
    public static getInstance(): SinglentonGeneralConfiguration {
        if( !SinglentonGeneralConfiguration.instance ){
            this.initializeConfiguration();
            SinglentonGeneralConfiguration.instance = new SinglentonGeneralConfiguration();
        }
        return SinglentonGeneralConfiguration.instance
    }
}