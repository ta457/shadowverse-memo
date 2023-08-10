import { forestData } from "./card_data/forest.js"
import { swordData } from "./card_data/sword.js"
import { runeData } from "./card_data/rune.js"
import { dragonData } from "./card_data/dragon.js"
import { shadowData } from "./card_data/shadow.js"
import { bloodData } from "./card_data/blood.js"
import { havenData } from "./card_data/haven.js"
import { portalData } from "./card_data/portal.js"

//card ID rules
//1
//+ card pack ID
//+ class ID (neutral: 0, forest: 1, sword: 2, rune: 3, dragon: 4, 
//   shadow: 5, blood: 6, haven: 7, portal: 8)
//+ rarity (bronze: 1, silver: 2, gold: 3, legendary: 4)
//+ card type (follower: 1, amulet: 3, spell: 4)
//+ 0
//+ number in each card type 
//(e.g. if a pack has 2 bronze followers + 2 bronze spells
//2 followers: 10, 20, 2 spells: 10, 20)

const getCardIDs = (passedClass, passedPackID) => {
  let cards = [];
  if(passedClass === 'forest') {
    forestData.forEach(item => {
      if(item.packID === passedPackID) {
        cards = item.cards;
      }
    });
  }
  if(passedClass === 'sword') {
    swordData.forEach(item => {
      if(item.packID === passedPackID) {
        cards = item.cards;
      }
    });
  }
  if(passedClass === 'rune') {
    runeData.forEach(item => {
      if(item.packID === passedPackID) {
        cards = item.cards;
      }
    });
  }
  if(passedClass === 'dragon') {
    dragonData.forEach(item => {
      if(item.packID === passedPackID) {
        cards = item.cards;
      }
    });
  }
  if(passedClass === 'shadow') {
    shadowData.forEach(item => {
      if(item.packID === passedPackID) {
        cards = item.cards;
      }
    });
  }
  if(passedClass === 'blood') {
    bloodData.forEach(item => {
      if(item.packID === passedPackID) {
        cards = item.cards;
      }
    });
  }
  if(passedClass === 'haven') {
    havenData.forEach(item => {
      if(item.packID === passedPackID) {
        cards = item.cards;
      }
    });
  }
  if(passedClass === 'portal') {
    portalData.forEach(item => {
      if(item.packID === passedPackID) {
        cards = item.cards;
      }
    });
  }
  
  return cards;
}

export { getCardIDs }