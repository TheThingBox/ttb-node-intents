module.exports = function(RED) {

  "use strict";

  function Invert(n) {
    RED.nodes.createNode(this,n);
    var node = this;
    this.on('input', function (msg) {
      msg.intent = 1 - msg.intent;
      this.send(msg);
    });
  }
  RED.nodes.registerType("Invert", Invert);

  function More(n) {
    RED.nodes.createNode(this,n);
    var node = this;
    this.on('input', function (msg) {
      msg.intent = 2;
      this.send(msg);
    });
  }
  RED.nodes.registerType("More", More);

  function Less(n) {
    RED.nodes.createNode(this,n);
    var node = this;
    this.on('input', function (msg) {
      msg.intent = 3;
      this.send(msg);
    });
  }
  RED.nodes.registerType("Less", Less);

  function Open(n) {
    RED.nodes.createNode(this,n);
    var node = this;
    this.on('input', function (msg) {
      msg.intent = 1;
      this.send(msg);
    });
  }
  RED.nodes.registerType("Open", Open);

  function Close(n) {
    RED.nodes.createNode(this,n);
    var node = this;
    this.on('input', function (msg) {
      msg.intent = 0;
      this.send(msg);
    });
  }
  RED.nodes.registerType("Close", Close);

  function NoIntent(n) {
    RED.nodes.createNode(this,n);
    var node = this;
    this.on('input', function (msg) {
      msg.intent = undefined;
      this.send(msg);
    });
  }
  RED.nodes.registerType("NoIntent", NoIntent);

  function OnOpen(n) {
    RED.nodes.createNode(this,n);
    var node = this;
    this.on('input', function (msg) {
      if(msg.intent==1)
        this.send(msg);
    });
  }
  RED.nodes.registerType("OnOpen", OnOpen);

  function OnClose(n) {
    RED.nodes.createNode(this,n);
    var node = this;
    this.on('input', function (msg) {
      if(msg.intent==0)
        this.send(msg);
    });
  }
  RED.nodes.registerType("OnClose", OnClose);
}
