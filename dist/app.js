var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import connect from './utils/connect.js';
import dotenv from 'dotenv';
import routes from './routes.js';
dotenv.config({ path: "../config.env" });
const port = process.env.PORT || 5000;
const app = express();
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    yield connect();
    routes(app);
    console.log('listening on port 5000');
}));
//# sourceMappingURL=app.js.map