const hiragana = [
    // あ 行
    { kana: "あ", romaji: "a", sound: "a" },
    { kana: "い", romaji: "i", sound: "i" },
    { kana: "う", romaji: "u", sound: "u" },
    { kana: "え", romaji: "e", sound: "e" },
    { kana: "お", romaji: "o", sound: "o" },

    // か 行
    { kana: "か", romaji: "ka", sound: "ka" },
    { kana: "き", romaji: "ki", sound: "ki" },
    { kana: "く", romaji: "ku", sound: "ku" },
    { kana: "け", romaji: "ke", sound: "ke" },
    { kana: "こ", romaji: "ko", sound: "ko" },

    // さ 行
    { kana: "さ", romaji: "sa", sound: "sa" },
    { kana: "し", romaji: "shi", sound: "shi" },
    { kana: "す", romaji: "su", sound: "su" },
    { kana: "せ", romaji: "se", sound: "se" },
    { kana: "そ", romaji: "so", sound: "so" },

    // た 行
    { kana: "た", romaji: "ta", sound: "ta" },
    { kana: "ち", romaji: "chi", sound: "chi" },
    { kana: "つ", romaji: "tsu", sound: "tsu" },
    { kana: "て", romaji: "te", sound: "te" },
    { kana: "と", romaji: "to", sound: "to" },

    // な 行
    { kana: "な", romaji: "na", sound: "na" },
    { kana: "に", romaji: "ni", sound: "ni" },
    { kana: "ぬ", romaji: "nu", sound: "nu" },
    { kana: "ね", romaji: "ne", sound: "ne" },
    { kana: "の", romaji: "no", sound: "no" },

    // は 行
    { kana: "は", romaji: "ha", sound: "ha" },
    { kana: "ひ", romaji: "hi", sound: "hi" },
    { kana: "ふ", romaji: "fu", sound: "fu" },
    { kana: "へ", romaji: "he", sound: "he" },
    { kana: "ほ", romaji: "ho", sound: "ho" },

    // ま 行
    { kana: "ま", romaji: "ma", sound: "ma" },
    { kana: "み", romaji: "mi", sound: "mi" },
    { kana: "む", romaji: "mu", sound: "mu" },
    { kana: "め", romaji: "me", sound: "me" },
    { kana: "も", romaji: "mo", sound: "mo" },

    // や 行
    { kana: "や", romaji: "ya", sound: "ya" },
    { kana: "ゆ", romaji: "yu", sound: "yu" },
    { kana: "よ", romaji: "yo", sound: "yo" },

    // ら 行
    { kana: "ら", romaji: "ra", sound: "ra" },
    { kana: "り", romaji: "ri", sound: "ri" },
    { kana: "る", romaji: "ru", sound: "ru" },
    { kana: "れ", romaji: "re", sound: "re" },
    { kana: "ろ", romaji: "ro", sound: "ro" },

    // わ 行
    { kana: "わ", romaji: "wa", sound: "wa" },
    { kana: "を", romaji: "wo", sound: "wo" },

    // ん
    { kana: "ん", romaji: "n", sound: "n" }
];
const katakana = [
    // ア 行
    { kana: "ア", romaji: "a", sound: "a" },
    { kana: "イ", romaji: "i", sound: "i" },
    { kana: "ウ", romaji: "u", sound: "u" },
    { kana: "エ", romaji: "e", sound: "e" },
    { kana: "オ", romaji: "o", sound: "o" },

    // カ 行
    { kana: "カ", romaji: "ka", sound: "ka" },
    { kana: "キ", romaji: "ki", sound: "ki" },
    { kana: "ク", romaji: "ku", sound: "ku" },
    { kana: "ケ", romaji: "ke", sound: "ke" },
    { kana: "コ", romaji: "ko", sound: "ko" },

    // サ 行
    { kana: "サ", romaji: "sa", sound: "sa" },
    { kana: "シ", romaji: "shi", sound: "shi" },
    { kana: "ス", romaji: "su", sound: "su" },
    { kana: "セ", romaji: "se", sound: "se" },
    { kana: "ソ", romaji: "so", sound: "so" },

    // タ 行
    { kana: "タ", romaji: "ta", sound: "ta" },
    { kana: "チ", romaji: "chi", sound: "chi" },
    { kana: "ツ", romaji: "tsu", sound: "tsu" },
    { kana: "テ", romaji: "te", sound: "te" },
    { kana: "ト", romaji: "to", sound: "to" },

    // ナ 行
    { kana: "ナ", romaji: "na", sound: "na" },
    { kana: "ニ", romaji: "ni", sound: "ni" },
    { kana: "ヌ", romaji: "nu", sound: "nu" },
    { kana: "ネ", romaji: "ne", sound: "ne" },
    { kana: "ノ", romaji: "no", sound: "no" },

    // ハ 行
    { kana: "ハ", romaji: "ha", sound: "ha" },
    { kana: "ヒ", romaji: "hi", sound: "hi" },
    { kana: "フ", romaji: "fu", sound: "fu" },
    { kana: "ヘ", romaji: "he", sound: "he" },
    { kana: "ホ", romaji: "ho", sound: "ho" },

    // マ 行
    { kana: "マ", romaji: "ma", sound: "ma" },
    { kana: "ミ", romaji: "mi", sound: "mi" },
    { kana: "ム", romaji: "mu", sound: "mu" },
    { kana: "メ", romaji: "me", sound: "me" },
    { kana: "モ", romaji: "mo", sound: "mo" },

    // ヤ 行
    { kana: "ヤ", romaji: "ya", sound: "ya" },
    { kana: "ユ", romaji: "yu", sound: "yu" },
    { kana: "ヨ", romaji: "yo", sound: "yo" },

    // ラ 行
    { kana: "ラ", romaji: "ra", sound: "ra" },
    { kana: "リ", romaji: "ri", sound: "ri" },
    { kana: "ル", romaji: "ru", sound: "ru" },
    { kana: "レ", romaji: "re", sound: "re" },
    { kana: "ロ", romaji: "ro", sound: "ro" },

    // ワ 行
    { kana: "ワ", romaji: "wa", sound: "wa" },
    { kana: "ヲ", romaji: "wo", sound: "wo" },

    // ン
    { kana: "ン", romaji: "n", sound: "n" }
];

const out = document.getElementById("output");

hiragana.forEach((k, index) => {

    out.innerHTML += `
  <div class="kana__card-block">
           <h3 class="ieroglyph">${k.kana}</h3>
          <span>[${k.romaji}]</span>
          <button onclick="playKana('${k.kana}')">▶️</button>
      </div>
     `;

});


function playKana(symbol) {
    const utterance = new SpeechSynthesisUtterance(symbol);
    utterance.lang = "ja-JP"; // японская озвучка
    speechSynthesis.speak(utterance);
}