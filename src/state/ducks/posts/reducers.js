import {combineReducers} from 'redux';
import * as types from './types';


const initialState = {
  1: {
    id:1,
    title: 'New Construction project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? l provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint vo' +
    'tur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab tur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ' +
    'tur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab  elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? l provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint vo\' +\n' +
    '    \'tur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab tur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab \' +\n' +
    '    \'tur adipisicing elit. Ab accusantium, a',
    location: '2020 N Mozart St',
    neighborhood: 'Logan',
    images:['http://via.placeholder.com/250x150', 'http://via.placeholder.com/250x150', 'http://via.placeholder.com/250x150'],
    comments:[1, 3]
  },
  2: {
    id:2,
    title: 'New Construction project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates?',
    location: '2020 N Mozart St',
    neighborhood: 'Logan',
    images:['http://via.placeholder.com/250x150'],
    comments:[2]
  },
  3: {
    id:3,
    title: 'New Construction project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates?',
    location: '2020 N Mozart St',
    neighborhood: 'Logan',
    images:['http://via.placeholder.com/250x150'],
    comments:[]
  },
  4: {
    id:4,
    title: 'New Construction project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates?',
    location: '2020 N Mozart St',
    neighborhood: 'Logan',
    images:['http://via.placeholder.com/250x150'],
    comments:[]
  },
  5: {
    id:5,
    title: 'New Construction project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates?',
    location: '2020 N Mozart St',
    neighborhood: 'Logan',
    images:['http://via.placeholder.com/250x150'],
    comments:[]
  },
  6: {
    id:6,
    title: 'New Construction project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates?',
    location: '2020 N Mozart St',
    neighborhood: 'Logan',
    images:['http://via.placeholder.com/250x150'],
    comments:[]
  },
  7: {
    id:7,
    title: 'New Construction project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates?',
    location: '2020 N Mozart St',
    neighborhood: 'Logan',
    images:['http://via.placeholder.com/250x150'],
    comments:[]
  },
  8: {
    id:8,
    title: 'New Construction project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad autem corporis cumque delectus dicta dolore error eum facilis in libero molestiae neque, nihil provident quam recusandae sint voluptates?',
    location: '2020 N Mozart St',
    neighborhood: 'Logan',
    images: ['http://via.placeholder.com/250x150'],
    comments:[]
  }
};

const initialAllIds = [1, 2, 3, 4, 5, 6, 7, 8];

const post = (state, action) => {
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
      return {
        ...state,
        [action.payload.id]: post(state[action.payload.id], action),
      };
    case types.UPDATE:
      return {
        ...state,
        [action.payload.id]: post(state[action.payload.id], action),
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

const getAllPosts = (state) => {
  return state.allIds.map(id => state.byId[id]);
};

export const getVisiblePosts = (state, filter) => {
  const allPosts = getAllPosts(state);
  switch(filter) {
    case 'all':
      return allPosts;
    case 'completed':
      return allPosts.filter(t => t.completed);
    case 'active':
      return allPosts.filter(t => !t.completed);
    default:
      throw new Error(`unknown filter ${filter}.`)
  }
};

const posts = combineReducers({
  byId,
  allIds
});

export default posts;