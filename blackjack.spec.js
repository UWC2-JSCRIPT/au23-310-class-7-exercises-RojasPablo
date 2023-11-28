describe('Tests for the BlackJack Game', () => {
    it('should calculate the score of hand ', () => {
        const hand = [
            {displayVal: 'six', val: 6, suit: 'hearts'},
            {displayVal: 'seven', val: 7, suit: 'hearts'}
        ]
        const result = calcPoints(hand)

        expect(result.total).toEqual(13);
        expect(result.isSoft).toEqual(false);
    });
});

describe("Tests if no aces are present in hand", () => {
  it('should return false if no ace is present', () => {
    const hand = [
      { displayVal: 'six', val: 6, suit: 'hearts' }
    ];
    const hasAce = hand.every(card => card.displayVal === 'Ace');
    expect(hasAce).toBe(false);
  });
});

describe("Tests if an ace is soft", () => {
  it('should return true if ace is soft', () => {
    const hand = [
      { displayVal: 'nine', val: 9, suit: 'hearts' },
      { displayVal: 'Ace', val: 11, suit: 'hearts' }
    ];
    const isSoft = calcPoints(hand).isSoft;
    expect(isSoft).toBe(true);
  });
});

describe("Tests if an ace is hard", () => {
  it('should return false if ace is not soft', () => {
    const hand = [
      { displayVal: 'nine', val: 9, suit: 'hearts' },
      { displayVal: 'nine', val: 9, suit: 'hearts' },
      { displayVal: 'Ace', val: 1, suit: 'hearts' }
    ];
    const isSoft = calcPoints(hand).isSoft;
    expect(isSoft).toBe(false);
  });
});

describe("Tests if an ace is hard", () => {
  it('should return false if ace is not soft', () => {
    const hand = [
      { displayVal: 'nine', val: 9, suit: 'hearts' },
      { displayVal: 'nine', val: 9, suit: 'hearts' },
      { displayVal: 'Ace', val: 1, suit: 'hearts' }
    ];
    const isSoft = calcPoints(hand).isSoft;
    expect(isSoft).toBe(false);
  });
});

describe("Tests for multiple ace case being soft", () => {
  it('should return true if both ace are soft', () => {
    const hand = [
      { displayVal: 'Ace', val: 11, suit: 'hearts' },
      { displayVal: 'Ace', val: 11, suit: 'hearts' }
    ];
    const isSoft = calcPoints(hand).isSoft;
    expect(isSoft).toBe(true);
  });
});

describe("Tests for multiple ace case being hard", () => {
  it('should return false if both ace are soft', () => {
    const hand = [
      { displayVal: 'nine', val: 9, suit: 'hearts' },  
      { displayVal: 'nine', val: 9, suit: 'spades' },
      { displayVal: 'Ace', val: 1, suit: 'hearts' },
      { displayVal: 'Ace', val: 1, suit: 'spades' }
    ];
    const isSoft = calcPoints(hand).isSoft;
    expect(isSoft).toBe(false);
  });
});