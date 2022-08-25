function display(num){
    var recent=document.getElementById("result").value;
    recent=recent.concat(num);
    document.getElementById("result").value=recent;
}
function calculate()
{
    var recent=document.getElementById("result").value;
    recent=eval(recent);
    document.getElementById("result").value=recent;

}
function reset()
{
    document.getElementById('result').value="";
}
function deletion()
{
    var recent=document.getElementById("result").value;
    var now=recent.substr(0,recent.length-1);
    document.getElementById("result").value=now;
}