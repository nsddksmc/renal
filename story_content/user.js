function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hHWgdF8BgM":
        Script1();
        break;
      case "6PO8vYfqk0K":
        Script2();
        break;
      case "68WWPmjvLZq":
        Script3();
        break;
      case "6HgSWlcKUV3":
        Script4();
        break;
      case "5szjxpfEClJ":
        Script5();
        break;
      case "6rTlcG4HYlE":
        Script6();
        break;
      case "5n21yO8ilhi":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  window.print();
}

