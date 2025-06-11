function ExecuteScript(strId)
{
  switch (strId)
  {
      case "69noOJCgEsQ":
        Script1();
        break;
  }
}

function Script1()
{
  (function(){
  var player = GetPlayer();

  var payload = {
    var1: player.GetVar("var1"),
    var2: player.GetVar("var2"),
    var3: player.GetVar("var3"),
    var4: player.GetVar("var4"),
    var5: player.GetVar("var5"),
    var6: player.GetVar("var6"),
    var7: player.GetVar("var7"),
    var8: player.GetVar("var8"),
    var9: player.GetVar("var9"),
    var10: player.GetVar("var10")
  };

  fetch("https://script.google.com/macros/s/AKfycbyGXbUMej0g_XTIf4viSToG3Yzxk6BT9Xgl0Xd43lIaAoxx7QOGdd-9aCuqMT9saJg47g/exec", {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify(payload)
  })
  .then(function(res){
    console.log("Gửi OK", res);
  })
  .catch(function(err){
    console.error("Lỗi gửi dữ liệu", err);
  });
})();

}

