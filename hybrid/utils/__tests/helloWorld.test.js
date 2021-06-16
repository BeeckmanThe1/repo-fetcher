import {getHelloValue} from '../helloWord.util';

describe('Hello world util', () => {
    describe('WHEN I pass nothing', () => {
        test('THEN I expect a simple Hello as retur', () => {
            const result = getHelloValue();
            expect(result).toBe('Hello');
        });
    });
    describe('WHEN I pass a valid string value', () => {
        test('THEN I expect to be greeted correctly', () => {
            const result = getHelloValue('Lord Voldemort');
            expect(result).toBe('Hello, Lord Voldemort');
        });
    });
});
