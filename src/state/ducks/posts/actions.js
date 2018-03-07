import * as types from './types';
import { v4 } from 'uuid';

const create = (data) => {
  return {
    type: types.CREATE,
    payload: {
      id: v4(),
      ...data
    }
  }
};

const remove = (data) => {
  return {
    type: types.REMOVE,
    payload: {
      ...data
    }
  }
};


const update = (data) => {
  return {
    type: types.UPDATE,
    payload: {
      ...data
    }
  }
};


export {
  create,
  remove,
  update
}