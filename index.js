"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@babel/polyfill");
var ConfigurationBuilder_1 = __importDefault(require("builder/ConfigurationBuilder"));
var AuditerBuilder_1 = __importDefault(require("builder/AuditerBuilder"));
var TesterBuilder_1 = __importDefault(require("builder/TesterBuilder"));
var ReporterBuilder_1 = __importDefault(require("builder/ReporterBuilder"));
var WebPerformanceTester = /** @class */ (function () {
    function WebPerformanceTester() {
        this.Builder = new ConfigurationBuilder_1.default();
        this.Auditer = new AuditerBuilder_1.default();
        this.Tester = new TesterBuilder_1.default();
        this.Reporter = new ReporterBuilder_1.default();
    }
    WebPerformanceTester.prototype.init = function () {
        // Builder
        // Auditer
        // Tester
        // Repoter
    };
    return WebPerformanceTester;
}());
