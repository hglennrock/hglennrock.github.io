var age = 26;
var oldAge = 96;
var perDay = 2;

var days = (oldAge - age) * 356;
var total = perDay * days;
if(total > 40000){
    document.write("You will need " + total + " to last you until the ripe old age of " + oldAge + ". Wow! That's a lot!");
}else{
    document.write("You will need " + total + " to last you until the ripe old age of " + oldAge + ". You seem pretty reasonable");
}