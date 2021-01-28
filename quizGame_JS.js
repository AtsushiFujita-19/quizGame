//1問目
const question = 'オーストラリアの首都はどこ？？';
const answers = [
  'シドニー',
  'キャンベラ',
  'メルボルン',
  'ロンドン'
];
const correct = 'キャンベラ';

  //Id追加しHTMLに反映,QUESTIONと紐づけ
  //text contentを変更
document.getElementById('ind-question').textContent = question;
  //buttonと答えの紐づけ,HTML上のtagを変数にする場合は$を付ける！
  const $button = document.getElementsByTagName('button');
    $button[0].textContent = answers[0];
    $button[1].textContent = answers[1];
    $button[2].textContent = answers[2];
    $button[3].textContent = answers[3];

  //eventの追加,正誤判定
$button[0].addEventListener('click', function () {
  if ($button[0].textContent === correct) {
    window.alert('正解！！');
  }else {
    window.alert('不正解...');
  }
});
$button[1].addEventListener('click', function () {
  if ($button[1].textContent === correct) {
    window.alert('正解!!');
  }else {
    window.alert('不正解...');
  }
});
$button[2].addEventListener('click', function () {
  if ($button[2].textContent === correct) {
    window.alert('正解!!');
  }else {
    window.alert('不正解...');
  }
});
$button[3].addEventListener('click', function () {
  if ($button[3].textContent === correct) {
    window.alert('正解!!');
  }else {
    window.alert('不正解...');
  }
});
