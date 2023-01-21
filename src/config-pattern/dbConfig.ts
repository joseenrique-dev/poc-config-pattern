export default class DBConfig {
    public _dbHost: string;
    public _dbPort: string;

    constructor() {
        this._dbHost = '101.123.43';
        this._dbPort = '4040';
    }

    get dbHost(){
        return this._dbHost;
    }
  }