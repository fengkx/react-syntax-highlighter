(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_bqn"],{

/***/ "./node_modules/refractor/lang/bqn.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/bqn.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bqn; });
// @ts-nocheck
bqn.displayName = 'bqn'
bqn.aliases = []

/** @type {import('../core.js').Syntax} */
function bqn(Prism) {
  Prism.languages.bqn = {
    shebang: {
      pattern: /^#![ \t]*\/.*/,
      alias: 'important',
      greedy: true
    },
    comment: {
      pattern: /#.*/,
      greedy: true
    },
    'string-literal': {
      pattern: /"(?:[^"]|"")*"/,
      greedy: true,
      alias: 'string'
    },
    'character-literal': {
      pattern: /'(?:[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])'/,
      greedy: true,
      alias: 'char'
    },
    function: /•[\w¯.∞π]+[\w¯.∞π]*/,
    'dot-notation-on-brackets': {
      pattern: /\{(?=.*\}\.)|\}\./,
      alias: 'namespace'
    },
    'special-name': {
      pattern: /(?:𝕨|𝕩|𝕗|𝕘|𝕤|𝕣|𝕎|𝕏|𝔽|𝔾|𝕊|_𝕣_|_𝕣)/,
      alias: 'keyword'
    },
    'dot-notation-on-name': {
      pattern: /[A-Za-z_][\w¯∞π]*\./,
      alias: 'namespace'
    },
    'word-number-scientific': {
      pattern: /\d+(?:\.\d+)?[eE]¯?\d+/,
      alias: 'number'
    },
    'word-name': {
      pattern: /[A-Za-z_][\w¯∞π]*/,
      alias: 'symbol'
    },
    'word-number': {
      pattern:
        /[¯∞π]?(?:\d*\.?\b\d+(?:e[+¯]?\d+|E[+¯]?\d+)?|¯|∞|π)(?:j¯?(?:(?:\d+(?:\.\d+)?|\.\d+)(?:e[+¯]?\d+|E[+¯]?\d+)?|¯|∞|π))?/,
      alias: 'number'
    },
    'null-literal': {
      pattern: /@/,
      alias: 'char'
    },
    'primitive-functions': {
      pattern: /[-+×÷⋆√⌊⌈|¬∧∨<>≠=≤≥≡≢⊣⊢⥊∾≍⋈↑↓↕«»⌽⍉/⍋⍒⊏⊑⊐⊒∊⍷⊔!]/,
      alias: 'operator'
    },
    'primitive-1-operators': {
      pattern: /[`˜˘¨⁼⌜´˝˙]/,
      alias: 'operator'
    },
    'primitive-2-operators': {
      pattern: /[∘⊸⟜○⌾⎉⚇⍟⊘◶⎊]/,
      alias: 'operator'
    },
    punctuation: /[←⇐↩(){}⟨⟩[\]‿·⋄,.;:?]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_bqn.js.map