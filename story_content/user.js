function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6p7lrzrpf5H":
        Script1();
        break;
      case "6hZaKuV5uug":
        Script2();
        break;
  }
}

function Script1()
{
  (function(){
  var player = GetPlayer();

  var payload = {
    var1: player.GetVar("consentStatus"),
    var2: player.GetVar("captainsName"),
    var3: player.GetVar("captainsOccupation"),
    var4: player.GetVar("captainsYOB"),
    var5: player.GetVar("captainsEmail"),
    var6: player.GetVar("crisisChoice"),
    var7: player.GetVar("reflectionNotes1"),
    var8: player.GetVar("reflectionNotes2"),
    var9: player.GetVar("leadershipStyles"),
    var10: player.GetVar("captainsConflictChoice1")
    var11: player.GetVar("reflectionPrompts")
  };

  fetch("https://script.google.com/macros/s/AKfycbyGXbUMej0g_XTIf4viSToG3Yzxk6BT9Xgl0Xd43lIaAoxx7QOGdd-9aCuqMT9saJg47g/exec", {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify(payload)
  })
.then(function(res){ return res.json(); })
.then(function(json){
  console.log("✔ Lưu thành công:", json);
  

.catch(function(err){
  console.error("❌ Lưu lỗi:", err);
 
}

function Script2()
{
  (function(){
  var player = GetPlayer();

  var payload = {
    var1: player.GetVar("consentStatus"),
    var2: player.GetVar("captainsName"),
    var3: player.GetVar("captainsOccupation"),
    var4: player.GetVar("captainsYOB"),
    var5: player.GetVar("captainsEmail"),
    var6: player.GetVar("crisisChoice"),
    var7: player.GetVar("reflectionNotes1"),
    var8: player.GetVar("reflectionNotes2"),
    var9: player.GetVar("leadershipStyles"),
    var10: player.GetVar("captainsConflictChoice1")
    var11: player.GetVar("reflectionPrompts")
  };

  fetch("https://script.google.com/macros/s/AKfycbyGXbUMej0g_XTIf4viSToG3Yzxk6BT9Xgl0Xd43lIaAoxx7QOGdd-9aCuqMT9saJg47g/exec", {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify(payload)
  })
.then(function(res){ return res.json(); })
.then(function(json){
  console.log("✔ Lưu thành công:", json);
  

.catch(function(err){
  console.error("❌ Lưu lỗi:", err);
 
}

