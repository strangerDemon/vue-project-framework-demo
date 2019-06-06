const configUrl = "../../../static/config/systemConfig.json";
var systemConfig = {};

$.ajax({
  type: "get",
  async: false,  //关闭异步
  cache: false,
  url: configUrl,
  dataType: "json",
  error: function(request) {
    console.warn("system config error", request);
  },
  success: function(resp) {
    systemConfig = resp;
  }
});

export default systemConfig;
