import API from './API';


export default class Game {

	constructor(){
		this.api = new API();
		this.word = this.api.getWord();
		let ana = this.api.getAnagrams(this.word);
		ana.sort( (a,b) => {return a.length === b.length ? a > b : b.length-a.length});	
		this.anagrams = ana;
	}

	getWord() {
		return this.word;
	}

	getAnagrams() {
		return this.anagrams;
	}

	isAnagram(word) {
		return this.anagrams.includes(word);
	}

	getScramble() {
		return this.word.split('').sort(function() { return 0.5 - Math.random() });
	}


}


