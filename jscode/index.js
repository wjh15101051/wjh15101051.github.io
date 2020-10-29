function change_mode()
{
  var modebutton = document.getElementById("mode_change_button");
  if(mode == 1)
  {//晚上
    mode = 2;
    var IndexStyle = document.getElementById("index_style");
    IndexStyle.href = "css/index_style2.css";
    changetonight();
  }
  else
  {//白天
    mode = 1;
    var IndexStyle = document.getElementById("index_style");
    IndexStyle.href = "css/index_style1.css";
    changetodaytime();
  }
}
function fp_friends_display()
{
  var friendlist = document.getElementById("fp_friends_list");
  if(friendlist.style.display == "none")friendlist.style.display = "";
  else friendlist.style.display = "none";
}