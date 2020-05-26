/*
  THIS FILE WAS AUTOGENERATED BY Stylus.tmlanguage (UUID: 60519324-6A3A-4382-9E0B-546993A3869A) */

define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var CssHighlightRules = require("./css_highlight_rules");

var StylusHighlightRules = function() {

    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    var keywordMapper = this.createKeywordMapper({
        "support.constant.color": CssHighlightRules.supportConstantColor,
        "support.constant.fonts": CssHighlightRules.supportConstantFonts
    }, "text", true);

    this.$rules = {
    start: [
        {
            token : "comment",
            regex : /\/\/.*$/
        },
        {
            token : "comment", // multi line comment
            regex : /\/\*/,
            next : "comment"
        },
        {
            token: ["entity.name.function.stylus", "text"],
            regex: "^([-a-zA-Z_][-\\w]*)?(\\()"
        },
        {
            token: ["entity.other.attribute-name.class.stylus"],
            regex: "\\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*"
        },
        {
            token: ["entity.language.stylus"],
            regex: "^ *&"
        },
        {
            token: ["variable.language.stylus"],
            regex: "(arguments)"
        },
        {
            token: ["keyword.stylus"],
            regex: "@[-\\w]+"
        },
        {
            token: "keyword.operator.stylus",
            regex: "!|~|\\+|-|(?:\\*)?\\*|\\/|%|(?:\\.)\\.\\.|<|>|(?:=|:|\\?|\\+|-|\\*|\\/|%|<|>)?=|!="
        },
        {
            token : "string",
            regex : "'(?=.)",
            next  : "qstring"
        }, {
            token : "string",
            regex : '"(?=.)',
            next  : "qqstring"
        }, 
        {
            token : "constant.numeric",
            regex : CssHighlightRules.numRe
        },
        {
            token : keywordMapper,
            regex : "\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"
        }
    ],
    "comment" : [
        {
            token : "comment", // closing comment
            regex : "\\*\\/",
            next : "start"
        }, {
            defaultToken : "comment"
        }
    ],
    "qqstring" : [
        {
            token : "string",
            regex : '[^"\\\\]+'
        }, 
        {
            token : "string",
            regex : "\\\\$",
            next  : "qqstring"
        }, 
        {
            token : "string",
            regex : '"|$',
            next  : "start"
        }
    ],
    "qstring" : [
        {
            token : "string",
            regex : "[^'\\\\]+"
        }, 
        {
            token : "string",
            regex : "\\\\$",
            next  : "qstring"
        }, 
        {
            token : "string",
            regex : "'|$",
            next  : "start"
        }
    ]
};

};

oop.inherits(StylusHighlightRules, TextHighlightRules);

exports.StylusHighlightRules = StylusHighlightRules;
});