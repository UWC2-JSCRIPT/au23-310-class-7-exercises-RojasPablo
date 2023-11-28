describe("tests for the soccer game", () => {
    describe("tests for the getTotalPoints function", () => {
        it('should return an accurate total for a string input', () => {
            const result = getTotalPoints('wwdlw')
            expect(result).toEqual(10);
        })
    })
})

describe("Tests for order teams function", () => {
    it ('should return team name followed by their total points', () => {
        const result = orderTeams({name:'Seahawks', results: 'wwdlw'});
        expect(result).toEqual('Seahawks: 10');
    })
})