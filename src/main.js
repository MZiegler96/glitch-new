// import { PowerGlitch } from 'powerglitch';

document.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector('img');
  const div = document.querySelector('div');
  const body = document.querySelector('body');
  // PowerGlitch.glitch(image);
  // PowerGlitch.glitch(div);
  PowerGlitch.glitch(body);
});

// function powerglitch(d) {
//   console.log(d);
//   ('use strict');
//   var E = Object.defineProperty,
//     $ = Object.defineProperties,
//     P = Object.getOwnPropertyDescriptors,
//     p = Object.getOwnPropertySymbols,
//     C = Object.prototype.hasOwnProperty,
//     M = Object.prototype.propertyIsEnumerable,
//     y = (t, e, n) =>
//       e in t
//         ? E(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
//         : (t[e] = n),
//     f = (t, e) => {
//       for (var n in e || (e = {})) C.call(e, n) && y(t, n, e[n]);
//       if (p) for (var n of p(e)) M.call(e, n) && y(t, n, e[n]);
//       return t;
//     },
//     G = (t, e) => $(t, P(e));
//   const v = (t = 'always') => ({
//       playMode: t,
//       createContainers: !0,
//       hideOverflow: !1,
//       timing:
//         t === 'always'
//           ? { duration: 2 * 1e3, iterations: 1 / 0 }
//           : { duration: 250, iterations: 1 },
//       glitchTimeSpan:
//         t === 'always' ? { start: 0.5, end: 0.7 } : { start: 0, end: 1 },
//       shake: { velocity: 15, amplitudeX: 0.2, amplitudeY: 0.2 },
//       slice:
//         t === 'click'
//           ? {
//               count: 15,
//               velocity: 20,
//               minHeight: 0.02,
//               maxHeight: 0.15,
//               hueRotate: !0,
//             }
//           : {
//               count: 6,
//               velocity: 15,
//               minHeight: 0.02,
//               maxHeight: 0.15,
//               hueRotate: !0,
//             },
//       pulse: !1,
//     }),
//     w = (t, e) => {
//       if (!t.glitchTimeSpan) return 1;
//       const n = t.glitchTimeSpan.start,
//         a = t.glitchTimeSpan.end;
//       if (e < n || e > a) return 0;
//       const r = n + (a - n) / 2;
//       return e < r ? (e - n) / (r - n) : (a - e) / (a - r);
//     },
//     u = (t, e) => (Math.random() - 0.5) * 2 * w(t, e),
//     O = ({ minHeight: t, maxHeight: e, minWidth: n, maxWidth: a }) => {
//       const r = Math.floor(Math.random() * ((e - t) * 100 + 1)) + t * 100,
//         c = Math.floor(Math.random() * ((a - n) * 100 + 1)) + n * 100,
//         i = Math.floor(Math.random() * (100 - r)),
//         s = Math.floor(Math.random() * (100 - c)),
//         h = `${s + c}% ${i}%`,
//         l = `${s + c}% ${i + r}%`,
//         o = `${s}% ${i + r}%`,
//         g = `${s}% ${i}%`;
//       return `polygon(${h},${l},${o},${g})`;
//     },
//     b = (t) => {
//       const e = Math.floor((t.slice.velocity * t.timing.duration) / 1e3) + 1,
//         n = [];
//       for (let a = 0; a < e; ++a) {
//         if (w(t, a / e) === 0) {
//           n.push({ opacity: '0', transform: 'none', clipPath: 'unset' });
//           continue;
//         }
//         const r = u(t, a / e) * 30,
//           c = {
//             opacity: '1',
//             transform: `translate3d(${r}%,0,0)`,
//             clipPath: O({
//               minHeight: t.slice.minHeight,
//               maxHeight: t.slice.maxHeight,
//               minWidth: 1,
//               maxWidth: 1,
//             }),
//           };
//         t.slice.hueRotate &&
//           (c.filter = `hue-rotate(${Math.floor(u(t, a / e) * 360)}deg)`),
//           n.push(c);
//       }
//       return {
//         steps: n,
//         timing: f({ easing: `steps(${e},jump-start)` }, t.timing),
//       };
//     },
//     A = (t) =>
//       t.pulse
//         ? {
//             steps: [
//               { transform: 'scale(1)', opacity: '1' },
//               { transform: `scale(${t.pulse.scale})`, opacity: '0' },
//             ],
//             timing: G(f({}, t.timing), {
//               delay:
//                 (t.glitchTimeSpan ? t.glitchTimeSpan.start : 0) *
//                 t.timing.duration,
//               easing: 'ease-in-out',
//             }),
//           }
//         : null,
//     L = (t) => {
//       if (!t.shake) return { steps: [], timing: {} };
//       const e = Math.floor((t.shake.velocity * t.timing.duration) / 1e3) + 1,
//         n = [];
//       for (let a = 0; a < e; ++a) {
//         const r = u(t, a / e) * t.shake.amplitudeX * 100,
//           c = u(t, a / e) * t.shake.amplitudeY * 100;
//         n.push({ transform: `translate3d(${r}%,${c}%,0)` });
//       }
//       return {
//         steps: n,
//         timing: f({ easing: `steps(${e},jump-start)` }, t.timing),
//       };
//     },
//     _ = (t) =>
//       [
//         L(t),
//         A(t),
//         ...Array.from({ length: t.slice.count }).map(() => b(t)),
//       ].filter((e) => e !== null),
//     m = (...t) => {
//       const e = (n) => n && typeof n == 'object';
//       return t.reduce(
//         (n, a) => (
//           Object.keys(a).forEach((r) => {
//             e(n[r]) && e(a[r])
//               ? (n[r] = m(n[r], a[r]))
//               : a[r] !== void 0 && (n[r] = a[r]);
//           }),
//           n
//         ),
//         {}
//       );
//     },
//     H = (t, e) => {
//       var n, a;
//       if (!e.createContainers)
//         return {
//           container: t,
//           layersContainer: t,
//           glitched: t.firstElementChild,
//         };
//       if (!t.dataset.glitched) {
//         const i = document.createElement('div'),
//           s = document.createElement('div');
//         return (
//           getComputedStyle(t)
//             .getPropertyValue('display')
//             .match(/^inline/) && (s.style.display = 'inline-block'),
//           s.appendChild(i),
//           (n = t.parentElement) == null || n.insertBefore(s, t),
//           i.prepend(t),
//           { container: s, layersContainer: i, glitched: t }
//         );
//       }
//       const r = t.parentElement,
//         c = (a = t.parentElement) == null ? void 0 : a.parentElement;
//       for (; r.children.length > 1; ) r.removeChild(r.children[1]);
//       return (
//         r.firstElementChild.getAnimations().forEach((i) => i.cancel()),
//         { container: c, layersContainer: r, glitched: t }
//       );
//     },
//     R = (t, e, n) => {
//       const { glitched: a, container: r, layersContainer: c } = H(t, n);
//       (c.style.display = 'grid'),
//         n.hideOverflow && (r.style.overflow = 'hidden'),
//         n.html && (a.innerHTML = n.html),
//         (a.style.gridArea = '1/1/-1/-1');
//       const i = a.cloneNode(!0);
//       (i.style.gridArea = '1/1/-1/-1'),
//         (i.style.userSelect = 'none'),
//         (i.style.pointerEvents = 'none'),
//         (i.style.opacity = '0');
//       for (let l = 0; l < e.length - 1; ++l) {
//         const o = i.cloneNode(!0);
//         c.appendChild(o);
//       }
//       const s = () => {
//           e.forEach((l, o) => {
//             c.children[o].animate(l.steps, l.timing);
//           });
//         },
//         h = () => {
//           e.forEach((l, o) => {
//             c.children[o].getAnimations().forEach((g) => {
//               g.cancel();
//             });
//           });
//         };
//       switch (
//         ((r.onmouseenter = null),
//         (r.onmouseleave = null),
//         (r.onclick = null),
//         n.playMode)
//       ) {
//         case 'always':
//           s();
//           break;
//         case 'hover':
//           (r.onmouseenter = s), (r.onmouseleave = h);
//           break;
//         case 'click':
//           r.onclick = () => {
//             h(), s();
//           };
//           break;
//       }
//       return (
//         (t.dataset.glitched = '1'),
//         { container: r, startGlitch: s, stopGlitch: h }
//       );
//     },
//     T = {
//       glitch: (t = '.powerglitch', e = {}) => {
//         const n = m(v(e.playMode), e);
//         let a = [];
//         typeof t == 'string'
//           ? (a = Array.from(document.querySelectorAll(t)))
//           : t instanceof NodeList
//           ? (a = Array.from(t))
//           : Array.isArray(t)
//           ? (a = t)
//           : t instanceof HTMLElement && (a = [t]);
//         const r = _(n),
//           c = a.map((i) => R(i, r, n));
//         return {
//           containers: c.map((i) => i.container),
//           startGlitch: () => c.forEach((i) => i.startGlitch()),
//           stopGlitch: () => c.forEach((i) => i.stopGlitch()),
//         };
//       },
//       generateLayers: _,
//       getDefaultOptions: v,
//     };
//   (d.PowerGlitch = T),
//     (d.mergeOptions = m),
//     Object.defineProperty(d, '__esModule', { value: !0 });
// }
// this.window = this.window || {};
