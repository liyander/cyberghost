import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Projects from './projects';
import Achievements from './achievements';
import Home from './home';
import { ThemeProvider, THEME_STORAGE_KEY } from './ThemeProvider';
import ErrorPage from './404';

global.IS_REACT_ACT_ENVIRONMENT = true;

let container;
let root;
beforeEach(() => {
  window.localStorage.clear();
  delete document.documentElement.dataset.theme;
  window.scrollTo = jest.fn();
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});
afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

function renderPage(Page) {
  act(() => root.render(<ThemeProvider><MemoryRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}><Page/></MemoryRouter></ThemeProvider>));
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

test('mobile navigation closes on Escape and restores focus to the menu button', () => {
  renderPage(Projects);
  const menu = container.querySelector('.portfolio-menu');
  act(() => menu.click());
  expect(menu.getAttribute('aria-expanded')).toBe('true');
  const link = container.querySelector('.portfolio-links a');
  link.focus();
  act(() => link.dispatchEvent(new KeyboardEvent('keydown', {key: 'Escape', bubbles: true})));
  expect(menu.getAttribute('aria-expanded')).toBe('false');
  expect(document.activeElement).toBe(menu);
});

test('choosing a navigation destination closes the menu and resets scroll', () => {
  renderPage(Projects);
  const menu = container.querySelector('.portfolio-menu');
  act(() => menu.click());
  act(() => container.querySelector('.portfolio-links a[href="/resume"]').click());
  expect(menu.getAttribute('aria-expanded')).toBe('false');
  expect(container.querySelector('.portfolio-links a[aria-current="page"]').getAttribute('href')).toBe('/resume');
  expect(window.scrollTo).toHaveBeenLastCalledWith(0, 0);
});

test('home is immediately usable and its navigation restores focus on Escape', () => {
  renderPage(Home);
  expect(container.querySelector('#home-content h1').textContent).toBe('LiyanderRishwanth.');
  expect(container.querySelector('.home-primary').getAttribute('href')).toBe('/projects');
  const menu = container.querySelector('.portfolio-menu');
  act(() => menu.click());
  expect(menu.getAttribute('aria-expanded')).toBe('true');
  const link = container.querySelector('.portfolio-links a');
  link.focus();
  act(() => link.dispatchEvent(new KeyboardEvent('keydown', {key: 'Escape', bubbles: true})));
  expect(menu.getAttribute('aria-expanded')).toBe('false');
  expect(document.activeElement).toBe(menu);
});

test('theme choice persists across navigation and a fresh app mount', () => {
  const Pages = () => <Routes><Route path="/" element={<Home/>}/><Route path="/projects" element={<Projects/>}/></Routes>;
  renderPage(Pages);
  expect(document.documentElement.dataset.theme).toBe('dark');
  act(() => container.querySelector('.theme-toggle').click());
  expect(document.documentElement.dataset.theme).toBe('light');
  expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
  act(() => container.querySelector('.home-primary').click());
  expect(container.querySelector('.projects-page')).not.toBeNull();
  expect(document.documentElement.dataset.theme).toBe('light');
  expect(container.querySelector('.theme-toggle').getAttribute('aria-label')).toBe('Switch to dark theme');
  act(() => root.unmount());
  root = createRoot(container);
  renderPage(Projects);
  expect(document.documentElement.dataset.theme).toBe('light');
});

test('outside click dismisses navigation without affecting the theme', () => {
  renderPage(Projects);
  const menu = container.querySelector('.portfolio-menu');
  act(() => menu.click());
  act(() => container.querySelector('main').dispatchEvent(new Event('pointerdown', {bubbles: true})));
  expect(menu.getAttribute('aria-expanded')).toBe('false');
  expect(document.documentElement.dataset.theme).toBe('dark');
});

test('theme toggling works even when the browser cannot save preferences', () => {
  const write = jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('Storage unavailable'); });
  try {
    renderPage(Projects);
    act(() => container.querySelector('.theme-toggle').click());
    expect(document.documentElement.dataset.theme).toBe('light');
  } finally { write.mockRestore(); }
});

test('404 retains both artwork components and offers shared theme navigation', () => {
  renderPage(ErrorPage);
  expect(container.querySelectorAll('.error-art-media img')).toHaveLength(2);
  expect(container.querySelector('.error-primary-action').getAttribute('href')).toBe('/home');
  act(() => container.querySelector('.theme-toggle').click());
  expect(document.documentElement.dataset.theme).toBe('light');
});
