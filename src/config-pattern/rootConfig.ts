import DBConfig from './dbConfig';
import PaypalConfig from './payPalConfig';

export default class ConfigRoot {
    public _appUrl: string;
    public _dbHost: string;
    public payPalObj: PaypalConfig;
    public bdObj: DBConfig;

    constructor() {
        this._appUrl = 'http://someUrl.test';
        this._dbHost = 'mainConection:43.453.343.33';
        this.payPalObj = new PaypalConfig();
        this.bdObj = new DBConfig();
    }
  }