// ==UserScript==
// @name              Ark Map Enlarger
// @include	          http://ark.fandom.com/*
// @include	          https://ark.fandom.com/*
// @description       The maps are artificially too small
// @version           2022-02-09
// @grant             none
// @require           https://code.jquery.com/jquery-3.6.0.min.js
// @run-at            document-end
// ==/UserScript==


$('.wikitable.resourcemaptable').css('max-width', '1500px')
$('.map-container').css('max-width', '1500px')


// const myStyles = `
// <style class="jholman-userscript-styles">


// </style>
// `;

// $(myStyles).appendTo('head')
