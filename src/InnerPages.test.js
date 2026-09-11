import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import Projects from './projects';
import Achievements from './achievements';

global.IS_REACT_ACT_ENVIRONMENT = true;

let container;
let root;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});
afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

function renderPage(Page) {
  act(() => root.render(<MemoryRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}><Page/></MemoryRouter>));
}

test('project filters show the matching systems and restore the full collection', () => {
  renderPage(Projects);
  const tiles = () => container.querySelectorAll('.project-tile');
  const select = label => act(() => Array.from(container.querySelectorAll('.filter-list button')).find(button => button.textContent === label).click());
  expect(tiles()).toHaveLength(7);
  select('Open source');
  expect(tiles()).toHaveLength(2);
  expect(container.querySelector('.project-showcase').textContent).toContain('Malware Analysis Tool');
  expect(container.querySelector('[aria-pressed="true"]').textContent).toBe('Open source');
  select('Learning & labs');
  expect(tiles()).toHaveLength(2);
  expect(container.querySelector('.project-showcase').textContent).toContain('Cybersecurity Academy');
  select('All projects');
  expect(tiles()).toHaveLength(7);
});

test('credential preview closes with Escape and restores focus and scrolling', () => {
  HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
  HTMLDialogElement.prototype.close = function () { this.removeAttribute('open'); };
  renderPage(Achievements);
  const trigger = container.querySelector('.credential-tile');
  trigger.focus();
  act(() => trigger.click());
  const dialog = container.querySelector('dialog');
  expect(dialog.getAttribute('aria-label')).toBe('GitHub Advanced Security');
  expect(dialog.hasAttribute('open')).toBe(true);
  expect(document.body.style.overflow).toBe('hidden');
  act(() => dialog.dispatchEvent(new Event('cancel', {bubbles: true})));
  expect(container.querySelector('dialog')).toBeNull();
  expect(document.activeElement).toBe(trigger);
  expect(document.body.style.overflow).toBe('');
});
