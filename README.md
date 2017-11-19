# kakasijs v1.1.0


[Twiiter](https://twitter.com/bakabird2) | [Mail](bakabird.yw@gmail.com) | [GitHub](https://github.com/bakabird/kakasijs)

🔆 A nodejs wrapper for [KaKaSi](http://kakasi.namazu.org/index.html.ja)

**⚠️ Bash-Shell-Using & Nodejs-Only**

* you should install kakasi first
* you could not use it on browser



## Usage

1. Transform japanese sentence between different format(kana,kanji,romajin) 
2. Mark pronunciation to kanji
3. Word Segmentation *( Need More Test )*
```javascript
const kakasi = require("kakasi");

(async()=>{
	const sentence =  "夢はジュエル　誰もひとつずつ　胸に抱きしめて";
	const senArr   =  ["夢はジュエル","誰もひとつずつ","胸に抱きしめて"]
    
	// -1.Transform->  
	let convertResult = await kakasi.toHira(sentence);
	console.log(convertResult.result)
	//  ゆめはじゅえる　だれもひとつずつ　むねにだきしめて

	// -2.Mark->
	let markResult = await kakasi.markKana(senArr);
	console.log(markResult.result)
	//  夢(ゆめ)はジュエル　誰も(だれも)ひとつずつ　胸(むね)に抱き(だき)しめて
  
	// -3.Separate-> 
	let sepResult = await kakasi.separate(senArr);
	console.log(sepResult.result)
	//  夢 は ジュエル 誰 もひとつずつ 胸 に 抱 きしめて
  
})()
```



## Installation

0️⃣ Install kakasi

```
$ curl http://kakasi.namazu.org/stable/kakasi-2.3.6.tar.gz > kakasi-2.3.6.tar.gz
$ gzip -dc kakasi-2.3.6.tar.gz | tar xvf -
$ cd kakasi-2.3.6
$ ./configure
$ make
$ su
# make install
```

1️⃣ Make sure that kakasi is installed succeed

```
$ kakasi -h
```

2️⃣ Install kakasijs to your project

```
$ npm install kakasijs
```



## API

### Struct

```typescript
// -0. Struct -> //
type Input = string | Array<string>
interface Result {
   result: string;
   from: string;
   to: string;
}

interface To{
   (sentence: Input) : Promise<Result>
}
interface Mark{
   (sentence: Input, leftEdge: string, rightEdge:string, separate:boolean = false) : Promise<Result>
}
interface Separate{
   (sentence :Input, separateChar :string = " "): Promise<Result>;
}
```

### List

```typescript
//-1. Transform -> //
// convert all to * 
toRoma :To
toHira :To
toKata :To
// convert kanji to * 
kanjitoRoma :To
kanjitoKata :To
kanjitoHira :To
// convert kana to * 
kanaToRoma :To
kanaToHira :To
kanaToKata :To
// convert hira to * 
hiraToRoma :To
hiraToKata :To
// convert kata to * 
kataToroma :To
kataTohira :To

// -2. Mark -> //
markKana :Mark
markKata :Mark

// -3. Separate -> //
separate :Separate

```



### Transform

```javascript
const kakasi = require("kakasi");

(async() => {
    let result = await kakasi.toHira("夢はジュエル　誰もひとつずつ　胸に抱きしめて")
    console.info(result);
})()

// TransformResult {
//   result: 'ゆめはじゅえる　だれもひとつずつ　むねにだきしめて',
//   from: 'all',
//   to: 'hira',
//   event: 'transform' }

```


### Mark

```javascript
const kakasi = require("kakasi");

(async() => {
    let result = await kakasi.markKana("夢はジュエル　誰もひとつずつ　胸に抱きしめて")
    console.info(result);
})()

// MarkResult {
//   result: '夢(ゆめ)はジュエル　誰も(だれも)ひとつずつ　胸(むね)に抱き(だき)しめて',
//   from: 'kanji',
//   to: 'kata',
//   event: 'mark,(,)', }

(async() => {
    let result = await kakasi.markKata("夢はジュエル　誰もひとつずつ　胸に抱きしめて",'[',']',true)
    console.info(result);
})()

// MarkResult {
//   result: '夢[ユメ] は ジュエル 誰も[ダレモ] ひとつずつ 胸[ムネ] に 抱き[ダキ] しめて',
//   from: 'kanji',
//   to: 'kata',
//   event: 'mark,[,], ', }

```

### Separate

```javascript
const kakasi = require("kakasi");

(async() => {
    let result = await kakasi.separate("夢はジュエル　誰もひとつずつ　胸に抱きしめて")
    console.info(result);
})()

// SeparateResult {
//   result: '夢 は ジュエル 誰 もひとつずつ 胸 に 抱 きしめて',
//   from: 'kanji',
//   to: 'k a n j i',
//   event: 'separate, ', }

(async() => {
    let result = await kakasi.separate(["夢はジュエル","誰もひとつずつ","胸に抱きしめて"],'_')
    console.info(result);
})()

// SeparateResult {
//   result: '夢_は_ジュエル 誰_もひとつずつ 胸_に_抱_きしめて',
//   from: 'kanji',
//   to: 'k_a_n_j_i',
//   event: 'separate,_', }

```



## Knowledge

Just **skip** this section if you already know abot kanji,kana,hiragana,katakana and romajin.



#### [kanji](https://en.wikipedia.org/wiki/Kanji)

Kanji ,or kan'ji, are the adopted logographic Chinese characters that are used in the modern Japanese writing system along with *hiragana* and *katakana*. 

e.g

>夢はジュエル  -only the kanji-> 夢
>
>誰もひとつずつ  -only the kanji-> 誰



### [roma(Roman alphabet) <=> Latin alphabet]((https://en.wikipedia.org/wiki/Latin_alphabet))

Mainly as *Japanese* , *Korean* pronunciation notes, similar to the English phonetic symbols.

e.g

>夢はジュエル -marked with roma -> 夢(yu me)は(wa)ジュエル(ji yu e ru)



###  [kana](https://en.wikipedia.org/wiki/Kana) & [hira(hiragana)](https://en.wikipedia.org/wiki/Hiragana) & [kata(katakana)](https://en.wikipedia.org/wiki/Katakana)

Kana (仮名) are syllabic Japanese scripts, a part of the Japanese writing system contrasted with the logographic Chinese characters known in Japan as kanji (漢字). 

There are three kana scripts: modern cursive hiragana (ひらがな), formerly known as a women's script; modern angular katakana (カタカナ); and the old syllabic use of kanji known as man’yōgana (万葉仮名) that was ancestral to both. Hentaigana (変体仮名, "variant kana") are historical variants of modern standard hiragana. 

In modern Japanese, hiragana and katakana have directly corresponding character sets (different sets of characters representing the same sounds).

e.g

>\#kana#
>
>夢はジュエル  -only the kana-> はジュエル
>
>誰もひとつずつ  -only the kana-> もひとつずつ
>
>\#hiragana#
>
>夢はジュエル  -only the hira-> は
>
>誰もひとつずつ  -only the hria-> もひとつずつ
>
>\#katakana#
>
>夢はジュエル  -only the kata-> ジュエル
>
>誰もひとつずつ  -only the kata-> NO_KATA_HERE



## Coming next

0. a tips that remind developer to install kakasi first.
1. remove exec();
2. connect to the author of kakasi for further impored