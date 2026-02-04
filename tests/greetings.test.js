let consoleSpy;

beforeEach(() => {
    consoleSpy = jest.spyOn(console,'log').mockImplementation();
});

afterEach(() => {
    consoleSpy.mockRestore();
});

test('should log and return "Hello world!"', () => {
    // Arrange
    const expected = 'Hello world!';
    
    // Re-require pour réexécuter l'IIFE
    jest.isolateModules(() => {
        const result = require('./../src/main');
        
        // Assert
        expect(result).toBe(expected);
        expect(consoleSpy).toHaveBeenCalledWith(expected);
    });
});