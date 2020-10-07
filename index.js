'use strict';

var topArea = document.getElementById('topArea');
var optionArea = document.getElementById('optionArea');
var answerArea = document.getElementById('answerArea');
var suspensionButton = document.getElementById('suspensionButton');
suspensionButton.style.visibility = "hidden";
var jpArea = document.getElementById('japanArea');
var enArea = document.getElementById('englishArea');
var gametextArea = document.getElementById('gametextArea');
var gameText = document.getElementById('gameText');
gametextArea.style.visibility = "hidden";

// Map作成
const JPmap = new Map([]);
const ENmap = new Map([]);

function dailyConversation() {
  var jpArr = [
    'おはようございます', 'こんにちは', 'こんばんは', '調子はどう？', 'あなたに会えて嬉しいです。', 'はじめまして', '久しぶり',
    'さようなら', 'それじゃあまた', '気をつけてね', 'すみません', '元気です。', 'あなたの名前は？', '聞いてもいい？', 'どこから来たの？', 'どこに住んでるの？',
    '週末の予定はあるの？', 'この週末は何をしてた？', 'ここにどれくらいいるの？', '今までに日本に行ったことはありますか？', '何歳なの？',
    '質問してもいい？', 'もう一度説明してもらえませんか？', 'もう一度言ってくれませんか?', 'これは正しいですか？', '理解しましたか？', '聞いてくれてありがとうございました。',
    'あなたはどう？', 'あなたの意見は何？', 'あなたはどう思う？', '何やってるの？', 'いつここにきたの？', 'どこへ行くの？', '何を考えているの？',
    'よくやったね。', '幸運を', 'おやすみなさい', 'お腹がいっぱいです。', '何かできることはありますか？'
  ];
  var enArr = [
    'Good morning', 'Hello', 'Good evening', 'How are you?', 'I am glad to meet you.', 'Nice to meet you.', 'Long time no see.',
    'Good bye.', 'See you later.', 'Take care.', 'Excuse me.', 'I am fine good.', 'What is your name? ', 'Can I ask?', 'Where are you from?', 'Where do you live?',
    'Do you have any plan for this weekend?', 'What did you do this weekend?', 'How long have you been in here?', 'Have you ever been to Japan?', 'How old are you?',
    'Can I ask a question?', 'Could you explain it again?', 'Could you say that again?', 'Is it correct?', 'Do you understand?', 'Thank you for listening.',
    'How about you?', 'What is your opinion?', 'What do you think?', 'What are you doing?', 'When did you come here?', 'Where are you going?', 'What are you thinking about?',
    'Good job.', 'Good luck.', 'Good night.', 'I am full.', 'May I help you?'
  ];
  display(jpArr, enArr);
}

function trip() {
  var jpArr = [
    'このバスは駅まで行きますか？', 'バスは何時に出発しますか？', '降ります。', '駅に着いたら教えていただけますか？', '注文お願いします', 'これをください。',
    '以上です。', '会計お願いします。', 'クレジットカードを使えますか？', 'チェックインお願いします。', '荷物を預かっていただけますか？', '荷物を受け取りたいです。', 'タクシーを呼んでいただけますか？',
    'この辺りでおすすめの観光名所はありませんか？', 'これはいくらですか？', '試着してもいいですか？', '日本から来ました。', 'もう少しゆっくり話してもらえますか？', 'この近くにトイレはありますか？',
    'この地図でここはどこですか？', '観光のためにここに来ました。', 'ここ一週間滞在します。', 'ドルに変えてください。'
  ];
  var enArr = [
    'Does this bus go to the station?', 'What time does the bus leave?', 'I’m getting off.', 'Could you let me know when we get to the station?', 'Could you take my order?', 'I’ll have this one.',
    'That’s all.', 'Check please.', 'Do you accept credit cards?', 'I’d like to check in.', 'Could you keep my baggage?', 'I’d like to pick up my baggage.', 'Could you call a taxi for me?',
    'Could you recommend any sightseeing spots around here?', 'How much is this?', 'Can I try this on?', 'I am from Japan.', 'Could you speak more slowly?', 'Is there a rest room nearby?',
    'Where am I on this map?', 'I am here for sightseeing.', 'I will stay here for one week.', 'Change into dollars please.'
  ];
  display(jpArr, enArr);
}

function emotions() {
  var jpArr = [
    '悲しい', '調子がいい', '嬉しい', '怒っている', '暑い', '寒い', 'お腹がすいている', 'お腹がいっぱい', '喉が渇いている', '誇りに思う', '病気', '痛い', '眠たい', '寂しい', '緊張している', 'うるさい', ' 怒っている', 'うらやましい',
    '腹を立てる', '感謝している', '快適だ', '心配', ' 激怒して', '落ち着いた', '敬意を表わす', '支持する', '寛大な', '失望', 'ワクワクしている', '興味がある', '疲れている', '退屈している', '恐れている', '怖い', 'ショックを受けている',
    'びっくりする', '困惑している', 'わぁ！（すごい）', 'おっと！', 'やったね！', '信じられない！', 'まさか！', '素晴らしい！', 'それは残念だ。', '楽しかった！'
  ];
  var enArr = [
    'sad', 'well', 'glad', 'mad', 'hot', 'cold', 'hungry', 'full', 'thirsty', 'proud', 'sick', 'hurt', 'sleepy', 'lonely', 'nervous', 'noisy', 'angry', 'jealous',
    'upset', 'grateful', 'comfortable', 'anxious', 'furious', 'calm', 'respectful', 'supportive', 'generous', 'letdown', 'excited', 'interested', 'tired', 'bored', 'afraid', 'scared', 'shocked',
    'amazed', 'confused', 'Wow!', 'Oops!', 'Yay!', 'Unbelievable!', 'No way!', 'Fantastic!', 'That’s too bad.', 'It was fun!'
  ];
  display(jpArr, enArr);
}

function display(jpArr, enArr) {
  console.log('display関数に到達');
  optionArea.insertAdjacentHTML('beforeend', `<button id="answerButton" onclick="answer('${jpArr}', '${enArr}')">答えを見る</button>`)
  topArea.style.pointerEvents = "none";
  topArea.style.opacity = "50%";
  suspensionButton.style.visibility = "";
  for (var i = jpArr.length - 1; i >= 0; i--) {
    var JPword = jpArr[i];
    var JPindex = jpArr.indexOf(`${JPword}`);
    JPmap.set(`${JPword}`, JPindex);

    var ENword = enArr[i];
    var ENindex = enArr.indexOf(`${ENword}`);
    ENmap.set(`${ENword}`, ENindex);
  }

  // 日本語ボタンを表示
  for (var i = jpArr.length - 1; i >= 0; i--){
    var rand = Math.floor( Math.random() * ( i + 1 ) );
    var jpWord = jpArr[rand];
    var jpIndex = JPmap.get(`${jpWord}`);
    jpArea.insertAdjacentHTML('afterbegin', `<button id="jp${jpIndex}" class="jpButton" onclick="JPcheck('${jpIndex}')">${jpWord}</button>`);
    [jpArr[i], jpArr[rand]] = [jpArr[rand], jpArr[i]];
  }

  // 英語ボタンを表示
  for (var i = enArr.length - 1; i >= 0; i--) {
    var rand = Math.floor( Math.random() * ( i + 1 ) );
    var enWord = enArr[rand];
    var enIndex = ENmap.get(`${enWord}`);
    enArea.insertAdjacentHTML('afterbegin', `<button id="en${enIndex}" class="enButton" onclick="ENcheck('${enIndex}')">${enWord}</button>`);
    [enArr[i], enArr[rand]] = [enArr[rand], enArr[i]];
  }

  //指定の場所までスクロール
  var position = suspensionButton.getBoundingClientRect().top;
  setTimeout( function() {
    scrollTo(0, position);
  }, 200);
}

var matchCard = [];
function JPcheck(jpIndex) {
  matchCard.unshift(jpIndex);
  document.getElementById(`jp${jpIndex}`).style.backgroundColor = "rgb(247, 183, 9)";
  jpArea.style.pointerEvents = "none";
  if (matchCard.length == 2) {
    check();
  } else {
    return;
  }
}
function ENcheck(enIndex) {
  matchCard.push(enIndex);
  document.getElementById(`en${enIndex}`).style.backgroundColor = "rgb(247, 183, 9)";
  enArea.style.pointerEvents = "none";
  if (matchCard.length == 2) {
    check();
  } else {
    return;
  }
}
function check() {
  if (matchCard[0] == matchCard[1]) {
    //発言の処理
    var sound = new SpeechSynthesisUtterance();
    sound.text = `${document.getElementById(`en${matchCard[1]}`).innerHTML}`;
    sound.lang = 'en-US';
    speechSynthesis.speak(sound);
    gametextArea.style.visibility = "";
    gameText.innerText = "正解です！";
    gameText.style.color = "red";
    setTimeout(function(){
      gametextArea.style.visibility = "hidden";
    }, 1500);  
    document.getElementById(`jp${matchCard[0]}`).style.display = "none";
    document.getElementById(`en${matchCard[0]}`).style.display = "none";
    jpArea.style.pointerEvents = "";
    enArea.style.pointerEvents = "";
    var jpText = document.getElementById(`jp${matchCard[0]}`).innerHTML;
    JPmap.delete(`${jpText}`);
    var enText = document.getElementById(`en${matchCard[0]}`).innerHTML;
    ENmap.delete(`${enText}`);
    matchCard = [];
    if (JPmap.size === 0 && ENmap.size === 0) {
      gametextArea.style.visibility = "";
      gameText.innerText = "GAME CLEAR";
      gameText.style.color = "rgb(74, 250, 4)";
      topArea.style.pointerEvents = "";
      topArea.style.opacity = "100%"; 
      suspensionButton.style.visibility = "hidden";
      var answerButton = document.getElementById('answerButton');
      optionArea.removeChild(answerButton);
    }
  } else {
    gametextArea.style.visibility = "";
    gameText.innerText = "不正解です！";
    gameText.style.color = "rgb(4, 102, 248)";
    setTimeout(function(){
      gametextArea.style.visibility = "hidden";
    }, 1500); 
    document.getElementById(`jp${matchCard[0]}`).style.backgroundColor = "rgb(240, 113, 113)";
    document.getElementById(`en${matchCard[1]}`).style.backgroundColor = "aquamarine";
    jpArea.style.pointerEvents = "";
    enArea.style.pointerEvents = "";
    matchCard = [];
  }
}

function suspension() {
  location.reload();
}

function answer(jpArr, enArr) {
  document.getElementById('answerButton').style.pointerEvents = "none";
  var jpArr = jpArr.split(',');
  var enArr = enArr.split(',');
  optionArea.insertAdjacentHTML('beforeend', `<button id="hintButton" onclick="hintAnswer('${jpArr}')">答えを隠す</button>`);
  for(var i = 0; i < jpArr.length; i++) {
    answerArea.insertAdjacentHTML('beforeend', `<p id="answerText${i}">${jpArr[i]} → ${enArr[i]}</p>`);
  }
}

function hintAnswer(jpArr) {
  var hintButton = document.getElementById('hintButton');
  optionArea.removeChild(hintButton);
  document.getElementById('answerButton').style.pointerEvents = "";
  for (var i = 0; i < jpArr.length; i++) {
    var answerId = document.getElementById(`answerText${i}`);
    answerArea.removeChild(answerId);
  }
}
