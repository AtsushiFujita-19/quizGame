//1問目
const question = 'オーストラリアの首都はどこ？？';
const answers = [
  'シドニー',
  'キャンベラ',
  'メルボルン',
  'ロンドン'
];
const correct = 'キャンベラ';

//buttonの配列をdocumentを利用して変数として設定
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//問題とボタンの定義,リファクタリング
const setupQuiz = function () {
  //Id追加しHTMLに反映,QUESTIONと紐づけ
  //textcontentを変更
  document.getElementById('ind-question').textContent = question;
  //buttonと答えの紐づけ,HTML上のtagを変数にする場合は$を付ける！
  //ループ文loop
  let buttonIndex = 0;
    while (buttonIndex < buttonLength) {　//lengthは配列個数 //PCが壊れるため必ず上限を設定
      //繰り返したい命令
      $button[buttonIndex].textContent = answers[buttonIndex];
      buttonIndex++; //indexに+1し続ける
    }
}
setupQuiz();

//if文を関数にまとめる
const clickhandler =　function (event) {
  if (event.target.textContent === correct) {
    window.alert('正解！！');
  }else {
    window.alert('不正解...');
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
