import DBConfig from './dbConfig';
import PaypalConfig from './payPalConfig';

export default class ConfigRoot {
    public _appUrl: string;
    public generalVariable2: string;
    public payPalObj: PaypalConfig;
    public bdObj: DBConfig;

    constructor() {
        this.generalVariable1 = '...';
        this.generalVariable2 = '...';
        this.payPalObj = new PaypalConfig();
        this.bdObj = new DBConfig();
    }
  }