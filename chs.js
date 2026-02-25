/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1. 需处理的前缀, 此处可以截取语句开头部分的内容进行汉化
//例如: Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头: "Coin: ":"金币: "
var cnPrefix = {
    
}

//2. 需处理的后缀, 此处可以截取语句结尾部分的内容进行汉化
//例如: 13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾: " Coin":" 金币"
var cnPostfix = {
    
}

//需排除的, 正则匹配
var cnExcludeWhole = [

];

var cnExcludePostfix = [
]

//3. 正则替换, 带数字的固定格式句子
//纯数字: (\d+)
//字母加数字: ([\d\.]+[A-Za-z])
//逗号: ([\d\.,]+)
//带小数点的数字: ([\d\.]+)
//原样输出的字段: (.+)
//换行加空格: \n(.+)
//&nbsp;空格: \xA0
var cnRegReplace = new Map([
    
]);

//4.汉化杂项
var cnItems = {
    
    _OTHER_: [],
}