"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterButton = exports.Button = void 0;
const Button_1 = __importDefault(require("./components/Button"));
exports.Button = Button_1.default;
const CounterButton_1 = __importDefault(
  require("./components/CounterButton/CounterButton")
);
exports.CounterButton = CounterButton_1.default;
