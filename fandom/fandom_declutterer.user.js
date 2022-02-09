// ==UserScript==
// @name              Fandom.com Declutterer
// @include	          *.fandom.com/*
// @description       Generally remove the many ugly and unhelpful DOM elements
// @version           2022-02-09
// @grant             none
// @require           https://code.jquery.com/jquery-3.6.0.min.js
// @run-at            document-end
// ==/UserScript==


$('.global-navigation').remove()
$('#mixed-content-footer').remove()
$('.bottom-ads-container').remove()
$('#WikiaBar').remove()
$('#mwe-popups-svg').remove()

$('aside.page__right-rail').remove()
$('.has-right-rail').removeClass('has-right-rail')


const myStyles = `
<style class="jholman-userscript-styles">

.main-container {
  margin-left: inherit;
  min-width: 702px;
  width: 100%;
}

#SurveyModule {
  display: none;
}

</style>
`;

$(myStyles).appendTo('head')
