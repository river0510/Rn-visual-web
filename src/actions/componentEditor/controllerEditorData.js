const EDITOR_SELECT_CONTROL = 'EDITOR_SELECT_CONTROL';

function processAction(dispatch,type,data)
{
  dispatch(createAction(type,data))
}

function createAction(type,data) {
  return {
    type:type,
    payload:data,
  }
}

module.exports = {
  processAction
}
