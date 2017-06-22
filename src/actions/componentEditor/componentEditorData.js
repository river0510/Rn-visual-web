

const EDITOR_ADD_COMPONENT = 'EDITOR_ADD_COMPONENT';
const EDITOR_SELECT_COMPONENT = 'EDITOR_SELECT_COMPONENT';

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
