"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//TODO: refactoring

exports.default = function () {
   var aggsBody = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

   var name = void 0;
   for (name in aggsBody) {
      break;
   }var res = { aggs: aggsBody };
   var currentNode = aggsBody[name] || aggsBody;
   var lastNode = currentNode;

   return {
      appendAggs: function appendAggs(name, type) {
         var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

         var aggCtx = _defineProperty({}, name, _defineProperty({}, type, body));
         Object.assign(currentNode, aggCtx);
         lastNode = aggCtx[name];
         return this;
      },
      subAggs: function subAggs() {
         var aggsBody = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

         currentNode = lastNode;
         Object.assign(currentNode, { aggs: aggsBody });
         currentNode = aggsBody[name] || aggsBody;
         return this;
      },

      getAggs: function getAggs() {
         return res;
      }
   };
};