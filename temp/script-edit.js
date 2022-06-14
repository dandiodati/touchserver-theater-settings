[quiet]


if(_feedback && _feedback.startsWith('{')) {
data = JSON.parse(_feedback);

_local.masterStatus = data.attributes[0].currentValue;

log('feedback ' + _local.masterStatus + ', ' + _brightness);
  if (_local.masterStatus == 'on') {
    _local.lastStatus = _local.masterStatus;
    _setImage('start-sauna', 'sauna-buttons/Sauna-on-selected.png');
  } else if (_local.masterStatus == 'off') {
      _local.lastStatus = _local.masterStatus;
      _setImage('start-sauna', 'sauna-buttons/Sauna-on.png');
  }
}