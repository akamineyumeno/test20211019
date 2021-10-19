
console.log("jsファイルからハロワー");
function twitText() {
	var s, url;
	s = "ツイート";
	url = document.location.href;
	
	if (s != "") {
		if (s.length > 140) {
			//文字数制限
			alert("テキストが140字を超えています");
		} else {
			//投稿画面を開く
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
	}
}

console.log("akamine" + "yumeno");
console.log("SUMOMO".split("O"));

var students = "夢乃"
console.log(students);

students = "やすなり"
console.log(students);

students = ["すずか","やすなり","うめ"]
console.log(students);

console.log(students[2]);
students[0] = "あきほ";
console.log(students);

var sunabaco = {"沖縄":"KOZA","北海道":"EBETSU","香川":"TAKAMATSU"}
console.log(sunabaco);
console.log(sunabaco["北海道"]);

var count = 1; //1
count+= 1; //count = count+1 ; -> 2
count-= 2;
count*= 2;

count++;
count--;

console.log(1<2);
 //比較演算の例
var x = 2;
var y = 3;

console.log(x==y); //xとyは等しい  folse
console.log(x===y); ///xとyは厳密に等しい  folse
console.log(x<y); //xよりyが大きい  true
console.log(x<=y); //xよりyが大きいまたは等しい  true
console.log(x>y); //xよりyが小さい  folse
console.log(x>=y); //xよりyが小さいまたは等しい  folse
console.log(x!=y); //xとyは等しくない  

var licence_flag = 0; //次の条件分で使うための下準備
var now = 14;
//if(条件式){
// 実行したいプログラム；
//}
if(licence_flag==1){
    console.log("車を運転できました");
}else if(now>22){
    console.log("電車で帰れます");
    //else ifは複数できます。
}else{
    console.log("免許がないので運転できません");
}

var limit = 10;
var getup = 8;

if(limit < getup){
    console.log("遅刻です");
}else if(limit==getup){
    console.log("ギリギリセーフ！");
}else{
    console.log("よく頑張りました！");
}
//1~20までの数字をコンソール出力してください。
console.log(1234567891011121314151617181920);
//繰り返ししてほしい文 for
for (var i=0;i<=20;i++){
    console.log(i);
}

//for(初期値;条件式;増減式）{
   // 実行したいプログラム;
   // 実行したいプログラム;
   // 実行したいプログラム;
//}

for(var i=0;i<=25;i++){
console.log(i + "番目");
}
//変数＝データが入っている箱
//関数＝命令文が入っている箱
//機能のまとまった function

function greet(user_name){
    var message = user_name + "さん、こんにちは";
    console.log(message);
}
console.log(greet("夢乃YUMENO"));