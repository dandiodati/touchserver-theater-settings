
function log(msg) {
  _local.debugText += '\n' + msg;
  _setText('debug', _local.debugText);
}

function convertToRange(value, srcRange, dstRange){
  // value is outside source range return
  if (value < srcRange[0] || value > srcRange[1]){
    return NaN; 
  }

  var srcMax = srcRange[1] - srcRange[0],
      dstMax = dstRange[1] - dstRange[0],
      adjValue = value - srcRange[0];

  return (adjValue * dstMax / srcMax) + dstRange[0];

}

function cancelExecIfKodiDown() {
  var proxy = _connectable('192.168.1.11',18080,3);
  var kodi = _connectable('192.168.1.12', 80,3);
  if (!proxy || !kodi) {
    return '[*]';
  } else {
    return '';
  }
}


function checkServiceConnection(host, port) {
    var result = _connectable(host, port);

    log('Status on service(' + host +':' +port +'): ' + result );

    log('showingerror ' + _global.showingError);

    if (!result && (_global.showingError == undefined || !_global.showingError )) {
        _local.message = 'Connection failed to automation(TouchControl) server.';
        _setText('_macroMessage', _local.message);
        _setTop('_macroMessage', 100);
        _setLeft('_macroMessage', 100);
        _global.showingError = true;
    } else if (result && _global.showingError) {
        _setTop('_macroMessage',800);
        _setLeft('_macroMessage', 0);
        _global.showingError = false;
    }
}
