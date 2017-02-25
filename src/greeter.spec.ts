import { Greeter } from './greeter';

describe('Greeter', () => {
    it('should greet', () => {
        const greeter = new Greeter('Juri');
        const spy = jest.spyOn(console, 'log');

        greeter.greet();

        expect(spy).toHaveBeenCalled();
    });
});
