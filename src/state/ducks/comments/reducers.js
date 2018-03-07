import {combineReducers} from 'redux';
import * as types from './types';


const initialState = {
  1: {
    id:1,
    user: 1,
    text: 'This is comment 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? l provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint vo' +
    'tur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab tur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ' +
    'tur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab  elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? l provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint vo\' +\n' +
    '    \'tur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab tur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab \' +\n' +
    '    \'tur adipisicing elit. Ab accusantium, a',
    time: '1519707905',
    comments: [4, 5, 6]
  },
  2: {
    id:2,
    user: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates?',
    time: '1519707905',
    comments: [7, 8]
  },
  3: {
    id:3,
    user: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates?',
    time: '1519707905',
    comments: []
  },
  4: {
    id:4,
    user: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates?',
    time: '1519707905',
    comments: []
  },
  5: {
    id:5,
    user: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates?',
    time: '1519707905',
    comments: []
  },
  6: {
    id:6,
    user: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates?',
    time: '1519707905',
    comments: []
  },
  7: {
    id:7,
    user: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates?',
    time: '1519707905',
    comments: []
  },
  8: {
    id:8,
    user: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates?',
    time: '1519707905',
    comments: []
  }
};

const initialAllIds = [1, 2, 3, 4, 5, 6, 7, 8];

const comment = (state, action) => {
  switch(action.type) {
    case types.CREATE: {
      return {
        ...action.payload,
      }
    }
    default:
      return state;
  }
};

const byId = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE:
      const newId = initialAllIds.length+1;
      return {
        ...state,
        [newId]: comment(state[newId], action),
      };
    case types.UPDATE:
      return {
        ...state,
        [action.payload.id]: comment(state[action.payload.id], action),
      };
    case types.REMOVE:
      return state;
    default:
      return state;
  }
};

const allIds = (state = initialAllIds, action) => {
  switch (action.type) {
    case types.CREATE: {
      const newId = initialAllIds.length+1;
      return [...state, newId];
    }
    default:
      return state;
  }
};

const getAllComments = (state) => {
  return state.allIds.map(id => state.byId[id]);
};

export const getVisibleComments = (state, filter) => {
  const AllComments = getAllComments(state);
  switch(filter) {
    case 'all':
      return AllComments;
    case 'completed':
      return AllComments.filter(t => t.completed);
    case 'active':
      return AllComments.filter(t => !t.completed);
    default:
      throw new Error(`unknown filter ${filter}.`)
  }
};

const comments = combineReducers({
  byId,
  allIds
});

export default comments;