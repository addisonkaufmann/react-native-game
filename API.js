import dict from './dict.json';
import anagrams from './anagrams_by_len.json';

export default class API {
	constructor(){
		console.log("created API instance");
		this.dict = dict;
		this.anagramCount = 30;
		this.anagramDict = anagrams[this.anagramCount];
	}

	getWord(){
		const keys = Object.keys(this.anagramDict);
		const index = Math.floor(Math.random() * keys.length);  
		const key = keys[index];
		return key;
	}

	getAnagrams(word){
		return this.anagramDict[word];
	}

	isWord(str){
		if (str.length < 3){
			return false;
		}
		return this.dict[str.length].includes(str);
	}

	isAnagram(word){
		return this.anagramDict[word].includes(word);
	}

}


