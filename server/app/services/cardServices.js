const SYMBOLS_MAPPING = [{symbol: 'diamonds', color: 'red'}, {symbol: 'hearts', color: 'red'},
    {symbol: 'spades', color: 'black'}, {symbol: 'clubs', color: 'black'}];
const VALUES_MAPPING = [{value: '7', rank: 1} , {value: '8', rank: 2}, {value: '9', rank: 3}, {value: '10', rank: 4},
    {value: 'J', rank: 5}, {value: 'Q', rank: 6}, {value: 'K', rank: 7}, {value: 'A', rank: 8}];

/**
 * This function returns a new card stack containing 32 cards.
 *
 * @returns {[]} a new card stack with 32 cards
 */
exports.getNewCardStack = () => {
    let cardStack = []
    for (let symbolObject of SYMBOLS_MAPPING) {
        for (let valueObject of VALUES_MAPPING) {
            cardStack.push({symbol: symbolObject.symbol, value: valueObject.value});
        }
    }
    return cardStack;
}

exports.getCardFromStack = (cardStack) => {
    return card
}

exports.compareValue = (firstCard, secondCard) => {
    try{
        if (mapValueToRank(firstCard.value) > mapValueToRank(secondCard.value)){
            return "firstHigher";
        } else if (mapValueToRank(firstCard.value) === mapValueToRank(secondCard.value)) {
            return "equal";
        } else if (mapValueToRank(firstCard.value) < mapValueToRank(secondCard.value)){
            return "secondHigher";
        } else{
            throw "Unknown card object error";
        }
    } catch (e) {
        throw e;
    }
}

// This method takes a card value and returns the rank of the value
function mapValueToRank(value) {
    for (let mappingObject of VALUES_MAPPING) {
        if (mappingObject.value === value) {
            return mappingObject.rank;
        }
    }
    throw "Invalid card value error";
}