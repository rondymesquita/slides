import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { reactAdapter } from '@rondymesquita/splendid';
import './App.css';

import * as slides from '../index.md';

const root = document.getElementById('root')!;
const { render } = reactAdapter({
  root,
  slides,
});

render();
