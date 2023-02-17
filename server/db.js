"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(import("./db"));
const indexdb_1 = __importDefault(import("./indexdb"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const PORT = process.env.PORT;
(function startServer() {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      db_1.default.listen(PORT, () =>
        console.log(`Server running on port http://localhost:${PORT}`)
      );
    } catch (error) {
      console.log("Unable to initiate", error);
    }
  });
})();
(() =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      indexdb_1.default.then(() =>
        console.log("Authenticate has been successfull")
      );
    } catch (error) {
      console.log("Authenticate has not been succesfull");
    }
  }))();
