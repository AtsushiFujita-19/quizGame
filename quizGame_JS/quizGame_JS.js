//quizの配列を定義
const quiz = [
  {//1問目
    question: 'オーストラリアの首都はどこ？？',
    answers:  [
      'シドニー',
      'キャンベラ',
      'メルボルン',
      'ロンドン'
    ],
    correct: 'キャンベラ'
  },
  {//2問目
    question: '野生のハムスターが暮らしているのはどこ？？',
    answers:  [
      '森林',
      '海',
      '砂漠',
      '山岳地帯'
    ],
    correct: '砂漠'
  },
  {//3問目
    question: '5+3×4=？',
    answers :  [
      '60',
      '11',
      '32',
      '17'
    ],
    correct: '17'
  },
  {//4問目
    question: '次のうちナス科ナス属でないものはどれ？？',
    answers:  [
      'ナス',
      'じゃがいも',
      'たばこ',
      'とまと'
    ],
    correct: 'たばこ'
  }
];

//
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//buttonの配列をdocumentを利用して変数として設定
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//問題とボタンの定義,リファクタリング
const setupQuiz = function () {
  //Id追加しHTMLに反映,QUESTIONと紐づけ
  //textcontentを変更
  document.getElementById('ind-question').textContent = quiz[quizIndex].question;
  //buttonと答えの紐づけ,HTML上のtagを変数にする場合は$を付ける！
  //ループ文loop
  let buttonIndex = 0;
    while (buttonIndex < buttonLength) {　//lengthは配列個数 //PCが壊れるため必ず上限を設定
      //繰り返したい命令
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      buttonIndex++; //indexに+1し続ける
    }
}
setupQuiz();

//if文を関数にまとめる
const clickhandler =　function (event) {
  if (event.target.textContent === quiz[quizIndex].correct) {
    window.alert('正解！！');
    score++;
  }else {
    window.alert('不正解...');
  }
//次の問題へ
  quizIndex++;
  if(quizIndex < quizLength){
    setupQuiz();
  }else {
  window.alert('終了!あなたの正解数は'+score+'/'+quizLength+'です');
  }
}

//buttonの正誤判定をリファクタリング
let handleIndex = 0;
while (handleIndex < buttonLength) {　//lengthは配列個数 //PCが壊れるため必ず上限を設定
  //繰り返したい命令
  $button[handleIndex].addEventListener('click', function (event) {
   clickhandler(event);
  });
  handleIndex++; //indexに+1し続ける
}
