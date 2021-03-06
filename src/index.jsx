import React from 'react';
import { render } from 'react-dom';

import Counter from './Counter';

import './styles.css';

const Application = () => (
  <main className="Application">
    <section className="Counters">
      <Counter />
    </section>
  </main>
);

render(<Application />, document.getElementById('root'));
