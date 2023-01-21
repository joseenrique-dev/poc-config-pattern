export default class PaypalConfig {
    public _paypalUrl: string;
    public _paypalUser: string;

      constructor() {
          this._paypalUrl = 'http://paypal.com';
          this._paypalUser = 'paypalUser';
      }
    get paypalUrl(){
      return this._paypalUrl;
    }
  }