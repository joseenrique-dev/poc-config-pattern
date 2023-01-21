import { expect } from "chai";
import "mocha";
import ConfigRoot from './rootConfig';
import SinglentonGeneralConfiguration from '../singlenton/singlenton.config';

debugger
describe("My Pattern config", () => {
    context('Test Config Root', () => {
        let config = new ConfigRoot();
        it("get DB Host", () => {
            expect(config.bdObj._dbHost).to.equal('101.123.43');
        });        
    });

    context('Test Singlenton', () => {
        let config:SinglentonGeneralConfiguration;

        before(() => {
            config = SinglentonGeneralConfiguration.getInstance();
        });

        it('Get common configuration', () => {
            
            expect(config.configurations._appUrl).to.equal('http://someUrl.test');
            expect(config.configurations._dbHost).to.equal('mainConection:43.453.343.33');
        });
        it('Get DB configuration', () => {
            
            expect(config.configurations.bdObj._dbHost).to.equal('101.123.43');
            expect(config.configurations.bdObj._dbPort).to.equal('4040');
        });

        it('Get PayPal configuration', () => {
            
            expect(config.configurations.payPalObj._paypalUrl).to.equal('http://paypal.com');
            expect(config.configurations.payPalObj._paypalUser).to.equal('paypalUser');
        });
    });
});