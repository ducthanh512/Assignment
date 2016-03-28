import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/MainLayout.jsx';

import Navigation from './components/navigation.jsx';


import PostList from './containers/postlist';
import Post from './containers/post.js';
import NewPost from './containers/newpost.js';

import HomePage from './containers/homepage.js';
import SignUp from './containers/signup.js';

import StatusList from './containers/statuslist';
import AddStatus from './containers/addStatus.js';

import NewUser from '../users/containers/NewUser.js';
import Login from '../users/containers/Login.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.route('/', {
    name: 'status.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<StatusList />)
      });
    }
  });

  FlowRouter.route('/post/:postId', {
    name: 'posts.single',
    action({postId}) {
      mount(MainLayoutCtx, {
        content: () => (<Post postId={postId}/>)
      });
    }
  });

  FlowRouter.route('/new-post', {
    name: 'newpost',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewPost/>)
      });
    }
  });


  FlowRouter.route('/home-page', {
    name: 'HomePage',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<HomePage/>)
      });
    }
  });

  FlowRouter.route('/sign-up', {
    name: 'NewUser',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewUser/>)
      });
    }
  });

  FlowRouter.route('/log-in', {
    name: 'Login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login/>)
      });
    }
  });

  FlowRouter.route('/add-Status', {
    name: 'addStatus',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<AddStatus/>)
      });
    }
  });
}
